// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// export default function About({ data }) {
//   return (
//     <Layout>
//       <h1>About {data.site.siteMetadata.title}</h1>
//       <p>
//         We're the only site running on your computer dedicated to showing the
//         best photos and videos of pandas eating lots of food.
//       </p>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPanda {
          edges {
            node {
              desc
              createdAt
              slug
              title
              video
            }
          }
        }
      }
    `
  )
// console.log(data.markdownRemark.html);
  return (
    <Layout>
      <SEO title="About" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul style={{ listStyle: "none" }} className="posts">
        {data.allContentfulPanda.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/about/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.createdAt}</span>
              </div>
            <div className="description">
              <p>{edge.node.desc}</p>
            </div>
            <div className="video">
            <iframe title={edge.node.title} width="560" height="315" src={edge.node.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
              <div className="button">
                <Link to={`/about/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default About
