import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"

const theme = merge(originalTheme, {
  fonts: {
    heading: `"Arial"`,
    body: `"Arial"`,
    monospace: `"Arial"`
  },
})

export default theme
