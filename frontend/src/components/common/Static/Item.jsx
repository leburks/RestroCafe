import React from 'react';
import { useDispatch } from 'react-redux';
import heartImage from '../../../assets/img/home_heart.png';
import { addCart, increaseCart, decreaseCart } from '../../../reducks/cart/operations';
import addToCart from '../../../assets/img/add-to-cart.svg';

const Item = ({ item, selected_count, setShowWriteReview, setShowReviews, setSelectedItemId }) => {
    const dispatch = useDispatch();
    const clickAddCart = () => {
        dispatch(addCart(item));
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(item));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(item));
    };
    const clickCheckReviews = () => {
        setSelectedItemId(item.id);
        setShowReviews(true);
    };
    const clickWriteReview = () => {
        setSelectedItemId(item.id);
        setShowWriteReview(true);
    };

    return (
                <li>
                    <img class="pic" src={item.image} />
                    <br />
                    <div class="card">
                        <div class="heart_count">
                            <div class="heart_icon">
                                <img src={heartImage} />
                            </div>
                            <div class="count">({item.total_like_count})</div>
                        </div>
                        <div class="item_name">
                            <p class="para_name">{item.name}</p>
                        </div>
                        <div class="review_link">
                            <p id="writeReview" onClick={() => clickWriteReview(true)} href="" target="blank">
                                Write review
                            </p>
                            <p id="checkreview" onClick={() => clickCheckReviews(true)} href="" target="blank">
                                Check Review
                            </p>
                        </div>

                        <div class="cartbutton">
                            {selected_count === 0 ? (
                                <img src={addToCart} onClick={clickAddCart} alt='add-to-cart' />
                            ) : (
                                <div class="number">
                                    <span class="minus" onClick={clickMinusCart}>
                                        -
                                    </span>
                                    <span class="count">{selected_count}</span>
                                    <span class="plus" onClick={clickPlusCart}>
                                        +
                                    </span>
                                </div>
                            )}
                            <p id="price">${item.price}</p>
                        </div>
                    </div>
                </li>
    );
};

export default Item;
