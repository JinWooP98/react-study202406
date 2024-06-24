import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({onShow}) => {


    // bump 애니메이션을 제어하는 상태변수
    const [isBump, setIsBump] = useState(false);

    const { button, icon, badge, bump } = styles;

    // 장바구니배열
    const {cartItems} = useContext(CartContext);

    useEffect(() => {
        if(cartItems.length === 0) return;
        setIsBump(true);

        // 애니메이션 실행 후 클래스 삭제
        const timer = setTimeout(() => setIsBump(false), 300)

        return () => {
            clearTimeout(timer);
        }

    }, [cartItems]);

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
        <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
          <span className={icon}>
            <CartIcon/>
          </span>
                <span>My Cart</span>
                <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;