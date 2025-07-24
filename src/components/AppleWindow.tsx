"use client";

import { useState } from "react";
import { AppleWindowProps, AppleWindowItemProps } from "@/types/props";
import Table from "./Table";
import Question from "./Question";
import Preview from "./Preview";
import Review from "./Review";
import Notification from "./Notification";

export default function AppleWindow({
    activeTab,
    headerList,
    bodyList,
    questionList,
    textList,
    gifUrl,
    review,
    icon,
    handleCloseActiveTab,
}: AppleWindowProps) {
    const [status, setStatus] = useState("");

    return (
        <div className="apple-window">
            <Notification notification={status} />
            <div className="apple-window-header">
                <div className="r" onClick={handleCloseActiveTab}></div>
                <div className="y" onClick={handleCloseActiveTab}></div>
                <div className="g" onClick={handleCloseActiveTab}></div>
            </div>
            <div className="apple-window-body">
                <AppleWindowItem
                    activeTab={activeTab}
                    headerList={headerList}
                    bodyList={bodyList}
                    questionList={questionList}
                    textList={textList}
                    gifUrl={gifUrl}
                    review={review}
                    icon={icon}
                    setStatus={setStatus}
                />
            </div>
        </div>
    );
}

function AppleWindowItem({
    activeTab,
    headerList,
    bodyList,
    questionList,
    textList,
    gifUrl,
    review,
    icon,
    setStatus,
}: AppleWindowItemProps) {
    return (
        <div className="apple-window-body-item">
            {activeTab === 0 && <Preview textList={textList} gifUrl={gifUrl} />}
            {activeTab === 1 && (
                <Table headerList={headerList} bodyList={bodyList} />
            )}
            {activeTab === 2 && <Question questionList={questionList} />}
            {activeTab === 3 && (
                <Review
                    review={review}
                    icon={icon}
                    setStatus={setStatus}
                />
            )}
        </div>
    );
}
