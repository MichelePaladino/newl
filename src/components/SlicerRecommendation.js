import React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import { researchListFilterState } from "../recoil/atoms"
import { availableRecs } from "../recoil/selectors"

import ButtonPlain from "./ButtonPlain"

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

const SlicerRecommendation = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avRecs = useRecoilValue(availableRecs)

  return (
    <ST_SlicerAuthor>
      <h1>Recommendation</h1>
      {allRecommendations.map(el => (
        <SlicerOptionItem
          isActive={researchListFilter["recommendation"] === el}
          isFilteredOut={!avRecs.includes(el)}
          disabled={!avRecs.includes(el)}
          key={el}
          onClick={ev => {
            setResearchListFilter(filtObj => {
              if (filtObj.recommendation === el) {
                return { ...filtObj, recommendation: null }
              } else {
                return { ...filtObj, recommendation: el }
              }
            })
          }}
        >
          {el}
        </SlicerOptionItem>
        /*         <ButtonPlain
          isActive={researchListFilter["recommendation"] === el}
          isFilteredOut={!avRecs.includes(el)}
          disabled={!avRecs.includes(el)}
          handleSimpleOnClick={() =>
            setResearchListFilter(filtObj => {
              if (filtObj.recommendation === el) {
                return { ...filtObj, recommendation: null }
              } else {
                return { ...filtObj, recommendation: el }
              }
            })
          }
          key={el}
          buttonText={el}
          opacity={1}
          padding="0rem 2rem"
          // minWidth="25%"
          paddingTop="0.2rem"
          // lineHeight="1.6"
          letterSpacing="0.20rem"
          //           fontSize="2rem"
          borderRadius="1rem"
        /> */
      ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerRecommendation

const allRecommendations = ["Buy", "Sell", "Update"]
