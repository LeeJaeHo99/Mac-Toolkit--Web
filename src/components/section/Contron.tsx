"use client";

import { useState, useEffect } from "react";
import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import { ProductData } from "@/types/type";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__QUESTION_LIST,
    FAST_BROWSER__TEXT_LIST,
} from "@/data/productData";

export default function Contron() {
    const [productData, setProductData] = useState<ProductData | null>(null);
    const [downloadCount, setDownloadCount] = useState(0);
    
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get/review`);
            const data = await response.json();
            setProductData(data.data[0].contron);
            setDownloadCount(data.data[0].contron.download);
        };
        fetchProductData();
    }, []);

    const handleDownload = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/download`, {
            method: "POST",
            body: JSON.stringify({ program: "contron" }),
        });
        setDownloadCount(downloadCount + 1);
    };

    return (
        <section className="contron">
            <SubTitle
                title="Control your Mac"
                subTitle="just one Click"
                right
            />
            <Product
                icon="contron"
                name="Contron"
                text="Control your Mac"
                headerList={FAST_BROWSER__HEADER_LIST}
                bodyList={FAST_BROWSER__BODY_LIST}
                questionList={FAST_BROWSER__QUESTION_LIST}
                textList={FAST_BROWSER__TEXT_LIST}
                gifUrl="contron"
                review={productData?.review || []}
                download={downloadCount}
                handleDownload={handleDownload}
            />
        </section>
    );
}
