import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {TopView, Padded1,MainImage, H1, RelDiv1, AbsoluteDiv1, HiddenDiv, P, ExtLink} from "../style.js"
import Fade from "react-reveal/Fade"
import mainImage from "../images/self.png"

const AboutPage = () => (
  <Layout>
    <TopView>
    <SEO title="About" />
    <RelDiv1>
      <AbsoluteDiv1>
      <HiddenDiv>
        <MainImage src = {mainImage}></MainImage>
      </HiddenDiv>
      </AbsoluteDiv1>
          <H1>Coder<br></br>Creative<br></br>Designer</H1>
    </RelDiv1>
    </TopView>
    <Padded1></Padded1>
    <Fade ssrFadeout bottom>
    <P>
    I am a designer (currently designing @ <strong>Foursquare</strong>) who enjoys playing with code. I spend my free time building silly apps (currently refining a <strong>"divebar roulette" app </strong>), carving out block prints, and reading (current book: <strong>"The Mysterious Island"</strong> by Jules Verne).
    <br></br>
    <br></br>
    In my past-life I was an English/Kindergarten teacher in Tokyo, a marketer at a company that makes pasta out of crickets and a C# bootcamp participant.
    <br></br>
    <br></br>
    This website was a learning project for me in order to learn Gatsby & Graphql. The morphing shapes were created in P5.js and you can play with them <ExtLink target = "_blank"href="https://editor.p5js.org/Alimariemac/present/3BhtINLch">here</ExtLink>!
    </P>
    </Fade>
    </Layout>
)

export default AboutPage
