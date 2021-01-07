import React, {useState} from "react";
import Review from '../Review';
import './style.css';
import "../../global.css";
import data from "../../data.json";


const ReviewGroup: React.FC = () => {
    const [reviewIndex, setReviewIndex] = useState<number>(0);

    setTimeout(() => {
        setReviewIndex(reviewIndex === data.reviews.length - 1 ? 0 : reviewIndex + 1)
    }, 10000)

    return (
        <div className={"review-container"}>
            <div>
                <h3 className={"review-header"}>{"Reviews"}</h3>
                <Review text={data.reviews[reviewIndex].review} author={data.reviews[reviewIndex].author} />
            </div>
        </div>
    )
}

export default ReviewGroup