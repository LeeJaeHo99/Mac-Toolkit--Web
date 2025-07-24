import { MessageCircleQuestionMark } from "lucide-react";

export default function SubTitle({
    title,
    subTitle,
    right,
}: {
    title: string;
    subTitle: string;
    right?: boolean;
}) {
    return (
        <div className={`sub-title ${right ? "right" : ""}`}>
            <h2>{title}</h2>
            <h3>
                {subTitle}
                <MessageCircleQuestionMark size={40} />
            </h3>
        </div>
    );
}
