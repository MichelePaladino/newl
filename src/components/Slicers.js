import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { SetRecoilState, useRecoilState, useResetRecoilState } from "recoil"

import { researchListFilterState, researchListState } from "../recoil/atoms"
import {
  availableAuthors,
  availableRecs,
  availableRegions,
  availableSectors,
} from "../recoil/selectors"

import SlicerAuthor from "./SlicerAuthor"
import SlicerSector from "./SlicerSector"
import SlicerRegion from "./SlicerRegion"
import SlicerRecommendation from "./SlicerRecommendation"
import SlicerCompany from "./SlicerCompany"
import SlicerResearchType from "./SlicerResearchType"
import SlicerEntityType from "./SlicerEntityType"
import Slicer from "./Slicer"

const ST_Slicers = styled.div`
  flex: 0 1 20rem;

  display: flex;
  flex-direction: column;
`

const Slicers = () => {
  /*   const [researchList, setResearchList] = useRecoilState(researchListState) */

  return (
    <ST_Slicers>
      <SlicerAuthor />
      <SlicerCompany />
      <SlicerSector />
      <SlicerRegion />
      <SlicerRecommendation />
      <SlicerResearchType />
      <SlicerEntityType />
      <br />
      <br />
      <br />
      <TodoResetButton />
      {/* <Slicer category="author" recoilSelector={availableAuthors} />
      <Slicer category="recommendation" recoilSelector={availableRecs} />
      <Slicer category="sector" recoilSelector={availableSectors} />
      <Slicer category="region" recoilSelector={availableRegions} /> */}
    </ST_Slicers>
  )
}

export default Slicers

const TodoResetButton = () => {
  const resetFilters = useResetRecoilState(researchListFilterState)
  return <button onClick={resetFilters}>Reset</button>
}
