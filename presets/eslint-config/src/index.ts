/*
 * Copyright (c) 2019-2023 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { packages, pathspec } from "@squidfunk/mono-resolve"

/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */

/**
 * Resolve patterns from closest `.eslintignore`
 *
 * @returns Ignore patterns
 */
function ignored(): string[] {
  return pathspec(".eslintignore")
}

/**
 * Resolve package scope
 *
 * @returns Scope
 */
function scope(): string {
  const [[name]] = packages()
  const [prefix] = name.split("/")

  // Return regular expression
  return `^${prefix}/`
}

/* ----------------------------------------------------------------------------
 * Configuration
 * ------------------------------------------------------------------------- */

export = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "**/tsconfig.json"
  },
  ignorePatterns: ignored(),
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-eslint-comments",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-no-null",
    "eslint-plugin-unicorn"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    "import/extensions": [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".json"
    ],
    "import/internal-regex": scope(),
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    }
  },
  rules: {
    "array-bracket-spacing": "warn",
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "block-spacing": "warn",
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": "warn",
    "comma-style": "error",
    "computed-property-spacing": "warn",
    "curly": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "func-call-spacing": "warn",
    "keyword-spacing": "warn",
    "lines-around-comment": [
      "error",
      {
        "allowBlockStart": true,
        "allowBlockEnd": true,
        "beforeBlockComment": true,
        "ignorePattern": "@ts-(ignore|expect-error)"
      }
    ],
    "lines-between-class-members": "warn",
    "max-len": "warn",
    "max-classes-per-file": "error",
    "new-parens": "error",
    "no-caller": "error",
    "no-case-declarations": "off",
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-restricted-globals": [
      "error",
      {
        "name": "fdescribe",
        "message": "Did you mean 'describe'?"
      },
      {
        "name": "xdescribe",
        "message": "Did you mean 'describe'?"
      },
      {
        "name": "fit",
        "message": "Did you mean 'it'?"
      },
      {
        "name": "xit",
        "message": "Did you mean 'xit'?"
      }
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSEnumDeclaration:not([const=true])",
        "message": "Missing 'const' qualifier for enum"
      }
    ],
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "off",
    "no-trailing-spaces": "warn",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-var": "error",
    "no-whitespace-before-property": "warn",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],

    "radix": "error",
    "semi": "off",
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "space-before-blocks": "warn",
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",

    // Plugin: @typescript-eslint
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/indent": [
      "warn",
      2,
      {
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "MemberExpression": "off",
        "ObjectExpression": 1,
        "SwitchCase": 1,
        "ignoreComments": true,
        "ignoredNodes": [
          "ArrowFunctionExpression > *",
          "CallExpression > ObjectExpression",
          "ConditionalExpression > ConditionalExpression",
          "TSTypeReference > *"
        ],
        "offsetTernaryExpressions": true
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none"
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "enumMember",
        "format": [
          "UPPER_CASE"
        ]
      }
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "hoist": "never"
      }
    ],
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",

    // Plugin: eslint-plugin-eslint-comments
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/no-use": [
      "warn",
      {
        "allow": [
          "eslint-disable-line",
          "eslint-disable-next-line"
        ]
      }
    ],

    // Plugin: eslint-plugin-import
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-self-import": "error",
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        },
        "newlines-between": "always",
        "groups": [
          ["builtin", "external"],
          ["internal"],
          ["index"],
          ["parent"],
          ["sibling"]
        ],
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "index",
            "position": "before"
          },
          {
            "pattern": "_/**",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"]
      }
    ],

    // Plugin: eslint-plugin-jsdoc
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-param-names": [
      "warn",
      {
        "checkDestructured": false
      }
    ],
    "jsdoc/check-syntax": "warn",
    "jsdoc/check-tag-names": [
      "warn",
      {
        "definedTags": [
          "internal"
        ]
      }
    ],
    "jsdoc/empty-tags": "warn",
    "jsdoc/no-bad-blocks": "warn",
    "jsdoc/no-defaults": "warn",
    "jsdoc/no-types": "warn",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": "warn",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-param": [
      "warn",
      {
        "checkDestructured": false,
        "checkDestructuredRoots": true
      }
    ],
    "jsdoc/require-returns-check": "off",
    "jsdoc/require-returns-description": "warn",
    "jsdoc/require-returns": [
      "warn",
      {
        "checkGetters": false,
        "forceReturnsWithAsync": true
      }
    ],

    // Plugin: eslint-plugin-no-null
    "no-null/no-null": "error",

    // Plugin: eslint-plugin-unicorn
    "unicorn/prefer-node-protocol": "error"
  },
  overrides: [

    // Allow simplified default exports in configurations
    {
      files: [
        "karma.conf.ts",
        "rollup.config.ts",
        "webpack.config.ts"
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/no-default-export": "off"
      }
    }
  ]
}
