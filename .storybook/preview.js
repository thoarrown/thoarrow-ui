import { ThemeProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  );
};

const withHooks = (Story) => <Story />;
export const decorators = [withHooks, withThemeProvider];
