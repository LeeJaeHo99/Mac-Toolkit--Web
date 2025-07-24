import { ReviewProps } from "@/types/props";

export default function Review({ review }: ReviewProps) {
    return(
        <div className="review">
            {review.map((item) => (
                <div className="review-item" key={`${item.star}-${item.text}`}>
                    <div className="review-item-star">{item.star}</div>
                    <div className="review-item-text">{item.text}</div>
                </div>
            ))}
        </div>
    )
}