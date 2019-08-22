import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout"
import {Row, Col} from 'reactstrap'
import {rightAlign, leftAlign, StyledLink, HiddenDiv, LayoutPanel, PanelContent, MasonryLayout, IndentP, ListP, P, Padded1, Padded2,H2, H3} from "../style.js"
import Fade from "react-reveal/Fade"

class Project extends Component {
  render(){
    const {
      title,
      companyName,
      year,
      extraContent,
      images,
      content,
      deliverables,
      next,
      previous,
    } = this.props.data.contentfulProject
    return (
      <Layout>
      <Padded2>
      <Row>
        <Col>
          <Row>
          <Col md={{ size: 2}}>
          <HiddenDiv>
              <H3>Year</H3>
              <IndentP>{year}</IndentP>
              <Padded1></Padded1>
              <H3>Client</H3>
              <IndentP>{companyName}</IndentP>
              <Padded1></Padded1>
              <H3>Deliverables</H3>
              {deliverables.map(d => (
                <ListP>
                {d}
                </ListP>
              ))}
            </HiddenDiv>
          </Col>
            <Col md={{ size: 9, offset:1}}>
            <Padded1>
              <H2>{title}</H2>
            </Padded1>
              <P dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}></P>
            </Col>
          </Row>
          </Col>
          </Row>
          </Padded2>
          <Row>
          <Col>
          <Padded2>
          <MasonryLayout>
          <Padded1>
  {images.slice(0,2).map(image => (
    <LayoutPanel>
    <PanelContent>
    <Fade bottom>
    <Img fluid = {image.fluid}></Img>
    </Fade>
    </PanelContent>
    </LayoutPanel>
  ))}
  </Padded1>
  <LayoutPanel>
  <PanelContent>
  <Fade bottom>
  <P>{extraContent}</P>
  </Fade>
  </PanelContent>
  </LayoutPanel>
  {images.slice(2).map(image => (
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
    extraContent
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
