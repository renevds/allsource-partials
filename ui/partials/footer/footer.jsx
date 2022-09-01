import React from 'react';

//Components
import {Button} from '@allsource/ui.partials.button';
import {Link} from "react-router-dom";

//Style
import "@allsource/ui.style.base";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__one__container">
                    <div className="left__section">
                        <img
                            className="footer__logo"
                            src="https://files.allsource.io/images/logo-white.svg"
                            alt="Allsource logo"
                        />
                        <h5>Contact us</h5>
                        <p>+12 345 678 9101</p>
                        <p>office@allsource.com</p>
                        <p>Milky way 711-2880 Star St. The Moon 96522</p>
                    </div>
                    <div className="center__section">
                        <div className="center__section__left">
                            <h5>SOCIAL</h5>
                            <Link to="/hottakes">
                                <p>Hot Takes</p>
                            </Link>
                            <p>Pixel Map</p>
                            <p>Articles</p>
                            <p>Chart Analysis</p>
                            <p>Feed</p>
                        </div>
                        <div className="center__section__right">
                            <h5>ANALYTICS</h5>
                            <Link to="/all-projects">
                                <p>Project Directory</p>
                            </Link>
                            <p>Smart Chart</p>
                            <Link to="/minting-now">
                                <p>Mint Factory</p>
                            </Link>
                            <p>Wallet Analyser</p>
                        </div>
                    </div>
                    <div className="right__section">
                        <h5>Newsletters</h5>
                        <p>Subscribe our newsletter to get more feature updates.</p>
                        <div className="input__container">
                            <input placeholder="Enter your email"/>
                            <Button title="Submit" className="subscribe"/>
                        </div>
                        <div className="icons"></div>
                    </div>
                </div>
                <div className="footer__two__container">
                    <div className="rights">
                        ©2022 allsource.com. All rights reserved. Terms of Service | Privacy
                        Terms
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
