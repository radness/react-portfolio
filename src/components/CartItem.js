import React from "react";

function ItemCart(props) {
  return (
    <div className="component component--item_card" key={props.key}>
      <div className="itemcard">
        <div className="section--itemcard_box">
          <div className="section--itemcard">
            <div className="itemcard--inner">
              <a href={props.ImageURL} className="link--itemcard">
                <span className="section--itemcard_img">
                  <img src={props.ImageURL} className="image--itemcard" alt=""></img>
                </span>
                <span className="section--itemcard_info">
                  <span className="area--itemcard_title">
                    <span className="text--brand">{props.BrandName}</span>
                    <span className="text--title">{props.GoodsName}</span>
                  </span>
                  <span className="area--itemcard_price">
                    <span className="price_seller">
                      <strong className="text--price_seller">
                        {props.SalePrice}
                      </strong>
                      <span className="text--unit">원</span>
                    </span>
                  </span>
                </span>
              </a>
              <div>
                <button className="button--cart-del element-info-cart" 
                  onClick={props.removeCartItem} >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
