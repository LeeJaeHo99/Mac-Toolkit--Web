"use client";

import { useState, useEffect } from "react";
import { CircleQuestionMark, Eye, Layers2, SquarePen } from "lucide-react";
import Image from "next/image";
import Button from "@/ui/Button";
import AppleWindow from "./AppleWindow";
import { ProductProps } from "@/types/props";

export default function Product({
    icon,
    name,
    text,
    headerList,
    bodyList,
    questionList,
    textList,
    gifUrl,
    review,
    download,
}: ProductProps) {
    const [activeTab, setActiveTab] = useState(-1);
    const handleActiveTab = (tab: number) => {
        if (activeTab === tab) {
            setActiveTab(-1);
        } else {
            setActiveTab(tab);
        }
    };
    const handleCloseActiveTab = () => {
        setActiveTab(-1);
    };

    const [star, setStar] = useState("★★★★★");

    useEffect(() => {
        if (review.length === 0) {
            setStar('☆☆☆☆☆');
            return;
        }

        let sumStar = 0;
        review.map((item) => (sumStar += item.star));
        const averageStar = Math.round(sumStar / (review.length ?? 1));
        const fullStars = Array(averageStar ?? 0).fill("★");
        const emptyStars = Array(5 - (averageStar ?? 0)).fill("☆");
        setStar([...fullStars, ...emptyStars].join(""));
    }, [review]);

    return (
        <div className="product">
            <div className="icon">
                <Image
                    src={`/icons/product_logo/${icon}.png`}
                    alt="product"
                    width={140}
                    height={140}
                />
                <div className="discription">
                    <div className="name">{name}</div>
                    <div className="text">{text}</div>
                    <Button
                        text="Download"
                        className="download"
                        onClick={() => {
                            window.location.href = `/download/${icon}.dmg`;
                        }}
                    />
                </div>
            </div>
            <div className="review-wrap">
                <div className="download">
                    <span className="review-num">{download}</span>
                    <span className="review-title">Downloads</span>
                </div>
                <div className="star">
                    <span>{star}</span>
                    <span className="review-title">Rating</span>
                </div>
            </div>
            <div className="btn-wrap">
                <div
                    className={`content-btn ${
                        activeTab === 0 && "selected preview"
                    }`}
                    onClick={() => handleActiveTab(0)}
                >
                    <Eye />
                    <span>Preview</span>
                </div>
                <div
                    className={`content-btn ${
                        activeTab === 1 && "selected shortcuts"
                    }`}
                    onClick={() => handleActiveTab(1)}
                >
                    <Layers2 />
                    <span>Shortcuts</span>
                </div>
                <div
                    className={`content-btn ${
                        activeTab === 2 && "selected faq"
                    }`}
                    onClick={() => handleActiveTab(2)}
                >
                    <CircleQuestionMark />
                    <span>FAQ</span>
                </div>
                <div
                    className={`content-btn ${
                        activeTab === 3 && "selected review"
                    }`}
                    onClick={() => handleActiveTab(3)}
                >
                    <SquarePen />
                    <span>Review</span>
                </div>
            </div>
            {activeTab !== -1 && (
                <AppleWindow
                    activeTab={activeTab}
                    headerList={headerList}
                    bodyList={bodyList}
                    questionList={questionList}
                    textList={textList}
                    gifUrl={gifUrl}
                    review={review}
                    star={star}
                    handleCloseActiveTab={handleCloseActiveTab}
                />
            )}
        </div>
    );
}
