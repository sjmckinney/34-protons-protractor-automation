import Parser from 'protractor-flake/lib/parsers/parser'
const context = String.raw `\[object Object\]|Object|Context|UserContext|Suite`;
const source = String.raw `<anonymous>|it|beforeEach|afterEach|before|after`;
const filepath = String.raw `(([A-Za-z]:\\)?.*?):.*`;
const regexString = String.raw `at (?:${context})\.(?:${source}) \(${filepath}\)`;

const MyParser: Parser = {
  name: 'my_parser',
  parse: function(output) {
      let failedSpecs = new Set();
      let match = null;
      let FAILED_LINES = new RegExp(regexString, 'g');
      //console.info(`BEGIN OUTPUT: ${output} END OUTPUT`);
      while (match = FAILED_LINES.exec(output)) { // eslint-disable-line no-cond-assign
          // windows output includes stack traces from
          // webdriver so we filter those out here
          if (!/node_modules/.test(match[1])) {
              failedSpecs.add(match[1].replace('e2e', 'dist').replace('spec.ts', 'spec.js'));
          }
      }
      return [...failedSpecs];
    }
}

exports = MyParser;