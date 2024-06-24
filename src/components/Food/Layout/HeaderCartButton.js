import React, {useContext} from 'react';
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({onShow}) => {

    const { button, icon, badge } = styles;

    const {totalAmount, cartItems} = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => {
        console.log('a= ',accum);
        console.log(current);
        return accum + current.amount;
    }, 0);

    // console.log(cartItems);
    // let totalAmount = 0;
    //
    // for (const cartItem of cartItems) {
    //     totalAmount += cartItem.amount;
    // }


    return (
        <button className={button} onClick={onShow}>
          <span className={icon}>
            <CartIcon/>
          </span>
                <span>My Cart</span>
                <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;