import { graphql } from 'gatsby';
import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import FeaturedProjects from '../components/featured-projects';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { indexMenuLinks } from '../components/_config/menu-links';
import CardGrid from '../components/card-grid';

const Index = ({ data }) => {
  const heroData = {
    author: data.site.siteMetadata.author,
    tagline: data.hero.frontmatter.tagline,
    description: data.hero.html,
    introduction: data.hero.frontmatter.introduction,
    ctaLabel: data.hero.frontmatter.cta_label,
    ctaLink: data.hero.frontmatter.cta_link,
  };

  return (
    <Layout menuLinks={indexMenuLinks}>
      <SEO title="Home" />
      <Hero data={heroData} />
      <About data={data.about} />
      <FeaturedProjects featured={data.featuredProjects.nodes} />
      <CardGrid cards={data.cards.frontmatter.cards} description={data.cards.html} title="Languages and Frameworks" id="languages" />
      <Contact data={data.contact} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }

    hero: markdownRemark(fileAbsolutePath: { regex: "/content/sections/hero/" }) {
      frontmatter {
        introduction
        tagline
        cta_label
        cta_link
      }
      html
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/sections/about/" }) {
      frontmatter {
        title
        techs
        about_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }


    featuredProjects: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          repo_link
          demo_link
          techs
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }

    cards: markdownRemark(fileAbsolutePath: { regex: "/content/sections/cards/" }) {
      frontmatter {
        cards {
          label
          icon
          prefix
          description
        }
      }
      html
    }


    contact: markdownRemark(fileAbsolutePath: { regex: "/content/sections/contact/" }) {
      frontmatter {
        phone
        email
      }
      html
    }
  }
`;

