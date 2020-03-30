/* module.exports = {
  "extends": "standard"
}; */
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "parserOptions": {
    "sourceType": "module",
}
};