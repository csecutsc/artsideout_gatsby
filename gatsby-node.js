/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query CreatePages {
      installation: allGraphCmsInstallation {
        nodes {
          remoteId
        }
      }
      artist: allGraphCmsProfile {
        nodes {
          remoteId
        }
      }
    }
  `);
  result.data.installation.nodes.forEach((node) => {
    actions.createPage({
      path: '/installation/' + node.remoteId,
      component: path.resolve('./src/templates/installation.tsx'),
      context: { id: node.remoteId }
    });
  });
  result.data.artist.nodes.forEach((node) => {
    actions.createPage({
      path: '/artist/' + node.remoteId,
      component: path.resolve('./src/templates/artist.tsx'),
      context: { id: node.remoteId }
    });
  });
};
