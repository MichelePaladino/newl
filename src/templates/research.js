import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
`
const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
const Tiddlers = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ResearchTemplate = ({ data, pageContext, location }) => {
  const { id } = pageContext // day is non-format
  const research = data.allResearchJson.edges

  return (
    /*     <Layout>
      <SEO
        title="Late Edition"
        cardTitle={"Frontend Digest"}
        description="💾 Late Edition is a daily collection of cool stuff about the web development world that I find in my everyday browsing."
        socialImage={socialImage}
        day={day}
      />
      <Menu />
      <Main>
        <HeaderDynamic
          previous={previous}
          next={next}
          day={tiddlers[0].node.day}
        ></HeaderDynamic>
        <Tiddlers>
          {articles.map(tiddler => (
            <Tiddler
              key={tiddler.metainfo}
              category={tiddler.category}
              metainfo={tiddler.metainfo}
              about={tiddler.about}
              payload={tiddler.payload}
            />
          ))}
          {videos.map(tiddler => (
            <Tiddler
              key={tiddler.metainfo}
              category={tiddler.category}
              metainfo={tiddler.metainfo}
              about={tiddler.about}
              payload={tiddler.payload}
            />
          ))}
          {podcasts.map(tiddler => (
            <Tiddler
              key={tiddler.metainfo}
              category={tiddler.category}
              metainfo={tiddler.metainfo}
              about={tiddler.about}
              payload={tiddler.payload}
            />
          ))}
        </Tiddlers>
        <Tiddlers>
          {tweets.map(tiddler => (
            <Tiddler
              key={tiddler.metainfo}
              category={tiddler.category}
              metainfo={tiddler.metainfo}
              about={tiddler.about}
              tweetInfo={{
                text: tiddler.fields.html,
                author_name: tiddler.fields.author_name,
                url: tiddler.fields.url,
              }}
            />
          ))}
        </Tiddlers>
      </Main>
    </Layout> */
    <div>
      <pre>{JSON.stringify(research, null, 2)}</pre>
    </div>
  )
}

export default ResearchTemplate

export const pageQuery = graphql`
  query getResearchById($id: String!) {
    allResearchJson(filter: { id: { eq: $id } }) {
      edges {
        node {
          author
          company_id
          company_name
          id
          recommendation
          rtype
          summary
          target_price
          ticker
          title
          publish_date
        }
      }
    }
  }
`
