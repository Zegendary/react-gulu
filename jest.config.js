module.exports = {
  // OTHER PORTIONS AS MENTIONED BEFORE
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  // Setup Enzyme
  "setupTestFrameworkScriptFile": "<rootDir>/setupTests.ts",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
}