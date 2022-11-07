const cucumber = require('cypress-cucumber-preprocessor').default
export default (on, config) => {
  on('file:preprocessor', cucumber())
}