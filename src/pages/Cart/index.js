import React, {useContext} from "react";
import {Context as CartContext} from '../../context/cartContext';
import {loadStripe} from "@stripe/stripe-js";

const Cart = () => {
    const {state: {cart}} = useContext(CartContext);
    const stripeLoadedPromise = loadStripe('pk_test_51I8TOiDe9aGghQptwisV4wiyScKC7rmZoWsVMLHGlCzTKlysIqjGppVypcchS5xvVbwu911hQMZHEnLKs5KV1f3x004repFDGg')

    function handleClick(event) {
        stripeLoadedPromise.then(stripe => {
            stripe.redirectToCheckout({
                lineItems: [{
                    price: 'price_1KL42PDe9aGghQptrZZTyUwQ',
                    quantity: 1,
                }],
                mode: 'payment',
                successUrl: 'https://www.google.com',
                cancelUrl: 'https://www.google.com',
            }).then(response => {
                console.log(response.error);
            }).catch(error => {
                console.log(error);
            });
        });
    }

    let totalPrice = cart.reduce((total, item) => {
        return total + item.quantity * item.price
    }, 0)

    let totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return (
        <>
            <div className="cart">
                <div className="cart__product-box">
                    <h3 className="cart__cart-title">
                        Cart
                    </h3>
                    <div className="cart__cart-table">
                        <div className="cart__cart-table-header">
                            <span className="cart__cart-table-header-product">Product</span>
                            <span className="cart__cart-table-header-price">Price</span>
                            <span className="cart__cart-table-header-quantity">Quantity</span>
                            <span className="cart__cart-table-header-subtotal">Subtotal</span>
                        </div>
                        <div className="cart__cart-table-data">
                            {cart.map(item => {
                                return (
                                    <div className="cart__cart-table-data-product" key={item.id}>
                                        <div className="cart__cart-table-data-product-name">
                                            <img src={item.images[0]} alt={item.title}/>
                                            <span>{item.title}</span>
                                        </div>
                                        <span>$ {item.price}</span>
                                        <span>{item.quantity}</span>
                                        <span>$ {item.quantity * item.price}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="cart__cart-total">
                            <span>Total: $ {totalPrice}</span>
                        </div>
                    </div>
                </div>
                <div className="cart__cart-info">
                    <h3 className="cart__cart-title">
                        Order Info
                    </h3>
                    <div className="cart__cart-info-text">
                        <span>Total products in cart: {totalQuantity}</span>
                    </div>
                    <div className="cart__cart-info-text">
                        <span>Total price for producs: $ {totalPrice}</span>
                    </div>
                    <div className="cart__cart-info-text">
                        <span>Shipping: $ 5.99</span>
                    </div>
                    <div className="cart__cart-info-text">
                        <span>Total order sum: {totalPrice + 5.99}</span>
                    </div>
                    <button onClick={(e) => handleClick(e)}>pay</button>
                    {/*<StripeCheckOutButton price={totalPrice + 5.99}/>*/}
                </div>
            </div>
        </>
    )
}

export default Cart;