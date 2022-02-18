import { PropsWithChildren } from "react";
import {
  ThemeProvider as Provider,
  createGlobalStyle,
} from "styled-components";

import lightTheme from "./lightTheme";

const GlobalStyle = createGlobalStyle`

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


body {
  margin: 0;
  font-family: ${(props) => props.theme.fontFamilies.inter}, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  box-sizing: border-box;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.accent1};
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.foreground};
}

html, body {
text-rendering: optimizeLegibility;
-webkit-font-smoothing: subpixel-antialiased;

}

`;

function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <Provider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </Provider>
  );
}

export default ThemeProvider;
