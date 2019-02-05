import React, { Component } from 'react';
export default class ProfCard extends Component {
  constructor(props) {
    super(props);
    this.goToDetail = this.goToDetail.bind(this);
  }
  goToDetail() {
    this.props.goto()
  }
render() {
  return (
        <div className="col-xs-12">
          <div className="productBox">
            <div className="productImage hoverStyle">
              <img src="http://placehold.it/263x332" width="263" height="332" alt="" />
              <div className="hoverBox">
                <div className="hoverIcons">
                  <div className="eye hovicon clicablediv"
                  onClick={() => { this.goToDetail(); }}><i className="fa fa-eye"></i></div>
                </div>
                <a href="view-cart.html" className="cartBTN2">Add to Cart</a>
              </div>
            </div>
            <div className="productDesc">
              <span
                className="product-title clicablediv">
                Corine Genuine Leather Tote
              </span>
                <p>Genuine leather exterior, poly resin lining</p>
                <div className="stars">
                  <span className="starsimgRating"></span>
                </div>
                <strong className="productPrice">$19.00</strong>
              </div>
            </div>
        </div>
  );
}
}
