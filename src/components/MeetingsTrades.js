import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Text from "./Text/Text"
import MeetingItem from "./MeetingItem"

const ST_Slicers = styled.div`
  flex: 0 1 20rem;

  display: flex;
  flex-direction: column;
  background-color: white;
`

const MeetingsTrades = () => {
  return (
    <SubBox>
      <Text
        content="Meetings"
        padding="0"
        margin="1rem 0 1rem 0"
        lineHeight="100%"
        letterSpacing=""
        fontSize="1em"
        fontWeight="500"
        color="#192a3e"
      />
      <Text
        content="Today, 18 Aug 21"
        padding="0"
        margin="0 0 1rem 0"
        lineHeight="100%"
        letterSpacing=""
        fontSize=".7em"
        fontWeight="400"
        color="#90a0b7"
      />
      {meetings.map(m => (
        <MeetingItem name={m.name} key={m.name} person={m.person} />
      ))}
    </SubBox>
  )
}

export default MeetingsTrades

const SubBox = styled.div`
  padding: 1rem 2rem;
  box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.5);
  border-radius: 10px;
  /*   margin: 1rem; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /*   align-items: center; */
`

const meetings = [
  {
    name: "BlackRock, Inc.",
    person: "Edward Pillar",
  },
  {
    name: "Nordic Holding",
    person: "Daniel Rowling",
  },
  {
    name: "Exxon Mobil Corp.",
    person: "John Smith",
  },
  {
    name: "KEYENCE Corp.",
    person: "Mark Miller",
  },
  {
    name: "Comcast Corp.",
    person: "John Smith",
  },
  {
    name: "Oracle Corp.",
    person: "John Doe",
  },
  {
    name: "Unilever PLC",
    person: "Foo Bar",
  },
  {
    name: "BHP Billiton Ltd.",
    person: "Bar Baz",
  },
  {
    name: "Royal Dutch Shell Plc",
    person: "Alphonso Davis",
  },
  {
    name: "Microsoft Corp.",
    person: "Gerard Black",
  },
  {
    name: "AIA Group Ltd.",
    person: "Oscar Benitez",
  },
]
