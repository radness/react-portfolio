import React, { Component } from "react";

class ItemSort extends Component {
  render() {
    const {
      activeSort,
      handleSort,
      sortRanking,
      sortRowPrice,
      sortBuyCount,
      sortButtonControl
    } = this.props;

    return (
      <div className="section--select_option">
        <button
          type="button"
          className="link--button_sort"
          onClick={handleSort}
        >
          정렬
        </button>
        <div className={`sort--option_box ${activeSort}`}>
          <ul className="sort--option_select">
            <li className={sortButtonControl[0] ? "item item--active" : "item"}>
              <button type="button" onClick={sortRanking} className="link">
                랭킹순
              </button>
            </li>
            <li className={sortButtonControl[1] ? "item item--active" : "item"}>
              <button type="button" onClick={sortBuyCount} className="link">
                구매순
              </button>
            </li>
            <li className={sortButtonControl[2] ? "item item--active" : "item"}>
              <button type="button" onClick={sortRowPrice} className="link">
                낮은가격순
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ItemSort;
