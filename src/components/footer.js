import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return(
      <div id="fStyle5" className="stripe-1">
			<div className="container">
				<h3 className="text-capitalize">Footer Version 5</h3>
			</div>

			<div className="footer-version5">
				<footer className="footer style2">
					<div className="stripe-1 stripe_2 foot_widgets">
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-sm-6">
									<div className="widget_container">
										<div className="widget_text clearfix">
											<p><a href="index.html"><img src="images/logoWhite.png" alt="" /></a></p>
											<p>The Stanza is an eCommerce HTML template that is packed with style that can be easily tailored to complement your brand - no coding required. With premium easy-to-use eCommerce features your customers will be as well-taken care of  - as if they were shopping with you as their personal shopper, which will keep them coming back, again and again.</p>
                                            <p>With 10 homepage options, it’s easy to get the look you want, and in just a couple of clicks you can install your images and data. The eye-catching layouts will no-doubt impresses – and their mobile responsiveness ensures they won’t be missed on any device. Plus, with our powerful and useful plugins, you’re a store with its engine revving in high gear.</p>
                                            <p className="marginBottomNone">Implement your creativity with ease with a Stanza Store!</p>
										</div>
									</div>
									<ul className="clearfix foter_main-Nav">
										<li><a href="index.html">Home</a></li>
										<li><a href="2-grid-layout-with-banner.html">Shop</a></li>
										<li><a href="blog-1_2-column.html">Blog</a></li>
										<li><a href="index.html">Sliders</a></li>
										<li><a href="aboutus.html">Pages</a></li>
										<li><a href="header-versions.html">Headers</a></li>
										<li><a href="footer-versions.html">Footers</a></li>
										<li><a href="#">Features</a></li>
									</ul>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="widget_container">
										<h4>Newsletter Signup</h4>
										<p>We very occasionally send out information on specials or news we think youll be very interested to hear! Dont miss out.</p>
										<div className="newsForm">
											<form className="clearfix" action="/">
												<input type="text" placeholder="Your email Address" />
												<button type="submit">Go</button>
											</form>
										</div>
										<div className="payment-icons">
											<a href="#"><img src="http://placehold.it/250x30" width="250" height="30" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bottom_bar">
						<div className="container">
							<div className="row">
								<div className="col-md-7">
									<ul className="clearfix sepraterLi foterNav">
                                        <li><a href="aboutus.html">About us</a></li>
                                        <li><a href="blog-1_2-column.html">Blog</a></li>
                                        <li><a href="2-grid-layout-with-banner.html">Shop</a></li>
                                        <li><a href="contactus.html">Contact us</a></li>
                                        <li><a href="faqs.html">FAQ</a></li>
                                        <li><a href="site-map.html">Sitemap</a></li>
                                    </ul>
									<div className="copyright">&copy; 2017 The Stanza Template by <a href="http://imediathemes.com/" target="_blank">iMediaThemes</a>
										<ul className="list-inline">
											<li><a href="#">All Rights Reserved</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-5">
									<div className="social_links">
										<ul className="list-inline">
											<li>Follow us</li>
											<li><a href="#"><i className="fa fa-facebook-square"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-twitter-square"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-linkedin-square"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-google-plus-square"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-pinterest-square"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-instagram"></i>&nbsp;</a></li>
											<li><a href="#"><i className="fa fa-youtube-square"></i>&nbsp;</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
        </div>
    );
  }
}
