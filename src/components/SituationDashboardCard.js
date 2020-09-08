import React from "react";
import { Card } from 'react-bootstrap'

const SituationDashboardCard = ({
icon,
title,
text
}) => {
    return (
        <Card className="situationcard col-6">
                <Card.Body>
                    <i className={`${icon} icon`} aria-hidden="true"></i>
                    <div className="suitationcardtext">
                        <div className="title">{title}</div>
                        <div className="info">{text}</div>
                    </div>
                </Card.Body>
        </Card>
    );
};

export default SituationDashboardCard;