import React, { Component } from 'react';
import Review from './review';
import Additional from './addInfo';
export default class PageProf extends Component {
  render() {
    return(
          <div id="content" className="productDetail">
           <div className="container">
              <hr className="productTop" />
              <div className="stripe">
                 <div className="row">
                    <div className="col-sm-4 col-xs-12">
                      <div className="hoverStyle">
                             <img src="http://placehold.it/263x332" width="263" height="332"  />
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                       <div className="product-content">
                          <h3 className="text-inherit cl_000000">Mohammed <i className="fas fa-check-circle"></i></h3>
                          <div className="productPrice">
                             <h2 className="cl_000000">190 Dhs/Heure</h2>
                          </div>
                          <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
                          <div className="productQuantity productFormOption">
                             <form method="post" action="/" className="clearfix">
                                <div className="sp-quantity proQunter clearfix">
                                   <div className="sp-minus qtyminus"><a className="qtyClick" href="/" data-multi="-1">-</a></div>
                                   <div className="sp-input qty">
                                      <input type="text" className="quntity-input" value="1" />
                                   </div>
                                   <div className="sp-plus qtyplus"><a className="qtyClick" href="/" data-multi="1">+</a></div>
                                </div>
                                <button className="btn-custom-3" type="submit">Demander ce cours</button>
                             </form>
                          </div>
                          <div className="smallCategories">Categories: Mathématique</div>
                          <div className="product_share">
                             <p>Lieux de cours préférés :</p>
                             <ul className="social_links">
                                <li><i className="fab fa-skype" title="Par Webcam"></i>&nbsp;</li>
                                <li><i className="fa fa-home" title="Chez vous"></i>&nbsp;</li>
                                <li><i className="fa fa-coffee" title="Dans un endroit public"></i>&nbsp;</li>
                                <li><i className="fa fa-chalkboard-teacher" title="Chez le professeur"></i>&nbsp;</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="stripe">
                 <div className="product-details">
                    <div className="tabs_container">
                       <ul className="nav nav-pills" role="tablist">
                          <li role="presentation" className="active">
                             <a href="#add-info" aria-controls="add-info" role="tab" data-toggle="tab">Informations Additionelles</a>
                          </li>
                          <li role="presentation">
                             <a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Commentaire (5)</a>
                          </li>
                       </ul>
                       <div className="tab-content">
                        <Additional />
                        <Review />
                       </div>
                    </div>
                 </div>
               </div>
           </div>
          </div>
    );
  }
}
