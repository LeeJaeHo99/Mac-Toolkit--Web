import { QuestionProps } from "@/types/props";

export default function Question({questionList}: {questionList: QuestionProps[]}) {
    return(
        <div className="question">
            {
                questionList.map(item => (
                    <div className="question-item" key={item.title}>
                        <div className="question-item-title">{item.title}</div>
                        <div className="question-item-answer">{item.answer}</div>
                    </div>
                ))
            }
        </div>
    )
}