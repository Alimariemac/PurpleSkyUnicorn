import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout"
import {Row, Col} from 'reactstrap'
import {rightAlign, leftAlign, StyledLink, HiddenDiv, LayoutPanel, PanelContent, MasonryLayout, P, Padded1, Padded2,H2, H3} from "../style.js"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"

class Project extends Component {
  render(){
    const {
      title,
      companyName,
      year,
      images,
      content,
      deliverables,
      next,
      previous,
    } = this.props.data.contentfulProject
    return (
      <Layout>
      <SEO title={title} />
      <Padded1>
      <Row>
        <Col>
          <Row>
            <Col md={{ size: 9}}>
            <Padded1>
              <H2>{title}</H2>
            </Padded1>
            </Col>
          </Row>
          <Row>
            <Col>
              <P dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}></P>
            </Col>
            <Col md={{ size: 2}}>
            <HiddenDiv>
                <H3>Year</H3>
                <P>{year}</P>
                <Padded1></Padded1>
                <H3>Client</H3>
                <P>{companyName}</P>
                <Padded1></Padded1>
                <H3>Skills</H3>
                {deliverables.map(d => (
                  <P>
                  •{d}
                  </P>
                ))}
              </HiddenDiv>
            </Col>
            </Row>
          </Col>
          </Row>
          </Padded1>
          <Row>
          <Col>
          <Padded2>
          <MasonryLayout>
  {images.map(image => (
    <LayoutPanel>
    <PanelContent>
    <Fade bottom>
    <Img fluid = {image.fluid}></Img>
    </Fade>
    </PanelContent>
    </LayoutPanel>
  ))}
  </MasonryLayout>
  </Padded2>
      </Col>
          </Row>
          <Row>
            <Col>
          <StyledLink to = {previous.slug} addcss = {leftAlign}>Previous</StyledLink>
          <StyledLink to = {next.slug} addcss = {rightAlign}>Next</StyledLink>
            </Col>
          </Row>
      </Layout>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
query projectQuery($slug: String!){
  contentfulProject(slug: {eq: $slug}) {
    title
    companyName
    year
    previous {
      slug
    }
    next{
      slug
    }
    deliverables
    images {
      description
        fluid {
          ...GatsbyContentfulFluid
        }
    }
    content {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
