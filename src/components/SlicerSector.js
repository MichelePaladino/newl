import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"
import { researchListFilterState } from "../recoil/atoms"
import { availableSectors } from "../recoil/selectors"

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

const SlicerSector = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avSectors = useRecoilValue(availableSectors)

  return (
    <ST_SlicerAuthor>
      <h1>Sector</h1>
      {allSectors.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter["sector"] === el}
          isFilteredOut={!avSectors.includes(el)}
          disabled={!avSectors.includes(el)}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj.sector === el) {
                return { ...filtObj, sector: null }
              } else {
                return { ...filtObj, sector: el }
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

export default SlicerSector

const allSectors = [
  "Consumer",
  "Industrials",
  "Healthcare",
  "Financials",
  "Power",
  "TMT",
]
