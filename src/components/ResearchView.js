import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { SetRecoilState, useRecoilState, useRecoilValue } from "recoil"
import Table from "rc-table"
import { DocumentDownloadIcon } from "@heroicons/react/outline"

import { researchListState } from "../recoil/atoms"
import { filteredResearchListState } from "../recoil/selectors"

import ResearchItem from "./ResearchItem"

const columns = [
  {
    title: "Date",
    dataIndex: "publish_date",
    key: "publish_date",
    width: 50,
  },
  {
    title: "Company",
    dataIndex: "company_name",
    key: "company_name",
    width: 100,
    render(val, obj, i) {
      return <Link to={`/company/${obj.ticker.slice(0, -3)}`}>{val}</Link>
    },
  },
  {
    title: "Type",
    dataIndex: "rtype",
    key: "rtype",
    width: 20,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 300,
    render(val, obj, i) {
      return <Link to={`/research/${obj.id}`}>{val}</Link>
    },
  },
  {
    title: "Reco",
    dataIndex: "recommendation",
    key: "recommendation",
    width: 30,
  },
  {
    title: "Target",
    dataIndex: "target_price",
    key: "target_price",
    width: 20,
  },
  {
    title: "Analyst",
    dataIndex: "author",
    key: "author",
    width: 100,
  },
  {
    title: "Export",
    dataIndex: "export",
    key: "export",
    width: 20,
    render(val, obj, i) {
      return <DocumentDownloadIcon width={"24px"} />
    },
  },
]

const ResearchView = () => {
  /*   const [researchList, setResearchList] = useRecoilState(researchListState) */
  const filteredResearchList = useRecoilValue(filteredResearchListState)

  const dataForTable = filteredResearchList
    .map(r => {
      const curR = { ...r.node }
      if (curR.rtype === 1) {
        curR.rtype = "IT"
      } else if (curR.rtype === 2) {
        curR.rtype = "MN"
      } else if (curR.rtype === 3) {
        curR.rtype = "C"
      }
      curR.publish_date = curR.publish_date.substring(
        0,
        curR.publish_date.length - 4
      )
      return curR
    })
    .slice(0, 30)

  return (
    <SubBox>
      {/*       {filteredResearchList.slice(0, 30).map(r => (
        <ResearchItem key={r.node.id} {...r.node} />
      ))} */}
      <Table columns={columns} data={dataForTable} />
    </SubBox>
  )
}

export default ResearchView

const SubBox = styled.div`
  flex-grow: 1;
  margin: 0 1.5rem;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.5);
  border-radius: 10px;
  /*   margin: 1rem; */
  background-color: #fff;

  display: flex;
  flex-direction: column;
  /*   align-items: center; */
`
