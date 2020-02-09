import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
};

export default class PickupSaving extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSavings: 3.85
        }
    }

    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <p>Pickingup your order in the store helps cut costs, and we pass the aavings on to you.</p>
            </Tooltip>
        );

        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupSavings}>Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col stlye={styles.totalSavings} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        );
    }
}