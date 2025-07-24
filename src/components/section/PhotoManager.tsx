"use client";

import { useState, useEffect } from "react";
import { ProductData } from "@/types/type";
import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__QUESTION_LIST,
    FAST_BROWSER__TEXT_LIST,
} from "@/data/productData";

export default function PhotoManager() {
    const [productData, setProductData] = useState<ProductData | null>(null);
    const [downloadCount, setDownloadCount] = useState(0);

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get/review`);
            const data = await response.json();
            setProductData(data.data[0].photoManager);
            setDownloadCount(data.data[0].photoManager.download);
        };
        fetchProductData();
    }, []);

    const handleDownload = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/download`, {
            method: "POST",
            body: JSON.stringify({ program: "photoManager" }),
        });
        setDownloadCount(downloadCount + 1);
    };

    return (
        <section className="photo-manager">
                <SubTitle title="Photo Manager" subTitle="for your Mac" right/>
                <Product
                    icon="photoManager"
                    name="Photo Manager"
                    text="Photo your Mac"
                    headerList={FAST_BROWSER__HEADER_LIST}
                    bodyList={FAST_BROWSER__BODY_LIST}
                    questionList={FAST_BROWSER__QUESTION_LIST}
                    textList={FAST_BROWSER__TEXT_LIST}
                    gifUrl="photo-manager"
                    review={productData?.review || []}
                    download={downloadCount}
                    handleDownload={handleDownload}
                />
        </section>
    );
}
