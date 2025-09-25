// import { fileURLToPath } from "url";
// import path from "path";
// import tsconfigPaths from "vite-tsconfig-paths";
// import type { StorybookConfig } from "@storybook/react-vite";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const config: StorybookConfig = {
//   stories: [ 
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
//   ],
//   addons: [
//     "@chromatic-com/storybook",
//     "@storybook/addon-docs",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-a11y",
//     "@storybook/addon-vitest",
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
//   viteFinal: async (config) => {
//     config.plugins?.push(
//       tsconfigPaths({
//         projects: [path.resolve(process.cwd(), "tsconfig.json")],
//       })
//     );
//     return config;
//   },
// };

// export default config;
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins?.push(
      tsconfigPaths({
        projects: ["tsconfig.json"], // Use a relative string, not path.resolve
      })
    );
    return viteConfig;
  }
};

export default config;