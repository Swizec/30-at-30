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
import Testimonial from "../components/Testimonials";

const IndexPage = () => (
    <div>
        <div className="bg-white-dark padding-small-top" />
        <Content.Header />
        <LowSection>
            <Column md={10} mdOffset={1}>
                <Testimonial which="paulo" />
            </Column>
        </LowSection>
        <Content.Intro />
        <Content.What />
        <Content.Buy />
        <Content.Footer />
    </div>
);

export default IndexPage;
