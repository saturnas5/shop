import React, {useContext} from "react";
import {Context as CartContext} from '../../context/cartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
    const {state: {cart}} = useContext(CartContext);

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
                    <Link className="cart__cart-info-checkout" to='/'>checkout</Link>
                </div>
            </div>
        </>
    )
}

export default Cart;