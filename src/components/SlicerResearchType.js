import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import { researchListFilterState } from "../recoil/atoms"
import { availableResearchType } from "../recoil/selectors"

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
  const avRecs = useRecoilValue(availableResearchType)

  return (
    <ST_SlicerAuthor>
      <h1>Research Type</h1>
      {allRTypes.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter["rtype"] === el}
          isFilteredOut={!avRecs.includes(el)}
          disabled={!avRecs.includes(el)}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj.rtype === el) {
                return { ...filtObj, rtype: null }
              } else {
                return { ...filtObj, rtype: el }
              }
            })
          }}
        >
          {el === 1
            ? "Investment Thesis"
            : el === 2
            ? "Meeting Note"
            : "Comment"}
        </SlicerOptionItem>
      ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerEntityType

const allRTypes = [1, 2, 3]
