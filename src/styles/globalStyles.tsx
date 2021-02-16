import { createGlobalStyle} from "styled-components"

import { ThemeType } from '../App'

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `