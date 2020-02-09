import React, { Component } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../../../actions/PromoCodeActions';

class PromoCodeDiscount extends Component {
    // we no longer need a constructor as the state will be managed in redux

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    handleChange = e => {
        // the setState below will be sent to redux
        // this.setState({ value: e.target.value });
        this.props.handleChange(e);
    };

    render() {
    return (
        <div>
            <Button
                className="promo-code-button"
                bsStyle="link"
                onClick={() => this.setState({ open: !this.state.open })}
            >
            {this.state.open === false ? `Apply ` : `Hide `}
            promo code
            {this.state.open === false ? `+` : `-`}
            </Button>
            <Collapse in={this.state.open}>
            <div>
                    <Row className="show-grid">
                        <Col md={12}>
                            <Form>
                                <Form.Group controlId="formInlineName">
                                    <Form.Label>Promo Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter promo code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>{' '}
                                <Button
                                    block
                                    bsStyle="success"
                                    className="btn-round"
                                    // type="submit"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                >
                                    Apply
                                </Button>
                            </Form>
                        </Col>
                    </Row>
            </div>
            </Collapse>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(PromoCodeDiscount);