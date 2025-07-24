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
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch("/api/get/review");
            const data = await response.json();
            setProductData(data.data[0].contron);
        };
        fetchProductData();
    }, []);

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
                gifUrl="fast-browser"
                review={productData?.review || []}
                download={productData?.download || 0}
            />
        </section>
    );
}
