import React from 'react';
import mainLogo from '../../../assets/img/homemainlogo.png'

const Footer = ({ price, showCartList, setShowCartList }) => {
    return (
        <>
            <footer>
                <div class="cart_total">
                    <div class="cart_button">
                        {showCartList ? (
                            <button class="link-button" onClick={() => setShowCartList(false)}>
                                ← Go back to Home
                            </button>
                        ) : (
                            <button onClick={() => setShowCartList(true)}>Check selected Items</button>
                        )}
                    </div>
                    <div class="subtotal">
                        <span class="subtotal-test">Subtotal:</span>
                        <span class="subtotal-price">${price}</span>
                    </div>
                </div>
            </footer>

            <section className='footer-container'>
                <center>
                    <div class="footer">
                        <img class="foot-logo" src={mainLogo} />
                        <p>
                            Premium Quality food at the best and most affordable price. we have a new offer every day
                            for 365 days
                        </p>
                        <h3>Contact</h3>
                        <span>E-mail : quickfood@Restrocafe.com | Hotline: +1 131 138 138</span>
                        <div class="copyright">
                            <p>DESIGN BY RESTRO CAFE - © 2022. ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </center>
            </section>
        </>
    );
};

export default Footer;
