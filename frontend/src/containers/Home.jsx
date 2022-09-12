import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../components/common/Static/Item';
import lineLogo from '../assets/img/home_main_line.png';
import itemImage from '../assets/img/home_item_1.png';
import heartImage from '../assets/img/home_heart.png';
import { fetchItems } from '../reducks/item/operations';
import { getItems } from '../reducks/item/selectors';
import { getCarts, getSubtotal } from '../reducks/cart/selectors';
import { fetchFromLocalStorage } from '../reducks/cart/operations';
import queryString from 'query-string';
import Header from '../components/common/Static/Header';
import Footer from '../components/common/Static/Footer';
import PopWriteReview from '../components/common/Popups/WriteReview';
import PopReview from '../components/common/Popups/Reviews';
// import Buttons from '../components/common/Buttons';

const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [showWriteReviews, setShowWriteReview] = useState(false);
    const [showReviews, setShowReview] = useState(false);
    const [showCartList, setShowCartList] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(false);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const item = getItems(selector);
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    useEffect(() => {
        dispatch(fetchFromLocalStorage());
        dispatch(fetchItems(parsed.category));
        // eslint-disable-next-line
    }, []);

    const showItem = item => {
        let selected_count = 0;
        if (carts[item.id] && carts[item.id].selected_count) {
            selected_count = carts[item.id].selected_count;
        }

        if (showCartList && carts[item.id] === undefined) {
            return;
        }

        return (
            <Item
                key={item.id}
                item={item}
                selected_count={selected_count}
                setShowWriteReview={setShowWriteReview}
                setShowReviews={setShowReview}
                setSelectedItemId={setSelectedItemId}
            ></Item>
        );
    };

    return (
        <>
            <Header />

            <section class="mid_content">
                {showCartList ? (
                    <>
                        <h1>Selected Items</h1>
                        <p>Please show this page to the waiter.</p>
                    </>
                ) : (
                    <>
                        <div class="mid_quote">
                            <h1>Our Most Popular Recipes</h1>
                        </div>
                        <div>
                            <img src={lineLogo} />
                        </div>
                        <div>
                            <p>Try Our Most Delicious Food and it usually take minutes to deliver! </p>
                        </div>
                    </>
                )}
            </section>
            {/* <Buttons /> */}
            {/* <ul class="items">{item && item.results.map(items => showItem(items))}</ul> */}

            <div className="items">
                {item && item.results ? item.results.map(items => showItem(items)) : <p> Loading...</p>}
            </div>

            <Footer price={subtotal} showCartList={showCartList} setShowCartList={setShowCartList} />

            {showWriteReviews && (
                <PopWriteReview
                    selectedItemId={selectedItemId}
                    setSelectedItemId={setSelectedItemId}
                    setShowWriteReview={setShowWriteReview}
                />
            )}
            {showReviews && (
                <PopReview
                    selectedItemId={selectedItemId}
                    setSelectedItemId={setSelectedItemId}
                    setShowReview={setShowReview}
                />
            )}
        </>
    );
};
export default Home;
