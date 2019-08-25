import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Row, Col} from "reactstrap"
import {TopView, leftAlign, StyledLink, ProjectBlock, NumberStyle, P, Padded1, Padded2, H1,H3, H4} from "../style.js"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"

const Project = ({node})=>{
  return(
    <Col lg="4" className = "mb-3">

    <div>
           <NumberStyle><H3>{node.order}.</H3></NumberStyle>
           <ProjectBlock>
              <H3>{node.title}</H3>
              <H4>{node.companyName}</H4>
              <Padded1></Padded1>
              <P>{node.snippet}</P>
              <StyledLink to={node.slug} addCSS = {leftAlign}>See More</StyledLink>
            </ProjectBlock>
            </div>
    </Col>


  )
}

const IndexPage = ({data}) => (
  <Layout>
  <SEO title="Alicia MacCara homepage" />
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

          <Row>

    <Col>
    <Fade ssrFadeout bottom>
      <Row id = "projectSection">
          {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
        </Row>
        </Fade>
        </Col>
  </Row>
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
          snippet
        }
      }
    }
  }
`
