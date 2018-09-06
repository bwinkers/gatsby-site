import React from 'react';
import { graphql } from 'gatsby';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import Article from '@react-website-themes/default/components/Article';
import Experience from 'content/components/Experience';
import Branding from '@react-website-themes/default/components/Branding';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Blog from '@react-website-themes/default/components/Blog';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const metaIcons = {
  calendar: CalendarIcon
};

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
