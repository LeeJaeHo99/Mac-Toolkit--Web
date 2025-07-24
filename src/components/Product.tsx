"use client";

import { useState } from "react";
import { CircleQuestionMark, Eye, Layers2, Youtube } from "lucide-react";
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
    youtubeUrl,
    questionList,
}: ProductProps) {
    const [activeTab, setActiveTab] = useState(-1);
    const handleActiveTab = (tab: number) => {
        if (activeTab === tab) {
            setActiveTab(4);
        } else {
            setActiveTab(tab);
        }
    };
    const handleCloseActiveTab = () => {
        setActiveTab(4);
    };

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
                    <Button text="Download" className="download" />
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
                        activeTab === 2 && "selected video"
                    }`}
                    onClick={() => handleActiveTab(2)}
                >
                    <Youtube />
                    <span>Video</span>
                </div>
                <div
                    className={`content-btn ${
                        activeTab === 3 && "selected faq"
                    }`}
                    onClick={() => handleActiveTab(3)}
                >
                    <CircleQuestionMark />
                    <span>FAQ</span>
                </div>
            </div>
            {activeTab !== 4 && activeTab !== -1 && (
                <AppleWindow
                    activeTab={activeTab}
                    headerList={headerList}
                    bodyList={bodyList}
                    youtubeUrl={youtubeUrl}
                    questionList={questionList}
                    handleCloseActiveTab={handleCloseActiveTab}
                />
            )}
        </div>
    );
}


