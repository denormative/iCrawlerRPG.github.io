// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['eslint:recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'brace-style': [ 2, "stroustrup", { "allowSingleLine": true } ],
    'operator-linebreak': [ 2, "after" ],
    'semi': ["error", "never"],
    'import/no-unresolved':  ["off"], // TODO: fixme
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'no-use-before-define': ["error", { "functions": false }],
    'max-len': ["warn", 132, 2, { "ignoreComments": true }],
    'func-names': ["error", "as-needed"],
    'no-param-reassign': ["error", { "props": false }],
    'no-console': ["off", { allow: ["info", "warn", "error"] }],
    'no-continue': "off",
    'quotes': ["off", "double", { "allowTemplateLiterals": true }],
    'no-multi-spaces': ["error", { exceptions: { "ObjectExpression": true } }],
    // 'key-spacing': ["error", { align: "value" }]
  }
}
