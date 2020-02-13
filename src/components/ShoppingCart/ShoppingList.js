import React, { Component } from "react";
import axios from "axios";
import Listpage from "../Listpage";
import './ShoppingList.css';
import ItemCard from '../Itemcard';
import { Route } from 'react-router-dom';
import Header from "../../layout/header";
import Cart from "../Cart";

class ShoppingList extends Component {
  // 제일 common한 state값 초기 셋팅
  state = {
    loading: false,
    ItemList: [], // 처음 Itemlist는 있는 상태로 기획 []
    ItemListOrigin: [],
    CartList: [],
    freeShipToggle: false, // 무료 배송
    sortButtonControl: [true, false, false]
  };

  insertIndex = 1;

  loadItem = async () => {
    // Json Data 불러오기
    axios // axios를 이용해
      .get("./SearchJson.json") // json을 가져온다음
      .then(({ data }) => {
        // data라는 이름으로 json 파일에 있는 값에 state값을 바꿔준다.
        this.setState({
          loading: true, // load되었으니 true,
          ItemList: data.Item // 비어있던 Itemlist는 data에 Item객체를 찾아넣어준다. ( Item : json파일에 있는 항목)
        });
      })
      .catch(e => {
        // json이 로드되지않은 시간엔
        console.error(e); // 에러표시
        this.setState({
          loading: false // 이때는 load 가 false 유지
        });
      });
  };

  componentDidMount() {
    this.loadItem();
  }

  // 장바구니에 추가
  addCartItem = selectItem => {
    const ItemList = [...this.state.ItemList];
    let CartList = this.state.CartList;

    if (selectItem > -1) {
      alert("장바구니에 담았습니다.");
      CartList.push(ItemList[selectItem]);
      this.setState({
        CartList: CartList
      });
    } else {
      //특정값 찾아야함
      alert("이미 담겨 있습니다.");
    }
  };

  // 장바구니 삭제
  removeCartItem = selectItem => {
    let CartList = this.state.CartList;
    CartList.splice(CartList[selectItem], 1);
    alert("장바구니에서 삭제합니다.");
    this.setState({
      CartList: CartList
    });
  };

  //무료배송 온오프 컨트롤 함수
  makeFreeDeliveryFunc = () => {
    this.setState({
      freeDeliveryToggle: !this.state.freeDeliveryToggle
    });
    if (!this.state.freeDeliveryToggle) {
      //무료배송 선택됨
      const itemFreeDeliveryLists = this.state.ItemList.filter(itemdata => {
        return itemdata.Delivery.DeliveryText === "무료배송";
      });
      this.setState({
        ItemList: itemFreeDeliveryLists
      });
    } else {
      if (this.state.sortButtonControl[0]) {
        this.sortRanking();
      } else if (this.state.sortButtonControl[1]) {
        this.sortBuyCount();
      } else if (this.state.sortButtonControl[2]) {
        this.sortRowPrice();
      }
    }
  };

  listItemFunc = () => {
    const ItemList = this.state.ItemList.map((itemdata, insertIndex) => {
      return (
        <ItemCard
          key={insertIndex}
          ImageURL={itemdata.ImageURL}
          BrandName={itemdata.BrandName}
          GoodsName={itemdata.GoodsName}
          SalePrice={itemdata.SalePrice}
          DeliveryText={itemdata.DeliveryText}
          DeliveryInfo={itemdata.DeliveryInfo}
          BuyCount={itemdata.BuyCount}
          addCartItem={this.addCartItem.bind(this, insertIndex)}
        />
      );
    });
    return ItemList;
  };

  Listalign = () => {};

  //랭킹순
  sortRanking = () => {
    const ItemListOriginLength = this.state.ItemListOrigin.length;
    const sortList = this.state.ItemListOrigin.slice(
      0,
      ItemListOriginLength
    ).sort(function(a, b) {
      return a["ranking"] - b["ranking"];
    });
    this.setState({
      ItemList: sortList,
      sortButtonControl: [true, false, false]
    });
  };

  //구매순
  sortBuyCount = () => {
    const ItemListOriginLength = this.state.ItemListOrigin.length;
    const sortList = this.state.ItemListOrigin.slice(
      0,
      ItemListOriginLength
    ).sort(function(a, b) {
      return b["AcmlContrCnt"] - a["AcmlContrCnt"];
    });
    this.setState({
      ItemList: sortList,
      sortButtonControl: [false, true, false]
    });
  };

  //낮은 가격순
  sortRowPrice = () => {
    const ItemListOriginLength = this.state.ItemListOrigin.length;
    const sortList = this.state.ItemListOrigin.slice(
      0,
      ItemListOriginLength
    ).sort(function(a, b) {
      return a["SellPrice"] - b["SellPrice"];
    });
    this.setState({
      ItemList: sortList,
      sortButtonControl: [false, false, true]
    });
  };

  // ShoppingList.js 컴포넌트의 최종 보여지는 render값 정의
  render() {
    const { loading, ItemList, CartList, sortButtonControl } = this.state;
    
    if (loading === "false" || !ItemList)
      // data 불러오기 전 loading 노출
      return (
        <div>
          로딩중입니다... <br />
          로딩중입니다... <br />
          로딩중입니다... <br />
          로딩중입니다... <br />
          로딩중입니다...
        </div>
      );

    return (
      <div>
          <Header lengthCart={CartList.length} />
          <Route 
            exact
            path="/react/itemlist/"
            render={props => {
              //console.log(this.state.ItemListOrigin, ItemList.length);
              return (
                <Listpage
                  {...props}
                  ItemList={this.state.ItemList}
                  listItemFunc={this.listItemFunc}
                  sortRanking={this.sortRanking}
                  sortBuyCount={this.sortBuyCount}
                  sortRowPrice={this.sortRowPrice}
                  sortButtonControl={sortButtonControl}
                  makeFreeDeliveryFunc={this.makeFreeDeliveryFunc}
                />
              );
            }}
          />
          <Route 
            path="/react/itemlist/Cart"
            render={props => {
              return <Cart {...props} CartList={CartList} removeCartItem={this.removeCartItem.bind(this)} />;
            }}
          />
      </div>
    );
  }
}

export default ShoppingList;
