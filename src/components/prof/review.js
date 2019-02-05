import React, { Component } from 'react';
export default class Review extends Component {
  render() {
    return(
    <div role="tabpanel" className="tab-pane" id="reviews">
      <div className="reviewBox clearfix">
         <div className="reviewFrame">
            <i className="fa fa-user"></i>
         </div>
         <div className="reviewContent">
            <div className="reviewTitle">John Doe</div>
            <div className="stars text-left">
               Friday, February 12, 2017 &nbsp; &nbsp;
               <span className="starsimgRating"></span>
            </div>
            <p>Excellent product, easy to wear and perfect for every style, highly recommended. Amazing product, everyone in my friends just loved it, perfect to wear it on every occasion. Great value of your money, I would love to purchase from the store again. Excellent shopping experience, 5 Star.</p>
         </div>
      </div>
      <div className="reviewBox clearfix">
         <div className="reviewFrame">
            <i className="fa fa-user"></i>
         </div>
         <div className="reviewContent">
            <div className="reviewTitle">Steve Coleman</div>
            <div className="stars text-left">
               Friday, February 12, 2017 &nbsp; &nbsp;
               <span className="starsimgRating"></span>
            </div>
            <p>Excellent product, easy to wear and perfect for every style, highly recommended. Amazing product, everyone in my friends just loved it, perfect to wear it on every occasion. Great value of your money, I would love to purchase from the store again. Excellent shopping experience, 5 Star.</p>
         </div>
      </div>
      <div className="reviewBox clearfix">
         <div className="reviewFrame">
            <i className="fa fa-user"></i>
         </div>
         <div className="reviewContent">
            <div className="reviewTitle">Jack Martin</div>
            <div className="stars text-left">
               Friday, February 12, 2017 &nbsp; &nbsp;
               <span className="starsimgRating"></span>
            </div>
            <p>Excellent product, easy to wear and perfect for every style, highly recommended. Amazing product, everyone in my friends just loved it, perfect to wear it on every occasion. Great value of your money, I would love to purchase from the store again. Excellent shopping experience, 5 Star.</p>
         </div>
      </div>
   </div>
 )
}
}
