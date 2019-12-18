import styled from 'styled-components'
import { Link } from "gatsby"
import React from "react"
import { css } from 'styled-components'

var xxs = 370;
var xs = 576;
var s = 768;
var m = 992;
var l = 1400;

export const Body = styled.div`
@import url("https://fonts.googleapis.com/css?family=Lato:300,700,family=Noto+Serif+JP:400,600&display=swap");

  color:#333333;
`
export const TopView = styled.div `
padding-top:100px;
padding-bottom:100px;
`


export const P = styled.p`
color:#575757;
font-size: 0.85rem;
font-weight: 300;
margin-bottom:0;
font-family: "Lato", sans-serif;
@media (min-width:${m}px) {
  font-size: 0.9rem;
}
@media (min-width:${l}px) {
  font-size: 1.1rem;
}
`


export const MenuP = styled(P)`
font-size: 0.9rem;
font-weight: 400;
margin-bottom:0;
font-family: "Noto Serif JP", serif;
@media (min-width:${s}px) {
  font-size: 1rem;
}
`


export const IndentP = styled(P)`
margin-left: 15px;
font-size:0.75rem;
`
export const ListP= styled(IndentP)`
font-size: 0.75rem;
@media (min-width:${xs}px) {
  font-size: 0.8rem;
}
@media (min-width:${m}px) {
  font-size: 0.9rem;
}
`
export const H1 = styled.h1`
font-size: 4rem;
font-family: "Noto Serif JP", serif;
font-weight: 600;

@media (min-width:${xs}px) {
  font-size: 5rem;
}
@media (min-width:${m}px) {
  font-size: 6rem;
}
@media (min-width:${l}px) {
  font-size: 8rem;
}
`
export const H2 = styled.h2`
font-size: 1.8rem;
font-weight:600;
font-family: "Noto Serif JP", serif;
@media (min-width:${xs}px) {
  font-size: 2.2rem;
}
@media (min-width:${s}px) {
  font-size: 2.4rem;
}
@media (min-width:${m}px) {
  font-size: 3rem;
}
@media (min-width:${l}px) {
  font-size: 3.5rem;
}
`
export const H3 = styled.h3`
font-size: 0.9rem;
text-transform:uppercase;
font-family: "Lato", sans-serif;
font-weight: 700;
@media (min-width:${s}px) {
  font-size: 0.9rem;
}
`
export const H4 = styled(H3)`
color:#575757;
font-size: 0.85rem;
@media (min-width:${l}px) {
  font-size: 0.85rem;
}
`

export const MainImage = styled.img`
height:auto;
width: 100%;
`

export const FooterImage = styled.img`
width: 100px;
display:none;
@media (min-width:${s}px) {
  display:block;
  width:80%;
  padding-right:15px;
}
`
export const Logo = styled.img`
width: 70px;
@media (min-width:${xs}px) {
  width:75px
}
@media (min-width:${s}px) {
  width:80px;
}
@media (min-width:${m}px) {
  width:85px
}
@media (min-width:${l}px) {
  width:90px
}
`
export const Base = styled.div `
width:100%;
margin-right:auto;
margin-left:auto;
padding-right:45px;
padding-left:45px;
@media (min-width:${xxs}px) {
  max-width:350px;
}
@media (min-width:${xs}px) {
 max-width:420px;
}
@media (min-width:${s}px) {
 max-width:600px;
}
@media (min-width:${m}px) {
 max-width:780px
}
@media (min-width:${l}px) {
 max-width:950px
}
`
export const Container = styled(Base)`
 width:100%;
 padding-top:100px;
 padding-bottom:100px;
 margin-right:auto;
 margin-left:auto;

`
export const NumberStyle = styled.div`
position: absolute;
min-height:100px;
top:0;
font-size:1.3rem;
`
export const ProjectBlock = styled.div`
padding-left: 2rem;
padding-right:1rem;
padding-bottom:4rem;
`

export const RelDiv = styled.div`
position: relative;
padding: 0;
min-height:480px;
@media (min-width:${xxs}px) {
  min-height:500px;
}
@media (min-width:${xs}px) {
min-height:540px;
}
@media (min-width:${s}px) {
min-height:400px;
}
@media (min-width:${m}px) {
  min-height:480px;
}
@media (min-width:${l}px) {
    min-height:600px;
}
`
export const AbsoluteDiv= styled.div`
width: 100%;
position: absolute;
left: 0;
top:0;
right: 0;
margin-left: auto;
margin-right: auto;
overflow:hidden;
`
export const RelDiv1 = styled.div`
position: relative;
padding: 0;
min-height:250px;
@media (min-width:${xxs}px) {
  min-height:250px;
}
@media (min-width:${xs}px) {
min-height:300px;
}
@media (min-width:${s}px) {
min-height:320px;
}
@media (min-width:${m}px) {
  min-height:400px;
}
@media (min-width:${l}px) {
    min-height:500px;
}
`

export const AbsoluteDiv1= styled.div`
padding: 0;
position: absolute;
right:0;
top:0;
width:60%;
z-index:-1;
@media (min-width:${xxs}px) {

}
@media (min-width:${xs}px) {

}
@media (min-width:${s}px) {
}
@media (min-width:${m}px) {
}
`
export const Padded1 = styled.div`
  margin-bottom: 1rem;
@media (min-width:${xxs}px) {
  margin-bottom: 1.1rem;
}
@media (min-width:${xs}px) {
  margin-bottom: 1.2rem;
}
@media (min-width:${s}px) {
  margin-bottom: 1.3rem;
}
@media (min-width:${m}px) {
  margin-bottom: 1.4rem;
}
@media (min-width:${l}px) {
  margin-bottom: 1.5rem;
}
`
export const Padded2 = styled.div`
  margin-bottom: 1.8rem;
@media (min-width:${xxs}px) {
  margin-bottom: 2rem;
}
@media (min-width:${xs}px) {
  margin-bottom: 2.2rem;
}
@media (min-width:${s}px) {
  margin-bottom: 3.8rem;
}
@media (min-width:${m}px) {
  margin-bottom: 4.2rem;
}
@media (min-width:${l}px) {
  margin-bottom: 6rem;
}
`

export const Padded3 = styled.div`
  margin-bottom: 100px;

`

export const Top = styled.div`
width:100%;
padding-right:5%;
padding-left:5%;
padding-top:50px;
`

export const Bottom = styled(Container)`
padding-bottom:100px;
padding-top:100px;
`


export const HiddenDiv = styled.div`
display:none;
@media (min-width:${s}px) {
  display:block;
}
`
export const MasonryLayout  = styled.div`
  column-count: 1;
  -webkit-column-count: 1;
  column-gap: 0;
  -webkit-column-gap: 0;
  @media (min-width:${xs}px) {
    column-count: 1;
  }
  @media (min-width:${s}px) {
    column-count: 2;
  }
`
export const LayoutPanel  = styled.div`
break-inside: avoid;
-webkit-column-break-inside: avoid;
padding-top: 15px;
padding-right: 0px;
@media (min-width:${s}px) {
  padding-top: 15px;
  padding-right: 15px;
}
`
export const PanelContent  = styled.div`
padding: 0px;
border-radius: 10px;
`

export const leftAlign = css`
   float:left;
`

export const rightAlign = css`
   float:right;
`

export const StyledLink = styled(props => <Link {...props} />)`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom:0;
  font-family: "Noto Serif JP", serif;
  color:black;
  background: linear-gradient( to bottom, #fff 0%, #FFEBEA 100% );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 10px;
  text-decoration: none;
  transition: background-size .2s;
  ${props => props.addcss}
  &:hover {
    color:black;
    background-size: 4px 50px;
    text-decoration: none;
    }
    @media (min-width:${s}px) {
      font-size: 1rem;
    }

`
export const ExtLink = styled.a`
font-size: 0.9rem;
font-weight: 400;
margin-bottom:0;
font-family: "Noto Serif JP", serif;
color:black;
background: linear-gradient( to bottom, #fff 0%, #FFEBEA 100% );
background-position: 0 100%;
background-repeat: repeat-x;
background-size: 4px 10px;
text-decoration: none;
transition: background-size .2s;
${props => props.addcss}
&:hover {
  color:black;
  background-size: 4px 50px;
  text-decoration: none;
  }
  @media (min-width:${s}px) {
    font-size: 1rem;
  }
`
export const Line = styled.hr `
 border-top: 1px solid #575757;
`
;
