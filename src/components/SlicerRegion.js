import React from "react"
import styled from "styled-components"
import { useRecoilValue, useRecoilState } from "recoil"

import { researchListFilterState } from "../recoil/atoms"
import { availableRegions } from "../recoil/selectors"

const ST_SlicerAuthor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

const SlicerOptionItem = styled.button`
  color: "black"; // color of slicers
  background-color: ${props => (props.isFilteredOut ? "grey" : "default")};
  cursor: ${props => (props.isFilteredOut ? "not-allowed" : "pointer")};
`

const SlicerRegion = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avRegions = useRecoilValue(availableRegions)

  return (
    <ST_SlicerAuthor>
      <h1>Region</h1>
      {allRegions.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter["region"] === el}
          isFilteredOut={!avRegions.includes(el)}
          disabled={!avRegions.includes(el)}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj.region === el) {
                return { ...filtObj, region: null }
              } else {
                return { ...filtObj, region: el }
              }
            })
          }}
        >
          {el}
        </SlicerOptionItem>
      ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerRegion

const allRegions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Asia",
  "Latin America",
]
