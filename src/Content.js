import React from "react";
import { Row, Col as Column, Image } from "react-bootstrap";

import { LowSection } from "./components/Section";
import {
    LeftColumn,
    WideLeftColumn,
    RightColumn,
    NarrowRightColumn,
    SingleColumn
} from "./components/Columns";

import HipsterMan from "./img/swizec-at-writethedocs.jpg";
import SwizecPic from "./img/swizec.png";

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Column md={10} mdOffset={1}>
                <h1>Swiz is turning 30 so everything is $30</h1>
                <p className="lead">
                    Get everything Swiz has ever made. Learn React, Redux, MobX,
                    D3v4, ES6+ and more
                </p>
            </Column>
        </Row>
    </header>
);
