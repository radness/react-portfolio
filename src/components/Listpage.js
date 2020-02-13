import React, { Component } from "react";
import ItemCard from "./Itemcard";

class Listpage extends Component {
  id = 1;
  state = {};

  render() {
    const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
        {Itemcard &&
          Itemcard.map((itemdata, insertIndex) => {
            return (
              <ItemCard
                key={insertIndex}
                ImageURL={itemdata.ImageURL}
                BrandName={itemdata.BrandName}
                GoodsName={itemdata.GoodsName}
              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;
