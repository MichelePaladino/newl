import React from "react"
import styled from "styled-components"

import ResearchView from "./ResearchView"
import Slicers from "./Slicers"
import MeetingsTrades from "./MeetingsTrades"

const ST_Main = styled.div`
  display: flex;
  justify-content: space-between;
`

const Main = () => {
  return (
    <ST_Main>
      <MeetingsTrades />
      <ResearchView />
      <Slicers />
    </ST_Main>
  )
}

export default Main
