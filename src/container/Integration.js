import React, { Component } from 'react'
import Image from '../img/integration.webp'
class Integration extends Component {
    render() {
        return (
            <div className="integrationcontainer">
                <img src={Image} alt="adhcvsav" className="integrationimage" />
                <div className="integrtionInfo">
                    <div className="header">
                        Integration
                    </div>
                    <div className="text">
                        Integration with your notification systems(mail,<br/>sms,buzzer,etc)
                </div>
                </div>
            </div>
        )
    }
}

export default Integration;