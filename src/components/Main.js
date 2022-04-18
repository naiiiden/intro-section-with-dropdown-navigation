import React from "react";
import Mobile_hero from "../images/image-hero-mobile.png";
import Desktop_hero from "../images/image-hero-desktop.png";
import Databiz from "../images/client-databiz.svg";
import Audiophile from "../images/client-audiophile.svg";
import Meet from "../images/client-meet.svg";
import Maker from "../images/client-maker.svg";

export default function Main() {
    return (
        <main>
            <img src={Mobile_hero} alt="" className="mobile_hero"/>
            {/* <img src={Desktop_hero} alt="" className="desktop_hero"/> */}
            <div className="text_wrapper">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a href="">Learn more</a>
                <section aria-label="companies that use Snap">
                    <img src={Databiz} alt="Databiz's logo"/>
                    <img src={Audiophile} alt="Audiophile's logo"/>
                    <img src={Meet} alt="Meet's logo"/>
                    <img src={Maker} alt="Maker's logo"/>
                </section>
            </div>
        </main>
    )
};