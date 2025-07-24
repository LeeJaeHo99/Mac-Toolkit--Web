"use client";

import SubTitle from "@/components/SubTitle";
import Product from "@/components/Product";
import {
    FAST_BROWSER__HEADER_LIST,
    FAST_BROWSER__BODY_LIST,
    FAST_BROWSER__QUESTION_LIST,
    FAST_BROWSER__TEXT_LIST,
} from "@/data/productData";
import { useState, useEffect } from "react";
import { ProductData } from "@/types/type";

export default function FastBrowser() {
    const [productData, setProductData] = useState<ProductData | null>(null);
    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch("/api/get/review");
            const data = await response.json();
            setProductData(data.data[0].fastBrowser);
        };
        fetchProductData();
    }, []);

    return (
        <section className="fast-broswer">
                <SubTitle title="Want to Jump to" subTitle="The Site Quickly" />
                <Product
                    icon="fast_browser"
                    name="Fast Browser"
                    text="Quick access link"
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
