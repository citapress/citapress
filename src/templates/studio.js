import React, { useState, useEffect } from 'react';
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer); // Clean up on unmount
  }, [images]);

  return <img className="carousel-image" src={`/img/gallery/${images[currentImageIndex]}`} alt="studio" />;
}


const StudioTemplate = ({
  data,
  location,
  intl
}) => {
  const studio = data?.allMarkdownRemark?.nodes[0] || {};
  
  let elements = []; // Use let, not const, because we will modify it

  for (let i = 0; i < 3; i++) {
    elements.push(<span key={i}>{studio.frontmatter.email}</span>);
  }

  let images = [];

  for (let i = 1; i <= 9; i++) {
    let image = studio.frontmatter[`image${i}`];
    if (image !== undefined) {
      images.push(image);
    }
  }

  return (
    <Layout location={location} title={'Studio'}>
      <div className="internal-body">
        <div className="left-column">
          <h2>
            {elements}
          </h2>
        </div>
        <h1 className="studio-header wremena"
            dangerouslySetInnerHTML={{
              __html: studio.frontmatter.header,
            }}
            itemProp="header"></h1>
        <div className="dinamic-content">
          <div className="flex-item">
            <div className="img-container">
              <ImageCarousel images={images} />
            </div>
          </div>
          <div className="flex-item text-flex-content">
            <div className="studio-text inter"
             dangerouslySetInnerHTML={{
                __html: studio.html,
              }}>
            </div>
            <div className="right-column">
              <img src="/img/pencil.png" alt="studiopencil" className="studiopencil" width="304px" height="290px"  />
              <div className="services">
                <h4>Services</h4>
                <ul>
                  {
                    studio.frontmatter.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* end right-column */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(StudioTemplate)

export const Head = () => <Seo title="Studio" />

export const pageQuery = graphql`
  query studioListQuery($language: String!) {
    allMarkdownRemark(
      sort: {frontmatter: { date: DESC } }
      limit: 1
      filter: {frontmatter: {
        lang: {eq: $language}
        templateKey: { eq: "studio-page" }
      }}
      ) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          title
          header
          image1
          image2
          image3
          email
          services
          lang
        }
      }
    }
  }
`
