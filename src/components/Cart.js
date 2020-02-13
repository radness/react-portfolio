import React, { Component } from "react";
import ItemCart from "./CartItem";

class Cart extends Component {

  render() {
    const { CartList, removeCartItem } = this.props;
    console.log(CartList);
    return (
      <div id="content" className="state--content_view_type__list">
        <div className="section--content_body_container">
          <div id="region--content_body">
            <div id="section--inner_content_body_container">
              <div className="section--module_wrap">
                {CartList &&
                  CartList.map((CartList, insertIndex) => {
                    console.log(CartList);
                    return (
                      <ItemCart
                        key={insertIndex}
                        ImageURL={CartList.ImageURL}
                        BrandName={CartList.BrandName}
                        GoodsName={CartList.GoodsName}
                        SalePrice={CartList.SalePrice}
                        removeCartItem={removeCartItem}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
