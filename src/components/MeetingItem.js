import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Text from "./Text/Text"
import { CalendarIcon } from "@heroicons/react/outline"

const AdminFlex = styled.div`
  display: flex;
  flex-direction: row;
  /*   justify-content: center;
  align-items: center; */
  /* padding: 1.2rem; */
  margin: 1.2rem 0;
`
const AdminInfoFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
`
const AdminName = styled.p`
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 0.9em;
  font-weight: 500;
  line-height: 100%;
  color: #192a3e;
`
const AdminMail = styled.p`
  margin: 0;
  font-size: 0.7em;
  font-weight: 400;
  color: #90a0b7;
  line-height: 100%;
`

const MeetingItem = ({ name, person }) => {
  return (
    <AdminFlex>
      <CalendarIcon width={"24px"} />
      <AdminInfoFlex>
        <AdminName>{name}</AdminName>
        <AdminMail>{person}</AdminMail>
      </AdminInfoFlex>
    </AdminFlex>
  )
}

export default MeetingItem
