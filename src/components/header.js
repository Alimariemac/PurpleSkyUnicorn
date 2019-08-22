import React from "react"
import {Link} from "gatsby"
import {Top, rightAlign, leftAlign, StyledLink} from "../style.js"
import {Row, Col} from 'reactstrap'

const Header = ({ siteTitle }) => (
  <Top>
  <Row>
    <Col>
  <StyledLink to = "/" addcss = {leftAlign}>Alicia MacCara</StyledLink>
  <StyledLink to = "/" addcss = {rightAlign}>About</StyledLink>
    </Col>
  </Row>
   </Top>
)

export default Header
