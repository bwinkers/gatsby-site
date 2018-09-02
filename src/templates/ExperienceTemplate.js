import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '@react-website-themes/default/styles/variables';
import '@react-website-themes/default/styles/global';

import { ShareButtonRectangle } from 'react-custom-share';

import Article from '@react-website-themes/default/components/Article';
import Author from '@react-website-themes/default/components/Author';
import Branding from '@react-website-themes/default/components/Branding';
import Bodytext from '@react-website-themes/default/components/Bodytext';
import Comments from '@react-website-themes/default/components/Comments';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Meta from '@react-website-themes/default/components/Meta';
import NextPrev from '@react-website-themes/default/components/NextPrev';
import Seo from '@react-website-themes/default/components/Seo';
import Share from '@react-website-themes/default/components/Share';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';

const metaIcons = {
  calendar: CalendarIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const ExperienceTemplate = props => {
 console.log(props.pageContext)
 
  const {
      pageContext: { name,
        title,
        site,
        dates,
        next,
        prev 
      },
      slug
  } = props;


  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteLanguage,
    siteTitlePostfix,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header> 
      <Article>
      <div>Hello blog post</div>
        <Heading title={title} />
        <Bodytext html={name} />
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
      </Article>
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
      />
    </Layout>
  );
};

ExperienceTemplate.propTypes = {
  name: PropTypes.string,
  pageContext: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default ExperienceTemplate;
