import React, { Component } from 'react'
import Reasoncard from '../components/ReasonsCard'
class Reasons extends Component {
    render() {
        return (
            <div style={{borderTop:"solid 1px white"}}>
                <div className="reasonscontainerTitle">
                    <div className="title">
                        5 reasons
                    </div>
                    <div className="question">
                        Why should  you go with Raven?
                    </div>
                </div>
                <div className="reasonContainer">
                <div class="half-circle"></div>
                    <ul class='circle-container'>
                        <li>
                            <Reasoncard
                                icon="fa fa-file-image-o"
                                title="scalable"
                                text="Raven can scale from 1 to 1000 cameras seamlessly"
                                className="item"
                            />
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <Reasoncard
                                icon="fa fa-money"
                                title="Competitive pricing"
                                text="Raven can scale to thousands of cameras seamlessly"
                            />
                        </li>
                        <li>
                            <Reasoncard
                                icon="fa fa-clock-o"
                                title="Low latency"
                                text="Raven detects events in real-time"
                            />
                        </li>
                        <li>
                            <Reasoncard
                                icon="fa fa-camera"
                                title="Camera / device agnostic"
                                text="Works with all cameras"
                            />
                        </li>
                        <li>
                            <Reasoncard
                                icon="fa fa-calendar-o"
                                title="Resilient"
                                text="High-availability to ensure uptime for real time surveillance"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Reasons;