const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
    stories: ["../src/**/stories/*.stories.js"],
    addons: [
        "storybook-addon-performance/register",
        "@storybook/addon-a11y",
        "@storybook/addon-toolbars",
    ],
    typescript: {
        reactDocgen: false,
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        const editedConfig = config;

        return {
            ...editedConfig,
            resolve: {
                ...editedConfig.resolve,
                alias: {
                    ...editedConfig.resolve.alias,
                    "@emotion/core": toPath("node_modules/@emotion/react"),
                    "emotion-theming": toPath("node_modules/@emotion/react"),
                },
            },
        }
    },
}
