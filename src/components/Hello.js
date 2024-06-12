// 첫글자가 대문자인 경우 component js 파일로 인식하며
// 첫글자가 소문자인 경우 일반 js 파일로 인신한다.

import React from "react";

class Hello extends React.Component {

    render() {

        return (
            <>
                <h1>하하호호</h1>
                <h2>냠냠뇽뇽</h2>
            </>
        );
    }
}

export default Hello;