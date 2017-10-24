import React from "react";
import Link from "gatsby-link";

import { Col as Column } from "react-bootstrap";
import Section, {
    LowSection,
    DarkSection,
    SectionTitle,
    GreenSection
} from "../components/Section";
import * as Content from "../Content";

const IndexPage = () => (
    <div>
        <div className="bg-white-dark padding-small-top" />
        <Content.Header />
    </div>
);

export default IndexPage;
