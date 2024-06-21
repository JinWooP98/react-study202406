import React from 'react';
import styles from './Header.module.scss';

// 정적 이미지 로딩
import foodImage from '../../../assets/img/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

    // 스네이크캐이스는 반드시 카멜캐이스로 바꿔주어야 한다.
    const {header, 'main-image' : mainImage } = styles;

    return (
        <>
            <header className={header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={mainImage}>
                <img src={foodImage} alt={"음식 사진"}/>
            </div>
        </>
    );
};

export default Header;