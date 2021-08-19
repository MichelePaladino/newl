/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
/* const { createFilePath } = require(`gatsby-source-filesystem`) */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const daily = path.resolve(`./src/templates/daily.js`)
  const aboutTemplate = path.resolve(`./src/templates/about-template.js`)
  const companyTemplate = path.resolve(`./src/templates/company.js`)
  const researchTemplate = path.resolve(`./src/templates/research.js`)
  const companiesQuery = await graphql(
    `
      {
        allCompaniesJson {
          edges {
            node {
              ticker
            }
          }
        }
      }
    `
  )
  const researchQuery = await graphql(
    `
      {
        allResearchJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
  /*   const companiesQuery = await graphql(
    `
      {
        allTiddlers(sort: { fields: day, order: DESC }) {
          edges {
            node {
              day
              about
            }
          }
        }
      }
    `
  ) */

  if (companiesQuery.errors) {
    throw companiesQuery.errors
  } else if (researchQuery.errors) {
    throw researchQuery.errors
  }

  const companies = companiesQuery.data.allCompaniesJson.edges
  const edgesResearch = researchQuery.data.allResearchJson.edges

  companies.forEach((singleCompany, index) => {
    let curCompanyTicker = singleCompany.node.ticker

    createPage({
      path: `company/${curCompanyTicker.slice(0, -3)}`,
      component: companyTemplate,
      context: {
        ticker: curCompanyTicker,
      },
    })
  })

  edgesResearch.forEach((singleRsearch, index) => {
    let curResearchId = singleRsearch.node.id

    createPage({
      path: `research/${curResearchId}`,
      component: researchTemplate,
      context: {
        id: curResearchId,
      },
    })
  })

  /*   tiddlers.forEach((tiddler, index) => {
    let curDay = tiddler.node.day

    if (curDay !== previousDay) {
      createPage({
        path: `lateedition/${tiddler.node.day}`,
        component: daily,
        context: {
          day: tiddler.node.day,
          previous: `lateedition/${uniqueDays[pointer + 1]}`,
          next: `lateedition/${uniqueDays[pointer - 1]}`,
        },
      })
      pointer++
      previousDay = curDay
    }

    for (let i = 0; i < tiddler.node.about.length; i++) {
      let currentAbout = tiddler.node.about[i]
      if (!hashAboutPages[currentAbout]) {
        hashAboutPages[currentAbout] = true
        createPage({
          path: `lateedition/${currentAbout}`,
          component: aboutTemplate,
          context: {
            thisAbout: currentAbout,
          },
        })
      }
    }
  }) */
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  /*   const { createNodeField } = actions

  if (node.category === `tweet`) {
    const { data } = await axios.get(
      `https://publish.twitter.com/oembed?url=${node.metainfo}&dnt=false&omit_script=true`
    )

    createNodeField({
      name: `url`,
      node,
      value: data.url,
    })
    createNodeField({
      name: `author_name`,
      node,
      value: data.author_name,
    })
    createNodeField({
      name: `html`,
      node,
      value: data.html,
    })
  } */
}
