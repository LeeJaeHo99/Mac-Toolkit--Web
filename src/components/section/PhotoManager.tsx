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
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch("/api/get/review");
            const data = await response.json();
            setProductData(data.data[0].photoManager);
        };
        fetchProductData();
    }, []);

    return (
        <section className="photo-manager">
                <SubTitle title="Photo Manager" subTitle="for your Mac" right/>
                <Product
                    icon="photo_manager"
                    name="Photo Manager"
                    text="Photo your Mac"
                    headerList={FAST_BROWSER__HEADER_LIST}
                    bodyList={FAST_BROWSER__BODY_LIST}
                    questionList={FAST_BROWSER__QUESTION_LIST}
                    textList={FAST_BROWSER__TEXT_LIST}
                    gifUrl="fast-browser"
                    review={productData?.review || []}
                    download={productData?.download || 0}
                />
        </section>
    );
}
