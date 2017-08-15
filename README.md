# docker-test
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
