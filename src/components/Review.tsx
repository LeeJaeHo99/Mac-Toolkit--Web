"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ReviewProps } from "@/types/props";
import { Send } from "lucide-react";

interface ReviewData {
    text: string;
    star: number;
}

export default function Review({ review, icon, setStatus }: ReviewProps) {
    const reviewTextRef = useRef<HTMLInputElement>(null);
    const reviewStarRef = useRef<HTMLSelectElement>(null);
    const [reviewList, setReviewList] = useState<ReviewData[]>([]);

    useEffect(() => {
        setReviewList(review);

    }, [review]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const reviewText = reviewTextRef.current?.value || "";
            const reviewStar = Number(reviewStarRef.current?.value) || 0;
            const reviewData = {
                text: reviewText,
                star: reviewStar,
            };

            if (reviewText === '' || reviewStar === 0) {
                setStatus?.('error');

                setTimeout(() => {
                    setStatus?.('');
                }, 1000);
                return;
            }
    
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/review`, {
                method: "POST",
                body: JSON.stringify({ program: icon, review: reviewData }),
            });
    
            setStatus?.('loading');
    
            setTimeout(() => {
                setStatus?.('success');
                setReviewList([...reviewList, reviewData]);

                reviewTextRef.current!.value = '';
                reviewStarRef.current!.value = '0';

                setTimeout(() => {
                    setStatus?.('');
                }, 1000);
            }, 800);
        } catch (error) {
            if (error instanceof Error) {
                setStatus?.('error');
            }
        }
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
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
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
                {reviewList.map((item) => (
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
                            <div className="stars">
                                {Array(item.star).fill("★").join("")}
                                {Array(5 - item.star).fill("☆").join("")}
                            </div>
                        </div>
                        <p className="card-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
