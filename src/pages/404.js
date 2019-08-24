import React from "react"
import {P, H1, ExtLink} from "../style.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>Uh Oh</H1>
    <P>There is nothing here, you can go back to where you were OR you can play with blobs <ExtLink target = "_blank"href="https://editor.p5js.org/Alimariemac/present/3BhtINLch">here</ExtLink>. Your choice!.</P>
  </Layout>
)

export default NotFoundPage
