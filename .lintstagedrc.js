module.exports = {
  "*.+(js|ts|svelte)": [
    "eslint",
    () => "tsc -p tsconfig.json --noEmit",
    "jest --bail --findRelatedTests",
  ],
  "*.+(css|svelte)": "stylelint",
};
