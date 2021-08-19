import * as React from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"
import { researchListFilterState } from "../recoil/atoms"
import { availableAuthors } from "../recoil/selectors"
import SuggestItem from "./SuggestItem"

const ST_SlicerAuthor = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

const SlicerOptionItem = styled.button`
  color: "black"; // color of slicers
  background-color: ${props => (props.isFilteredOut ? "grey" : "default")};
  cursor: ${props => (props.isFilteredOut ? "not-allowed" : "pointer")};
  padding: 0.5rem;
`

const SlicerAuthor = () => {
  const [researchListFilter, setResearchListFilter] = useRecoilState(
    researchListFilterState
  )
  const avAuthors = useRecoilValue(availableAuthors)

  /*   const [localState, setLocalState] = React.useState("")
  const handleChange = e => {
    setResearchListFilter(filtObj => ({ ...filtObj, author: e.target.value }))
  } */

  /*   const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState([]) */

  return (
    <ST_SlicerAuthor>
      <h1>Analyst</h1>
      {/*       <input type="text" value={localState} onChange={handleChange}></input> */}
      <SuggestItem
        /*         setQuery={setQuery} */
        suggestData={avAuthors}
        placeholder="Analyst"
        id="suggestAnalyst"
        setResearchListFilter={setResearchListFilter}
      />
      {allAuthors
        .filter(all => all === researchListFilter["author"])
        .map(a => (
          <SlicerOptionItem
            isActive={researchListFilter["author"] === a}
            isFilteredOut={!avAuthors.includes(a)}
            disabled={!avAuthors.includes(a)}
            key={a}
            onClick={ev => {
              setResearchListFilter(filtObj => {
                if (filtObj.author === a) {
                  return { ...filtObj, author: null }
                } else {
                  return { ...filtObj, author: a }
                }
              })
            }}
          >
            {a}{" "}
            <ButtonDelete
            /*           onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            props.handleDeleteTempFilter("legalities", props.code)
          }} */
            >
              X
            </ButtonDelete>
          </SlicerOptionItem>
        ))}
    </ST_SlicerAuthor>
  )
}

export default SlicerAuthor

const allAuthors = [
  "Donnie Darko",
  "Forrest Gump",
  "Fred Flintstone",
  "Marty McFly",
  "Mary Poppins",
  "Michael Scott",
  "Indiana Jones",
  "Harry Potter",
  "Charlie Brown",
  "Willy Wonka",
  "James Bond",
  "Bilbo Baggins",
  "Homer Simpson",
  "Peter Pan",
]

const ButtonDelete = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #cccccc;
  /*   margin-left: 0.8rem;
  margin-top: 0.1rem; */
  color: #000000;
  justify-content: center;
  cursor: pointer;
  /*   align-items: center;
  padding-top: 0.3rem; */
`
