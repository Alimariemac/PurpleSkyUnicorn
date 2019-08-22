import React from "react"
import {Top, rightAlign, leftAlign, StyledLink} from "../style.js"


const Header = ({ siteTitle }) => (
  <Top>
 <StyledLink to = "/"  addcss = {leftAlign}>Alicia MacCara </StyledLink>
  <StyledLink to ="" addcss = {rightAlign}>About</StyledLink>
   </Top>
)

export default Header
