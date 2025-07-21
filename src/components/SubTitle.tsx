import { MessageCircleQuestionMark } from "lucide-react";

export default function SubTitle({ title, subTitle }: { title: string; subTitle: string }) {
    return (
        <div className="sub-title">
            <h2>{title}</h2>
            <h3>{subTitle}<MessageCircleQuestionMark size={40} /></h3>
        </div>
    );
}