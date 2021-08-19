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

const CompanyTemplate = ({ data, pageContext, location }) => {
  const { ticker } = pageContext // day is non-format
  const company = data.allCompaniesJson.edges

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
      <pre>{JSON.stringify(ticker, null, 2)}</pre>
      <pre>{JSON.stringify(company, null, 2)}</pre>
    </div>
  )
}

export default CompanyTemplate

export const pageQuery = graphql`
  query getCompanyByTicker($ticker: String!) {
    allCompaniesJson(filter: { ticker: { eq: $ticker } }) {
      edges {
        node {
          address_1
          bloom_title
          closingprice
          country
          currency
          daily_vol_mil
          description
          environment_rating
          exchange
          governance_rating
          home_rating
          id
          ispublic
          market_cap
          mscicountry
          mscisector
          phone
          region
          sector
          sid
          social_rating
          ticker
          title
          website
        }
      }
    }
  }
`
