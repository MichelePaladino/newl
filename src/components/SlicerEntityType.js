import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import { researchListFilterState } from "../recoil/atoms"
import { availableEntityType } from "../recoil/selectors"

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

const SlicerEntityType = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avETypes = useRecoilValue(availableEntityType)

  return (
    <ST_SlicerAuthor>
      <h1>Entity Type</h1>
      {allETypes.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter["etype"] === el}
          isFilteredOut={!avETypes.includes(el)}
          disabled={!avETypes.includes(el)}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj.etype === el) {
                return { ...filtObj, etype: null }
              } else {
                return { ...filtObj, etype: el }
              }
            })
          }}
        >
          {el === 1 ? "Equity" : "Fixed Income"}
        </SlicerOptionItem>
      ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerEntityType

const allETypes = [1, 2]
