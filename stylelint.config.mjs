/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  rules: {
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'selector-pseudo-element-colon-notation': 'single',
  },
};
