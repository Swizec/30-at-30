import React from "react";
import { Row, Col as Column, Image } from "react-bootstrap";
import InstagramEmbed from "react-instagram-embed";
import Countdown from "react-countdown-now";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";

import Section, { GreenSection, LowSection } from "./components/Section";
import { MiddleColumn } from "./components/Columns";
import Testimonial from "./components/Testimonials";

import Signature from "./img/signature.gif";

const TwitterIcon = generateShareIcon("twitter");
const FacebookIcon = generateShareIcon("facebook");

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Column md={10} mdOffset={2}>
                <h1>Swiz is turning 30 so everything is $30</h1>
                <p className="lead">
                    Get everything Swiz has ever made. Learn React, Redux, MobX,
                    D3v4, ES6+ and more
                </p>
            </Column>
        </Row>
    </header>
);

export const Intro = () => (
    <LowSection>
        <MiddleColumn>
            <p>Hi, I'm Swizec and today I'm turning 30. The big three-oh. 😅</p>
            <InstagramEmbed
                url="https://www.instagram.com/p/BaM-UH5lcQ2"
                hideCaption={true}
            />
            <p>
                That's me teaching an <i>Intro to React and Redux</i> workshop
                at StubHub. Going to be a video course soon.
            </p>
            <p>
                Over the years I've <b>helped over 10,000 engineers</b> improve
                their craft, mostly frontend. I've <i>published books</i>,
                launched <i>courses</i>, held <i>workshops</i>, written{" "}
                <i>articles</i>, made <i>videos</i>.
            </p>
            <p />
            <p className="lead">
                <b>Today I want you to have it all for just $30</b>
            </p>
        </MiddleColumn>
    </LowSection>
);

export const What = () => (
    <LowSection>
        <MiddleColumn>
            <ul>
                <li>
                    <b>
                        <a href="https://nightowlsbook.com">
                            Why Programmers Work at Night
                        </a>
                    </b>{" "}
                    my wildly popular still unfinished book about burnout, work
                    habits, and being an engineer.
                </li>
                <li>
                    <b>
                        <a href="https://swizec.com/reactd3js">React + D3v4</a>
                    </b>, my book about building data visualizations with React
                    and modern D3. Includes chapters on both Redux and MobX.
                </li>
                <li>
                    <b>
                        <a href="https://swizec.com/reactd3js">
                            React + D3v4 course
                        </a>
                    </b>, same as above except with runnable code playgrounds so
                    you can try it all out while you read. No leaving the
                    browser, no context switching.
                </li>
                <li>
                    Interactive{" "}
                    <b>
                        <a href="https://es6cheatsheet.com">ES6+ cheatsheet</a>
                    </b>{" "}
                    so you can learn modern JavaScript with runnable examples
                    comparing the old way to the new way. New updates coming
                    this week.{" "}
                </li>
                <li>
                    <b>Intro to React and Redux video course</b>, an upcoming
                    video course based on my{" "}
                    <a href="https://swizec.github.io/intro-to-react-workshop/">
                        2-day workshop at StubHub
                    </a>. Learn React, Redux, styled components, React Router,
                    talking to remote APIs, server-side rendering, and some
                    theory on app architecture. The code and base materials are
                    ready, videos in the works.
                </li>
                <li>
                    <b>30min chat with me</b> – we schedule a call, you ask me
                    anything. People usually pick my brain about React,
                    JavaScript, architecting webapps, running sidehustles,
                    moving to the US, working with startups, launching startups,
                    or issues around D3 and web animation. I'm 30 now, I know a
                    lot :P
                </li>
            </ul>
            <p>
                Separately, all of this comes out to about <b>$500</b>.{" "}
                <i>If</i> you can get it. The 30min chat only comes around on
                special occassions. Last time was 2 years ago.
            </p>
        </MiddleColumn>
    </LowSection>
);

export const Buy = () => (
    <GreenSection className="padding-big-top padding-medium-bottom text-center">
        <MiddleColumn>
            <p style={{ marginBottom: "0px" }}>30 at 30 sale ends in</p>

            <h3 style={{ marginTop: "0px" }}>
                <big>
                    <Countdown
                        date={new Date("2017-10-25 23:59 PDT")}
                        zeroPadLength={2}
                        daysInHours={true}
                    />
                </big>
            </h3>
            <p>
                <a
                    className="gumroad-button"
                    href="https://gum.co/RZoRb?wanted=true"
                    target="_blank"
                    data-gumroad-single-product="true"
                >
                    Buy now for $30
                </a>
            </p>
        </MiddleColumn>
        <MiddleColumn md={8} className="padding-small-top">
            <Testimonial which="timothy" />
        </MiddleColumn>
    </GreenSection>
);

export const Footer = () => (
    <LowSection>
        <MiddleColumn>
            <p>Know someone who needs help? Share 👇</p>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <ShareButtons.TwitterShareButton
                    via="swizec"
                    title="Sweet! @swizec is giving away everything he knows about React, ES6+, D3 and others for just $30"
                    url="https://swizec.com/30"
                >
                    <TwitterIcon size={32} round={true} />
                </ShareButtons.TwitterShareButton>
                <ShareButtons.FacebookShareButton
                    title="Sweet! @swizec is giving away everything he knows about React, ES6+, D3 and others for just $30"
                    url="https://swizec.com/30"
                >
                    <FacebookIcon size={32} round={true} />
                </ShareButtons.FacebookShareButton>
            </div>
            <p>
                Cheers,<br />
                ~Swizec<br />
                <img
                    src={Signature}
                    style={{ width: "200px", margin: "1.5em 0" }}
                />
            </p>
        </MiddleColumn>
    </LowSection>
);
