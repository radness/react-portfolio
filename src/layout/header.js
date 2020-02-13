import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul className="homeLink">
          <li className="link_list">
            <Link to="/react/itemlist/">상품리스트</Link>
          </li>
          <li className="link_cart">
            <Link to="/react/itemlist/Cart">장바구니 ({this.props.lengthCart})</Link>
          </li>
          {/* <li className="link_login">
            <Link to="/Login">로그인</Link>
          </li>
          <li className="link_join">
            <Link to="/Join">회원가입</Link>
          </li> */}
        </ul>
      </div>
    );
  }
}
export default Header;
