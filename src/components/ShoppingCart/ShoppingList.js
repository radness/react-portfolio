import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import SubTotal from './SubTotal/SubTotal';
import PickupSavings from './PickupSavings/PickupSaving';
import TaxesFees from './TaxesFees/TaxesFees';
import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import ItemDetails from './ItemDetails/ItemDetails';
import PromoCode from './PromoCode/PromoCode';

import './ShoppingList.css';

// Import redux provider
// import { connect } from 'react-redux';
// import { handleChange } from './actions/PromoCodeActions';

class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
        total: 100.0,
        taxes: 0,
        pickupSavings: -3.85,
        estimatedTotal: 0,
        disablePromoButton: false
        };
    }

    componentDidMount = () => {
        this.setState(
            { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
            function() {
                this.setState({
                estimatedTotal:
                    this.state.total + this.state.pickupSavings + this.state.taxes
                });
            }
        );
    };
    
    giveDiscountHandler = () => {
        if (this.props.promoCode === 'DISCOUNT') {
            this.setState(
                { estimatedTotal: this.state.estimatedTotal * 0.9 },
                function() {
                    this.setState({
                        disablePromoButton: true
                    });
                }
            );
        }
    };

    render() {
        return (
            <div className="container">
                <Grid className="purchase-card">
                <SubTotal price={this.state.total.toFixed(2)} />
                <PickupSavings price={this.state.pickupSavings} />
                <TaxesFees taxes={this.state.taxes.toFixed(2)} />
                <hr />
                <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
                <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
                <hr />
                <PromoCode
                    giveDiscount={() => this.giveDiscountHandler()}
                    isDisabled={this.state.disablePromoButton}
                />
                </Grid>
            </div>
        );
    }
}


export default ShoppingList;