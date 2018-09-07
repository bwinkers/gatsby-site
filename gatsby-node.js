const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');

const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUG_SEPARATOR = '___';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

    let slug;
    let prefix;

    if (separatorExists) {
      const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
      const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
      slug =
        separatorPosition === 1
          ? null
          : `/${filePath.substring(slugBeginning)}`;
      prefix = filePath.substring(1, separatorPosition);
    } else {
      slug = filePath;
      prefix = '';
    }

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: prefix,
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');
    const experienceTemplate = path.resolve('./src/templates/ExperienceTemplate.js');

    resolve(
      
      Promise.all(
        [
                   
          // JSON data
          
          graphql(`
            {
              allJobsJson {
                edges {
                  node {
                    site
                    slug
                    name
                    location
                    description
                    responsibilities
                    accomplishments
                    learnings
                    reasonLeft
                    stack { network }
                    start
                    end
                    title
                  }
                }
              }
            }

          `).then(result => {
            if (result.errors) {
              console.log(result.errors);
              reject(result.errors);
            }

            const experiences = result.data.allJobsJson.edges;

            // Create Job Pages
            experiences.forEach(({ node }, index) => {
              const slug = '/experience/' + node.slug;
              const name = node.name;
              const site = node.site;
              const location = node.location;
              const title = node.title;
              const description = node.description;
              const responsibilities = node.responsibilities;
              const accomplishments = node.accomplishments;
              const learnings = node.learnings;
              const reasonLeft = node.reasonLeft;
              const start = node.start;
              const end = node.end;
              const stack = node.stack;
              const next = index === 0 ? undefined : experiences[index - 1].node;
              const prev =
                index === experiences.length - 1 ? undefined : experiences[index + 1].node;
              
              const context = {
                  slug,
                  name,
                  location,
                  site,
                  title,
                  description,
                  responsibilities,
                  accomplishments,
                  learnings,
                  reasonLeft,
                  stack,
                  start,
                  end,
                  prev,
                  next
                }

              createPage({
                path: slug,
                component: experienceTemplate,
                context
              });
            });

          })
          
        ]
      )

    );
  });
};
