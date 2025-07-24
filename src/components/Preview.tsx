"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { PreviewProps } from "@/types/props";

export default function Preview({
    textList,
    gitUrl,
}: PreviewProps) {
    const [previewList, setPreviewList] = useState<string[]>([]);

    useEffect(() => {
        setPreviewList(textList);
    }, [textList]);

    return (
        <div className="preview">
            {previewList.map((text, index) => (
                <div key={index}>
                    <p className="preview-text">
                        {text}
                    </p>
                    <Image src={`/images/preview/${gitUrl}/${index + 1}.gif`} alt="preview" width={960} height={360} />
                </div>
            ))}
        </div>
    )
}