module.exports = {
  "*.+(js|ts|svelte)": [
    "eslint",
    () => "tsc -p tsconfig.json --noEmit",
    "jest --bail --findRelatedTests",
  ],
  "*.+(js|json|ts|svelte)": ["prettier --write"],
  "*.css": "stylelint",
};
