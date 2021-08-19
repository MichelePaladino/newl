import * as React from "react"
import { Link, graphql } from "gatsby"
import { useSetRecoilState } from "recoil"
import styled from "styled-components"

import NavBar from "./../components/NavBar"
import Main from "./../components/Main"
import { companyListState, researchListState } from "./../recoil/atoms"

/* import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo" */

const ST_PageWrapper = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 0 1 22rem;
  border-right: 5px solid #333;
  min-height: 100vh;
  background-color: #fff;
`
const Right = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 2.5rem;
`

const IndexPage = props => {
  const setResearchList = useSetRecoilState(researchListState)
  const setCompanyList = useSetRecoilState(companyListState)

  React.useEffect(() => {
    setResearchList(props.data.allResearchJson.edges)
    setCompanyList(props.data.allCompaniesJson.edges)
  }, [])

  return (
    /*   <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <Link to="/company/SAN">Sanofi</Link>
        <Link to="/research/1">1 research</Link>
      </p>
    </Layout> */
    <ST_PageWrapper>
      <Left>
        <NavBar />
      </Left>
      <Right>
        <Main />
      </Right>
    </ST_PageWrapper>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQueryResearch {
    allResearchJson(sort: { fields: publish_date, order: DESC }) {
      edges {
        node {
          author
          company_id
          company_name
          id
          recommendation
          etype
          rtype
          summary
          target_price
          ticker
          title
          publish_date(formatString: "MMMM DD YYYY")
        }
      }
    }
    allCompaniesJson {
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
