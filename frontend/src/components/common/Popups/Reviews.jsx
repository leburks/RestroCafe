import React, { useState, useEffect } from 'react';
import ImgReaction1 from '../../../assets/img/reaction1.svg';
import ImgReaction2 from '../../../assets/img/reaction2.svg';
import ImgReaction3 from '../../../assets/img/reaction3.svg';
import ImgReaction0 from '../../../assets/img/reaction0.svg';
import ImgIconCross from '../../../assets/img/cross.svg';
import API from '../../../API';

const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReview }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.getReviews(selectedItemId).then(reviews => {
            setSelectedItemId(null);
            setReviews(reviews);
        });
    }, []);

    const getImgReaction = like_count => {
        switch (like_count) {
            case 1:
                return ImgReaction1;
            case 2:
                return ImgReaction2;
            case 3:
                return ImgReaction3;
            default:
                return ImgReaction0;
        }
    };

    return (
        <section class="popup">
            <div class="innter">
                <div class="popup-content">
                    <div class="innter">
                        <img src={ImgIconCross} onClick={() => setShowReview(false)} class="cross" alt="" />

                        <h2>Reviews</h2>
                        <ul class="reviews">
                            {reviews && reviews.results ? (
                                reviews.results.map(review => (
                                    <li>
                                        <img src={getImgReaction(review.like_count)} alt="" />
                                        <div class="name">{review.name}</div>
                                        <div class="body">{review.body}</div>
                                    </li>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Reviews;
