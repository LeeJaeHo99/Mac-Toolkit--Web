import { reviewTop, reviewBot } from "@/data/review";
import Image from "next/image";

export default function ReviewToplider() {
    return (
        <div className="review-slider">
            <div className="row row-top">
                {[...reviewTop, ...reviewTop].map((r, i) => (
                    <ReviewCard review={r} key={`top-${i}`} />
                ))}
            </div>
            <div className="row row-bottom">
                {[...reviewBot, ...reviewBot].map((r, i) => (
                    <ReviewCard review={r} key={`bottom-${i}`} />
                ))}
            </div>
        </div>
    );
}

function ReviewCard({ review }: { review: typeof reviewTop[number] }) {
    return (
        <div className="review-card">
            <div className="card-top">
                <div className="profile-wrapper">
                    <Image className="profile" width={40} height={40} src={review.photo} alt={review.name} />
                </div>
                <div className="stars">{"★".repeat(review.rating)}</div>
            </div>
            <p className="card-text">{review.text}</p>
        </div>
    );
}
