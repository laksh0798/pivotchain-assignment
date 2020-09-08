import React, { Component } from 'react'
import SituationDashboardCard from '../components/SituationDashboardCard'

class Situationdashboard extends Component {
    render() {
        return (
            <div className="suitationdashboardcontainer">
                <div className="header">
                    Suitation Dashboard
                    <p>____</p>
                </div>
                <div className="suitationdashboard col-12">
                    <div className="row">
                        <SituationDashboardCard
                            title={"Spot"}
                            text={"Spot trend for crimes/abnormal events across geograph over time."}
                            icon={"fa fa-search"}
                        />
                        <SituationDashboardCard
                            title={"HotSpots"}
                            text={"Detect risk pattern an hotspots."}
                            icon={"fa fa-podcast"}
                        />
                    </div>
                    <div className="row">
                        <SituationDashboardCard
                            title={"Live alerts"}
                            text={"Live alert count for public safety events."}
                            icon={"fa fa-bell-o"}
                        />
                        <SituationDashboardCard
                            title={"Response Time"}
                            text={"Predictive response time recommendation for public safety events."}
                            icon={"fa fa-clock-o"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Situationdashboard;