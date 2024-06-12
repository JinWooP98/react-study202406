import React from "react";
import Card from "./UI/Card"; // 신버전에선 생략 가능, 하지만 웬만하면 써주는 것이 좋다(?)

const Greet = (ccc) => {

    return (
      <Card className='border-green'>
        <h1>
            Hello React!
            {ccc.children}
        </h1>
      </Card>
    );
}

export default Greet;
