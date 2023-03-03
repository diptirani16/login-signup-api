# Authentication API
 This website is build using NodeJs and ExpressJs.

## Mongo Database
`$ docker-compose up`

This command pulls up the mongo image and starts the database server.

## Installation
`$ npm install`

## Local Development
`$ npm start`

This command starts a local development server on localhost port number 5000. Most changes are reflected live without having to restart the server.

## Build
`$ npm build`

This command generates static content into the build directory and can be served using any static contents hosting service.

## Live URL

https://authentication-api-9075.onrender.com

## APIs

### Signup: 
https://authentication-api-9075.onrender.com/signup

This API takes email and password from user and adds the record to database.

### Login: 
https://authentication-api-9075.onrender.com/login

This route takes email and password from user, then verify it from the database and returns token if the credentials are correct.