"use client";

import { useState } from "react";
import { QuestionProps } from "@/types/props";

export default function Question({
    questionList,
}: {
    questionList: QuestionProps[];
}) {
    const [activeQuestion, setActiveQuestion] = useState(-1);
    const handleActiveQuestion = (index: number) => {
        setActiveQuestion(index);
    };

    const handleCloseQuestion = (index: number) => {
        if (activeQuestion === -1) return;
        else if (activeQuestion === index) setActiveQuestion(-1);
    };

    return (
        <div className="question">
            {questionList.map((item, index) => (
                <div
                    className={`question-item ${activeQuestion === index && "active"}`}
                    key={item.title}
                    onClick={() => {
                        handleActiveQuestion(index);
                        handleCloseQuestion(index);
                    }}
                >
                    <div className="question-item-title">{item.title}</div>
                    <div className="question-item-answer">{item.answer}</div>
                </div>
            ))}
        </div>
    );
}
