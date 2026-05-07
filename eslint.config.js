// eslint.config.js
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            },
            ecmaVersion: "latest",
            sourceType: "commonjs"
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "warn",
            "semi": ["error", "always"],
            "quotes": ["error", "single"]
        }
    }
];
