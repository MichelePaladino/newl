import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

/* 
        key={"time"}
        buttonText="time"
        isFiltering={orderByUDF === "time"}
        tooltip="Order decks by time"
        handleOnClick={e =>
          handleUI_SIMPLE_CHANGE(uidispatch, "orderByUDF", "time")
        }
        propRadius="6rem"
        propFontSize="1.8rem"
        propPadTop="0.1rem"
        propLetSpac="0.25rem"
        propLineHeight="1.6"
        propMinWidth="14rem"
 */

const ButtonPlain = props => {
  return (
    <Button
      isActive={props.isActive}
      isFilteredOut={props.isFilteredOut}
      disabled={props.disabled}
      variants={variants}
      initial="default"
      whileHover="hover"
      whileTap="tap"
      title={props.tooltip}
      /*       isFiltering={props.isFiltering} */
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
        props.handleSimpleOnClick()
      }}
      style={{
        "--opacity": props.opacity,
        "--padding": props.padding,
        "--min-width": props.minWidth,
        "--padding-top": props.paddingTop,
        "--line-height": props.lineHeight,
        "--letter-spacing": props.letterSpacing,
        "--font-size": props.fontSize,
        "--border-radius": props.borderRadius,
        "--margin": props.margin,
        "--height": props.height,
      }}
    >
      {props.buttonText}
    </Button>
  )
}

const Button = styled(motion.button)`
  background-color: ${props => (props.isFilteredOut ? "#76787B" : "#DADBDB")};
  cursor: ${props => (props.isFilteredOut ? "not-allowed" : "pointer")};

  /*   cursor: pointer; */
  outline: none;
  height: var(--height, 3rem);
  padding: var(--padding);
  /* margin: 0.5rem; */
  /* color: #cccccc; */
  border: 1px solid #141414;

  /*  opacity: ${props => (props.isFiltering ? 1 : 0.5)}; */

  /*   min-width: ${props =>
    props.propMinWidth ? props.propMinWidth : "auto"};
  padding-top: ${props => (props.propPadTop ? props.propPadTop : "0rem")};
  line-height: ${props =>
    props.propLineHeight ? props.propLineHeight : "normal"};
  letter-spacing: ${props =>
    props.propLetSpac ? props.propLetSpac : "normal"};
  font-size: ${props => (props.propFontSize ? props.propFontSize : "1.6rem")};
  border-radius: ${props => (props.propRadius ? props.propRadius : "2rem")}; */

  opacity: var(--opacity);
  min-width: var(--min-width);
  padding-top: var(--padding-top);
  line-height: var(--line-height);
  letter-spacing: var(--letter-spacing);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  margin: var(--margin, 0.1rem);
`

export default ButtonPlain

const variants = {
  tap: {
    y: 0,
    /*     backgroundColor: "#161616", */
    boxShadow:
      "0px 0px 0px 0px #040404, 0px 1px 0px 0px rgba(255,255,255,0.6), 0px 0px 2px 0px rgba(0,0,0,0.3), inset 0px 1px 0px 0px rgba(255,255,255,0.2)",
  },
  hover: {
    y: -3,
    boxShadow:
      "0px 2px 0px 0px #040404, 0px 0px 0px 0px rgba(255,255,255,0.6), 0px 2px 2px 0px rgba(0,0,0,0.3), inset 0px 1px 0px 0px rgba(255,255,255,0.2)",
    backgroundImage:
      "linear-gradient(-180deg,rgba(255, 255, 255, 0.0) 0%,rgba(0, 0, 0, 0.0) 100%)",
  },
  default: {
    y: -4,
    /*     backgroundColor: "#cccccc", */
    boxShadow:
      "0px 2px 0px 0px #040404, 0px 0px 0px 0px rgba(255, 255, 255, 0.6), 0px 3px 2px 0px rgba(0, 0, 0, 0.3), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2)",
    backgroundImage:
      "linear-gradient(-180deg,rgba(255, 255, 255, 0.1) 0%,rgba(0, 0, 0, 0.1) 100%)",
    transition: {
      delay: 0,
      y: { type: "tween" },
    },
  },
}
