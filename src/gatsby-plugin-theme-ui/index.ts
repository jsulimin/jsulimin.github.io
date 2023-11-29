import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"

const oxBlue = `#001427`
const hookGreen = `#708d81`
const jasmine = `#f4d58d`
const engOrange = `#bf0603`
const darkRed = `#8d0801`

const theme = merge(originalTheme, {
  fonts: {
    heading: `"Arial"`,
    body: `"Arial"`,
    monospace: `"Arial"`
  },
})

export default theme
