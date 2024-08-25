import React from "react";

const XButton = (props) => {
    if (props.variant === "primary") {
        return <button>PRIMARY</button>;
    } else if (props.variant === "secondary") {
        return <button>Secondary</button>;
    } else {
        return <button>Default</button>;
    }
};

export default XButton;
