import React from 'react';
import { graphql } from 'gatsby';

import Article from '@react-website-themes/default/components/Article';
import Experience from 'content/components/Experience';
import Branding from '@react-website-themes/default/components/Branding';
import Header from '@react-website-themes/default/components/Header';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const ExperiencePage = props => {
  const {
    data: {
      experiences: { edges },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const experiences = edges.map(edge => edge.node);

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
       <h1 className="pageHead">Experience</h1>
        <Experience items={experiences} />
      </Article>
    </Layout>
  );
};

export default ExperiencePage;

export const query = graphql`
  query {
    experiences: allJobsJson (sort: {fields: start, order: DESC}){
      edges {
        node  {
          site
          slug
          name
          start
          end
          title
          description
          location
        }
      }
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
