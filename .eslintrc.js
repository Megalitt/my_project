const { off } = require("process");

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
      "react/react-in-jsx-scope": 'off',
      "no-extra-semi": "off",
      'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'i18next/no-literal-string': [
                'off',
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                },
            ],
            'max-len': ['error', { ignoreComments: true, code: 100 }],
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'react-hooks/rules-of-hooks': 'off', 
            'react-hooks/exhaustive-deps': 'off', 
            'no-param-reassign': 'off',
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "max-len":"off",
            "no-undef":"off",
            "@typescript-eslint/no-var-requires": "off",
            "no-empty-source": "off",
            "rule-empty-line-before": "off",
            "react/display-name": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "prefer-const": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "no-debugger": "off"
            
    }
}

// module.exports = {
//   env: {
//       browser: true,
//       es2021: true,
//       jest: true,
//   },
//   extends: [
//       'plugin:react/recommended',
//       'airbnb',
//       'plugin:i18next/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//       ecmaFeatures: {
//           jsx: true,
//       },
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//   },
//   plugins: [
//       'react',
//       '@typescript-eslint',
//       'i18next',
//       'react-hooks',
//   ],
//   rules: {
//       'react/jsx-indent': [2, 4],
//       'react/jsx-indent-props': [2, 4],
//       indent: [2, 4],
//       'react/jsx-filename-extension': [
//           2,
//           { extensions: ['.js', '.jsx', '.tsx'] },
//       ],
//       'import/no-unresolved': 'off',
//       'import/prefer-default-export': 'off',
//       'no-unused-vars': 'warn',
//       'react/require-default-props': 'off',
//       'react/react-in-jsx-scope': 'off',
//       'react/jsx-props-no-spreading': 'warn',
//       'react/function-component-definition': 'off',
//       'no-shadow': 'off',
//       'import/extensions': 'off',
//       'import/no-extraneous-dependencies': 'off',
//       'no-underscore-dangle': 'off',
//       'i18next/no-literal-string': [
//           'error',
//           {
//               markupOnly: true,
//               ignoreAttribute: ['data-testid', 'to'],
//           },
//       ],
//       'max-len': ['error', { ignoreComments: true, code: 100 }],
//       'jsx-a11y/no-static-element-interactions': 'off',
//       'jsx-a11y/click-events-have-key-events': 'off',
//       'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
//       'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
//       'no-param-reassign': 'off',
//   },
//   globals: {
//       __IS_DEV__: true,
//   },
//   overrides: [
//       {
//           files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
//           rules: {
//               'i18next/no-literal-string': 'off',
//               'max-len': 'off',
//           },
//       },
//   ],
// };