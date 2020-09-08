import React from 'react'
import image from '../img/integration.webp'

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
            backgroundColor: "#11122e"
        }} onMouseEnter={() => props.handle_next(props.index)} id={props.index}>
            <div className="detectcardBody">
                <img src={image} alt="detect card Image"/>
                <p>{props.title}</p>
                <p>{props.text} <i className="fa fa-arrow-right" aria-hidden="true"></i> </p>
            </div>
        </div>
    )
}


const styles = {
    card: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: "400px",
        width: "600px",
        boxSizing: 'border-box',
        backgroundColor: "#0d0f1f",
        color: "white"
    }
}

export default Card;