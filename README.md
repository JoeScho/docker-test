# docker-test
[![Build Status](https://travis-ci.org/JoeScho/docker-test.png?branch=master)](https://travis-ci.org/JoeScho/docker-test)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/node-netcat/blob/master/LICENSE)  
A super simple dockerisation of a super simple service

### How to run
* [install docker](https://docs.docker.com/engine/installation/)
* `git clone <this repo>`
* `sh docker-test.sh`

This runs the bash script which uses Docker magic to install all the dependencies and run the tests. Simple!

### Test it!
* `npm t`
  * _Runs the tests_
* `npm run jshint`
  * _Tests the code quality_
* `npm run code-style`
  * _Checks the code style is in keeping with AirBnB's standards_
* `npm run check-coverage`
  * _Checks that the tests cover all of the code_
* `npm run open-coverage`
  * _Opens a browser with a well highlighted view of the code coverage_

This was created with the help of the official [NodeJS docker tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

__© Joe Schofield 2017__
