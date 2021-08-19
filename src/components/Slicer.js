import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"
import { researchListFilterState } from "../recoil/atoms"

const ST_SlicerAuthor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

const SlicerOptionItem = styled.p`
  color: ${props => (props.isActive ? "green" : "yellow")};
`

const SlicerAuthor = ({ category, recoilSelector }) => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const derivedState = useRecoilValue(recoilSelector)

  return (
    <ST_SlicerAuthor>
      <h1>{category.toUpperCase()}</h1>
      {category === "author" && (
        <input type="text" value="" onClick={() => {}}></input>
      )}
      {derivedState.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter[category] === el}
          style={{ cursor: "pointer" }}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj[category] === el) {
                return { ...filtObj, [category]: null }
              } else {
                return { ...filtObj, [category]: el }
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

export default SlicerAuthor
