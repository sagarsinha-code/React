import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
    const HigherOrderComponent = (props) => {

        const [count, setCount] = useState(0);

        const increment = () =>  {
            return setCount(count + 1)
        }

        return (<OriginalComponent count={count} increment={increment} {...props} />)
    }

    return HigherOrderComponent;

}

export default UpdatedComponent;