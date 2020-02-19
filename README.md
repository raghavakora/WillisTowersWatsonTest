## JavaScript Automation Test 
### Introduction
This test has developed by using Node & Cypress
language : Javascript
And also this Test has written in a simplest manner to make it readable to everyone

### Test will execute following steps 
1.	Open the following URL: http://www.willistowerswatson.com/ICT 
2.	Change the language and region from top left corner to United States English, see example snippet. 
 
3.	Search for the word “IFRS 17” using the search box
4.	Validate if you have arrived on the result page
5.	Check if the result is sorted by “Date”. If not, sort by “Date”
6.	Use the “Filter by” functionality and set Content Type to “Article”
7.	Validate that each article in the list displays a link that starts with “https://www.willistowerswatson.com/en-US/”


### Environment

- `nodejs v10.16` [node](https://nodejs.org/en/)
- `npm v6.9`

### Getting started
After cloning the project unzip the file and then run following commands and then navigate to project directory in the terminal

### Test Location
Project: WillisTowerWatsonTest=>cypress=>integration=>bdd

### Setup/Pre-requisite
```shell
$ npm install
```
## Commands

To run the tests
```shell
$ npm run test
```
Note:
this command will run all the tests in headless mode and once tests are finished running it will display all the results 
of Test status

 
### Running the tests to view in headed mode:
Run this Command so that you can able to view the test 
```shell
$ npm run open
```
This will open a cypress editor where we got an option to choose the browser & test ...
where we can either select all tests to run or select a specific test to run (only one test is available in this project) 

#### Before running the Test 
set the browser : electron(v61)

Note: In the current test there is an issue to run the test in *chrome* after performing the search 
and this is happening due to search behavior where url will update couple of times with 2 post requests

Request 1 : adding params of search string ```https://www.willistowerswatson.com/en-US/Search#q=IFRS%2017&firstQueryCause=searchFromLink&firstQueryMeta=%5Bobject%20Object%5D```
Request 2 : updated params due to default sort of relevance and this lead to one more request
```https://www.willistowerswatson.com/en-US/Search#q=IFRS%2017&sort=relevancy```
and the behavior is different when we are performing the search on the search results page where we dont see mutiple requests

As this behavior is not getting handled in chrome browser it keeps getting crashed when it detects new urls
and this issue is already reported which is not resolved yet properly due to issue with reproduction steps 
```https://github.com/cypress-io/cypress/issues/2899```
and above issue can be reported here... 

### Editor 
In order to view the files there will be multiple options or eidtors of your preference like vscode,atom,sublime ...

## Improvements can be done 
By adding linter
creating generic functions and using them in tests
creating separate files to locators in order to access in multiple tests and avoid duplication 
