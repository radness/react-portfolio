import React, { Component } from "react";

class ItemFilter extends Component {
  renderViewType() {
    const { activeViewGallery, activeViewList, handleViewType } = this.props;
    return (
      <div className="section--select_view_type">
        <span className="text--text--filter_title">상품보기 방식</span>
        <button
          className={`button--type_gallery_view ${activeViewGallery}`}
          onClick={handleViewType}
        />
        <button
          className={`button--type_list_view ${activeViewList}`}
          onClick={handleViewType}
        />
      </div>
    );
  }

  render() {
    const { activeFilter, handleFilter, makeFreeDeliveryFunc } = this.props;
    return (
      <div id="region--content_filter" className={`${activeFilter}`}>
        <div className="section--module_wrap">
          <div className="section--content_filter_container">
            <div className="content--filter_top">
              <h3 className="text--filter_title">상세검색</h3>
            </div>
            <div className="section--content_scroll_content">
              {this.renderViewType()}
              <div className="section--module_wrap">
                <div className="component component--filter type-simple name--select_delivery">
                  <div className="filter_content">
                    <div className="section--checkbox_form">
                      <input
                        type="checkbox"
                        name="smiledelivery"
                        id="check--delivery_free"
                        className="custom_form--checkbox"
                      />
                      <label
                        htmlFor="check--delivery_free"
                        className="custom_form--label"
                        onClick={makeFreeDeliveryFunc}
                      >
                        무료배송
                      </label>
                    </div>
                  </div>
                </div>
                <div className="section--module_wrap">
                  <div
                    className="component component--filter type-toggle name--store "
                    id="section--store"
                  />
                </div>
                <div className="section--module_wrap">
                  <div className="section--filter_close">
                    <button
                      type="button"
                      className="button--close_filter_container"
                      onClick={handleFilter}
                    >
                      <span className="button--close_text">닫기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemFilter;
