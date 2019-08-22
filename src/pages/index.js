import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Row, Col} from "reactstrap"
import config from 'react-reveal/globals';
import {TopView, leftAlign, StyledLink, ProjectBlock, NumberStyle, P, Padded1, Padded2, H1,H3, H4} from "../style.js"
import Fade from "react-reveal/Fade"

const Project = ({node})=>{
  return(
    <Col lg="4" className = "mb-3">
           <NumberStyle><H3>{node.order}.</H3></NumberStyle>
           <ProjectBlock>
              <H3>{node.title}</H3>
              <H4>{node.companyName}</H4>
              <Padded1></Padded1>
              <P>agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</P>
              <StyledLink to={node.slug} addCSS = {leftAlign}>See More</StyledLink>
            </ProjectBlock>
    </Col>

  )
}

const IndexPage = ({data}) => (
  <Layout>
  <TopView>
<Row>
<Col>

          <H1>Hello, <br></br>Bonjour,
          <br></br>
          こんにちわ.👋</H1>

      </Col>
      </Row>
      </TopView>
      <Padded2>
      </Padded2>
      <Fade ssrFadeout bottom>
          <Row>

    <Col>
      <Row id = "projectSection">
          {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
        </Row>
        </Col>
  </Row>
  </Fade>
  </Layout>
)


//{data.allContentfulProject.edges.reverse().map((edge) => <Project node= {edge.node} />)}
export default IndexPage;
export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject (sort: {order: ASC, fields: order},filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges{
        node {
          title
          slug
          order
          year
          companyName
        }
      }
    }
  }
`
