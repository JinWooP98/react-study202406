import React from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {


    // 리턴뿐만 아니라 변수에 저장할 때에도 pragment가 있어야 함
    const loginPage = (onLogout) => (
        <>
        <li>
            <a href="/">MyPage</a>
        </li>
        <li>
            <a href="/">Admin</a>
        </li>
        <li>
            <button onClick={onLogout}>LogOut</button>
        </li>
        </>
    );


    const anonymousPage = <li><button>Sign Up</button></li>


    return (
        <AuthContext.Consumer>
            {({isLoggedIn, onLogout}) => {
                return (
                    <nav className={styles.nav}>
                        <ul>
                            {isLoggedIn? loginPage(onLogout) : anonymousPage}
                        </ul>
                    </nav>
                );
            }}
        </AuthContext.Consumer>
    );
};

export default Navigation;