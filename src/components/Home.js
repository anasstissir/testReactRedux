import React, { Component } from 'react';
import ProfCard from '../containers/carteProf'
export default class Home extends Component {
    render() {
      return(
        <span>
            <div id="banner" className="stripe banner">
              <div className="rev_slider_wrapper">
                <div id="slider1" className="rev_slider" data-version="5.0.7">
                  <ul>
                    <li data-transition="fadeout" data-thumb="http://placehold.it/1920x617" data-title="Free Shipping">
                      <img src="http://placehold.it/1920x617" alt="" width="1920" height="617" />
                    </li>
                    <li data-transition="fade" data-thumb="http://placehold.it/1920x617" data-title="Shop Now">
                      <img src="http://placehold.it/1920x617" alt="" width="1920" height="617" />
                    </li>
                    <li data-index="rs-5" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-thumb="http://placehold.it/1920x617" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Mobile Friendly" data-description="">
                      <img src="http://placehold.it/1920x617" alt="" width="1920" height="617" />
                    </li>
                    <li data-index="rs-6" data-transition="zoomout" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-thumb="http://placehold.it/1920x617" data-rotate="0" data-saveperformance="off" data-title="Big Sale" data-description="">
                      <img src="http://placehold.it/1920x617" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                    </li>
                  </ul>
                </div>
            </div>
            </div>
          <div id="content">
            <div className="stripe">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="service_box service_bg_1 eq-height">
                      <p><i className="fa fa-check-square-o fa-3x"></i></p>
                      <h3>Informations vérifiées</h3>
                      <p>Toute information est soumise à validation.</p>
                      <div className="whiteOverlay"></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="service_box service_bg_2 eq-height">
                      <p><i className="fa fa-shield fa-3x"></i></p>
                      <h3>Paiement sécurisé</h3>
                      <p>Le professeur est payé à la fin du cours.</p>
                      <div className="whiteOverlay"></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="service_box service_bg_3 eq-height">
                      <p><i className="fa fa-hand-peace-o fa-3x"></i></p>
                      <h3>Annulation Gratuite</h3>
                      <p>Possible et facile à tout moment.</p>
                      <div className="whiteOverlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="innerHeading bg_dfdfdf">
              <div className="container">
                <h1 className="marginBottomNone text-center">Comment utiliser la platforme</h1>
              </div>
            </div>
            <div id="content" className="blogPage style2">
              <div className="stripe-1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-10">
                      <div className="blogBox style2">
                        <div className="blogDesc">
                          <span className="blog-title"><a href="blog-detail-fullwidth.html">Wearable Fall Fashion Trends</a></span>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-10">
                      <div className="blogBox style2">
                        <div className="blogDesc">
                          <span className="blog-title"><a href="blog-detail-fullwidth.html">Wearable Fall Fashion Trends</a></span>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-10">
                      <div className="blogBox style2">
                        <div className="blogDesc">
                          <span className="blog-title"><a href="blog-detail-fullwidth.html">Wearable Fall Fashion Trends</a></span>
                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stripe">
              <div className="container">
                <h3 className="dashStyle">Featured Products</h3>
                <div className="productsRow row">
                  <ul className="clearfix prodCarousel">
                    <li>
                      <ProfCard />
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </span>
      )
    }
  }
