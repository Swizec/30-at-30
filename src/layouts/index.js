import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import ga from "react-google-analytics";

import "bootstrap/dist/css/bootstrap.css";
import "../css/bootstrap-override.css";
import "../css/bootstrap-custom-utils.css";
import "../css/salesbury-lilac.css";
import "./index.css";

const GAInitiailizer = ga.Initializer;
ga("create", "UA-1464315-1", "auto");
ga("send", "pageview");

const TemplateWrapper = ({ children }) => (
    <div className="cheatsheet">
        <Helmet>
            <script async src="//assets.codepen.io/assets/embed/ei.js" />
            <script async src="https://gumroad.com/js/gumroad.js" />

            <meta name="author" content="Swizec Teller" />
            <meta
                name="description"
                content="SWIZ IS TURNING 30 SO EVERYTHING IS $30."
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />

            <meta property="og:url" content="https://swizec.com/30" />
            <meta
                property="og:title"
                content="SWIZ IS TURNING 30 SO EVERYTHING IS $30"
            />
            <meta
                property="og:image"
                content="https://swizec.com/30/cover.jpg"
            />
            <meta
                property="og:description"
                content="Get everything Swiz has ever made. Learn React, Redux, MobX, D3v4, ES6+ and more for $30 on his birthday. 1 day only."
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@swizec" />
            <meta name="twitter:creator" content="@swizec" />
            <meta
                name="twitter:title"
                content="SWIZ IS TURNING 30 SO EVERYTHING IS $30"
            />
            <meta
                name="twitter:description"
                content="Get everything Swiz has ever made. Learn React, Redux, MobX, D3v4, ES6+ and more for $30 on his birthday. 1 day only"
            />
            <meta
                name="twitter:image"
                content="https://swizec.com/30/cover.jpg"
            />

            <GAInitiailizer />
        </Helmet>
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
