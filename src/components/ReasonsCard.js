import React from "react";

const Reasoncard = ({
    icon,
    title,
    text
}) => {
    return (
        <div className="reason-card">
            <i class={icon} aria-hidden="true"></i><br />
            <b>{title}</b>
            <p>{text}s</p>
        </div>
    );
};

export default Reasoncard;