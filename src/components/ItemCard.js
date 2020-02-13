import React from "react";

function ItemCard(props) {
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
                  <span className="section--itemcard_info_add">
                    <span className="text--addinfo">{props.DeliveryText}</span>
                    <span className="text--addinfo">{props.DeliveryInfo}</span>
                  </span>
                  <span className="section--itemcard_info_score">
                    <span className="score--buycnt">
                      <span className="text--buycnt">구매</span>
                      <span className="text--buycnt__num">{props.BuyCount}</span>
                      <span className="ir">건</span>
                    </span> &nbsp;
                    <span className="score--awards">
                      <span className="ir">만족도</span>
                      <span className="text--awards">4.8</span>
                      <span className="ir">점</span>
                    </span>
                  </span>
                </span>
              </a>
              <div>
                <button
                  className="button--cart element-info-cart"
                  onClick={props.addCartItem}
                >
                  <span className="icon--cart">
                    <span className="ir">장바구니담기</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
