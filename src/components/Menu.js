import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
      return(
          <header className="header style2">
            <div className="top_bar">
              <div className="container">
                <div className="col-md-6 top_left">
                  <ul className="list-inline sepraterLi">
                    <li>A Propos de Nous</li>
                    <li>Contactez Nous</li>
                    <li>FAQ</li>
                  </ul>
                </div>

                <div className="col-md-6 top_right">
                  <ul className="list-inline">
                    <li><i className="fa fa-key fa-fw"></i>S`enregistrer
                      <ul className="sepraterLi">
                        <li>Se Connecter</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="head_inner">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt=""/>
                  </a>
                </div>

                <nav className="clearfix">
                  <div className="mbmenu">
                    <a href="#">Menu
                      <span className="lines"><span></span><span></span><span></span></span>
                    </a>
                  </div>

                  <div className="main_menu_cont">
                    <ul className="main_menu">
                      <li className="mobSearch">
                        <div className="nav_search">
                          <form action="product-search.html" method="get" className="searchform">
                            <input type="text" placeholder="Type and hit enter ..." value="" name="s" className="field searchform-s" />
                            <button type="submit" className="submit"><i className="fa fa-search fa-fw"></i></button>
                          </form>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children active">Acceuil
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#">Rechercher un cours</a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-has-children"><a href="#">Grid Layout with Banner</a>
                            <ul className="sub-menu">
                              <li><a href="2-grid-layout-with-banner.html">2 Grid Layout</a></li>
                              <li><a href="3-grid-layout-with-banner.html">3 Grid Layout</a></li>
                                                    <li><a href="3-grid-layout-sidebar-with-banner.html">3 Grid Sidebar Layout</a></li>
                                                    <li><a href="4-grid-layout-with-banner.html">4 Grid Layout</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Grid Layout with Slider</a>
                            <ul className="sub-menu">
                              <li><a href="2-grid-layout-with-slider.html">2 Grid Layout</a></li>
                              <li><a href="3-grid-layout-with-slider.html">3 Grid Layout</a></li>
                                                    <li><a href="3-grid-layout-sidebar-with-slider.html">3 Grid Sidebar Layout</a></li>
                                                    <li><a href="4-grid-layout-with-slider.html">4 Grid Layout</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Masonary Grid Layout</a>
                            <ul className="sub-menu">
                              <li><a href="2-grid-masonry-layout.html">2 Grid Masonary Layout</a></li>
                              <li><a href="3-grid-masonry-layout.html">3 Grid Masonary Layout</a></li>
                                                    <li><a href="3-grid-masonry-layout-sidebar.html">3 Grid Masonary Sidebar Layout</a></li>
                                                    <li><a href="4-grid-masonry-layout.html">4 Grid Masonary Layout</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Product Detail Pages</a>
                            <ul className="sub-menu">
                              <li><a href="affiliate-product-style.html">Affiliate Product Style</a></li>
                              <li><a href="basic-add-to-cart.html">Basic Add to Cart</a></li>
                                                    <li><a href="catalogue-mode.html">Catalogue Mode</a></li>
                                                    <li><a href="select-options-style.html">Select Options Style</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Donner un cours</a>
                        <ul className="sub-menu">
                          <li className="menu-item menu-item-has-children"><a href="#">Grid Layout</a>
                            <ul className="sub-menu">
                              <li><a href="blog-1_2-column.html">2 Columns Layout</a></li>
                              <li><a href="blog-1_3-column.html">3 Columns Layout</a></li>
                                                    <li><a href="blog-1_4-column.html">4 Columns Layout</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Masonary Layout</a>
                            <ul className="sub-menu">
                              <li><a href="blog-2_2-column.html">2 Columns Layout</a></li>
                              <li><a href="blog-2_3-column.html">3 Columns Layout</a></li>
                                                    <li><a href="blog-2_4-column.html">4 Columns Layout</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Listing Layout</a>
                            <ul className="sub-menu">
                              <li><a href="blog-listing-1.html">Listing Style 1</a></li>
                              <li><a href="blog-listing-2.html">Listing Style 2</a></li>
                                                    <li><a href="blog-listing-3.html">Listing Style 3</a></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-has-children"><a href="#">Blog Inner/Detail Page</a>
                            <ul className="sub-menu">
                              <li><a href="blog-detail-left-sidebar.html">Left Sidebar Layout</a></li>
                              <li><a href="blog-detail-right-sidebar.html">Right Sidebar Layout</a></li>
                                                    <li><a href="blog-detail-fullwidth.html">No Sidebar / Full width</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="nav_search mobile_none">
                    <a href="#" className="searchBTN fa fa-search fa-fw"></a>
                    <div className="mini-search">
                      <div className="dropBox">
                        <form action="product-search.html" method="get" className="searchform">
                          <input type="text" placeholder="Type and hit enter ..." value="" name="s" className="field searchform-s" />
                          <button type="submit" className="submit"><i className="fa fa-search fa-fw"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
      )
    }
}
