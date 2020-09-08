import React from 'react'


function Card(props) {
    return (
        <div style={{
            ...styles.card,
            backgroundColor: props.color,
            left: `${props.x}px`,
            top: `${props.y}px`,
            zIndex: props.z_index,
            transform: `translate(-50%,-50%) scale(${props.scale})`,
            opacity: props.opacity,
            backgroundColor: "#0d0f1f"
        }} id={props.id} onMouseEnter={() => {props.handle_next(props.id)}}>
            <div className="cardBody">
                <div className="index">
                    <li>
                        {props.index}
                        <b className="title">{props.title}</b>
                    </li>
                </div>
                <div className="text">{props.text}</div>
                <button className="cardButton">Read More</button>
            </div>
        </div>
    )
}


const styles = {
    card: {
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: "250px",
        width: "450px",
        boxSizing: 'border-box',
        backgroundColor: "#0d0f1f",
        color: "white"
    }
}

export default Card;