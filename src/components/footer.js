import React from "react"
import {Padded3, Padded2,leftAlign, ExtLink, Bottom, Line, P} from "../style.js"
import {Row, Col} from "reactstrap"


const Footer = ({ siteFooter }) => (
  <Bottom>
    <Row>
      <Col>
        <Row>
        <Col sm={{ size: 9, order: 2, offset:1}}>
        <Padded3>
        <P>This website was built on React using Gatsby and Netlify. The morphing background shapes were created in P5.js - you can play around with them <ExtLink target = "_blank"href="https://editor.p5js.org/Alimariemac/present/3BhtINLch">here</ExtLink> and create your own!</P>
        </Padded3>
        </Col>

         <Col sm={{ size: 2, order: 1}}>
         <Row>
         <Col>
         <ExtLink href = "https://dribbble.com/Alimariemac" addCSS = {leftAlign}>Dribbble</ExtLink>
         </Col>
         <Col>
         <ExtLink href = "https://www.linkedin.com/in/aliciamariemaccara/" addCSS = {leftAlign}>LinkedIn</ExtLink>
         </Col>
         <Col>
         <ExtLink href = "https://www.instagram.com/alimariemac/" addCSS = {leftAlign}>Instagram</ExtLink>
         </Col>
         </Row>
         </Col>

        </Row>
      </Col>
    </Row>
</Bottom>

)

export default Footer
