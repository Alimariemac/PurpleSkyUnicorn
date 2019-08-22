import React from "react"
import {Padded2,leftAlign, ExtLink, Bottom, Line, P} from "../style.js"
import {Row, Col} from "reactstrap"


const Footer = ({ siteFooter }) => (
  <Bottom>
    <Row>
      <Col>
        <Row>
        <Col sm={{ size: 9, order: 2, offset:1}}>
        <P>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</P>
<Padded2></Padded2>
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
