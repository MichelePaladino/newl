/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"
import "@fontsource/roboto" // Defaults to weight 400.
import AppWrapper from "./src/components/AppWrapper"

export const wrapRootElement = ({ element }) => {
  return <AppWrapper>{element}</AppWrapper>
}
