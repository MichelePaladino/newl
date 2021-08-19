import React, { useState } from "react"
import styled from "styled-components"
import Autosuggest from "react-autosuggest"

import "./suggest.css"

// https://github.com/moroshko/react-autosuggest

const getSuggestionValue = suggestion => suggestion
const shouldRenderSuggestions = () => true
const renderSuggestion = suggestion => <div>{suggestion}</div>

const Suggest = ({
  /*   setQuery, */
  suggestData,
  placeholder,
  id,
  setResearchListFilter,
}) => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : suggestData.filter(el => {
          return el.toLowerCase().includes(inputValue)
        })
  }

  function onSuggestionsFetchRequested({ value, reason }) {
    /* setValue(value)  */ // tolto da me
    setSuggestions(getSuggestions(value))
  }

  function onSuggestionsClearRequested() {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: placeholder,
    value: value,
    onChange: (_, { newValue, method }) => {
      setValue(newValue)
      /*       setQuery(newValue) */
    },
  }

  function onSuggestionSelected(
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) {
    /* handleSwitchSuggest(suggestKey, suggestionValue, "isFiltering") */
    if (id === "suggestAnalyst") {
      /*       handleUI_ADD_CARD(dispatcher, "cardsIncluded", `${suggestionValue},`) */
      /*       setResearchListFilter(filtObj => {
        if (filtObj.author === a) {
          return { ...filtObj, author: null }
        } else {
          return { ...filtObj, author: a }
        }
      }) */
      setResearchListFilter(filtObj => ({
        ...filtObj,
        author: suggestionValue,
      }))
    } else if (id === "suggestCompany") {
      setResearchListFilter(filtObj => ({
        ...filtObj,
        company_name: suggestionValue,
      }))
    }
    /*     else if (id === "without") {
      handleUI_ADD_CARD(dispatcher, "cardsExcluded", `${suggestionValue},`)
    } */
    /*     setQuery("") */
    setValue("")
    setSuggestions([])
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      id={id}
      shouldRenderSuggestions={shouldRenderSuggestions}
      /*       highlightFirstSuggestion={true} */
    />
  )
}

export default Suggest
