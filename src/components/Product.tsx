"use client";

import { useState } from "react";
import { CircleQuestionMark, Hand, Layers2, Youtube } from "lucide-react";
import Image from "next/image";
import Button from "@/ui/Button";
import AppleWindow from "./AppleWindow";

interface ProductProps {
    name: string;
    text: string;
    headerList: string[];
    bodyList: string[][];
    youtubeUrl: string;
}

export default function Product({
    name,
    text,
    headerList,
    bodyList,
    youtubeUrl,
}: ProductProps) {
    const [activeTab, setActiveTab] = useState(0);
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
                    src="/icons/product_logo/fast_browser.png"
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
                        activeTab === 0 && "selected how-to-use"
                    }`}
                    onClick={() => handleActiveTab(0)}
                >
                    <Hand />
                    <span>How to use</span>
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
            {activeTab !== 4 && (
                <AppleWindow
                    activeTab={activeTab}
                    headerList={headerList}
                    bodyList={bodyList}
                    youtubeUrl={youtubeUrl}
                    handleCloseActiveTab={handleCloseActiveTab}
                />
            )}
        </div>
    );
}


