module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-constructed-context-values': 'warn',
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'multiline-ternary': 0
  }
}
