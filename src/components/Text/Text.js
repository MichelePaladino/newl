import * as React from "react"
import styled from "styled-components"

const Text = props => {
  return (
    <ST_Text
      style={{
        "--padding": props.padding,
        "--margin": props.margin,
        "--line-height": props.lineHeight,
        "--letter-spacing": props.letterSpacing,
        "--font-size": props.fontSize,
        "--font-weight": props.fontWeight,
        "--color": props.color,
      }}
    >
      {props.content}
    </ST_Text>
  )
}

const ST_Text = styled.span`
  color: var(--color);
  padding: var(--padding);
  margin: var(--margin);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
`

export default Text
