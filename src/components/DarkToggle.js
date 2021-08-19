import * as React from "react"
import { ThemeContext } from "./ThemeContext"
import styled from "styled-components"

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <Toggle
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      {/* <Switch>{svgoutrun}</Switch> */}
      PREMI
      <Text>{colorMode === "light" ? "start?" : "yeeeah"}</Text>
    </Toggle>
  )
}

const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Switch = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  margin: 0;
  padding: 0;
`

const Text = styled.p`
  color: var(--color-blackyellow);
  font-size: 1.6rem;
  text-shadow: none;
`

export default DarkToggle
