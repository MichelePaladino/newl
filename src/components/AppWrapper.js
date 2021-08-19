import React from "react"
import { RecoilRoot } from "recoil"

import { ThemeProvider } from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"

function App({ children }) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
