module.exports = {
  extends: [require.resolve('./index')],
  globals: {
    window: true,
    page: true,
    ZL_PROFILES: true,
    SHOW_SETTING: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    camelcase: 0,
  },
};
