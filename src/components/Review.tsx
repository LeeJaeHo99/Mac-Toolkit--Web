"use client";

import { useRef } from "react";
import Image from "next/image";
import { ReviewProps } from "@/types/props";
import { Send } from "lucide-react";

export default function Review({ review, star }: ReviewProps) {
    const reviewTextRef = useRef<HTMLInputElement>(null);
    const reviewStarRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(reviewTextRef.current?.value, reviewStarRef.current?.value);
    };

    return (
        <div className="review-slider review-tab">
            <form className="write-review" onSubmit={handleSubmit}>
                <select
                    name="star"
                    id="star"
                    ref={reviewStarRef}
                    required
                >
                    <option value="0">Select Star</option>
                    <option value="1">★☆☆☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="4">★★★★☆</option>
                    <option value="5">★★★★★</option>
                </select>
                <input
                    type="text"
                    placeholder="Write a review Please 😁"
                    ref={reviewTextRef}
                    required
                />
                <button className="write-review-btn" type="submit">
                    <Send size={16} color="#fff" />
                </button>
            </form>
            <div className="row">
                {review.map((item) => (
                    <div
                        className="review-card"
                        key={`${item.star}-${item.text}`}
                    >
                        <div className="card-top">
                            <div className="profile-wrapper">
                                <Image
                                    className="profile"
                                    width={40}
                                    height={40}
                                    src={`/images/profile/${
                                        Math.floor(Math.random() * 14) + 1
                                    }.png`}
                                    alt="star"
                                />
                            </div>
                            <div className="stars">{star}</div>
                        </div>
                        <p className="card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
