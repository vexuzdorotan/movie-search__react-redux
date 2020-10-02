## YTS.vex | Movies Search Web App

A movie searching app and save your favorites to your account!

- Implemented a full stack (MERN) web application for movies (or series, games, etc.) searching app that allows a user to sign in with Google, save favorites, and publish reaction essays.
- Utilized OMDb API, a RESTful web service to obtain movie information.
- Integrated the Google Sign-In API (OAuth 2.0) for user accounts login/authorization.
- Used json-server at first for fake REST API, then replaced to Node.js, Express, and MongoDB.
- Applied React-Redux designed to be a predictable container for managing application state.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm i`

To start client and server:

`npm start`

Adding Environment Variables:

Create `.env.development.local` file in /client directory:

Key  | Example Value
------------- | -------------
REACT_APP_KEY | 123456789876-asd123asd123asd123asd123asd12345.apps.googleusercontent.com

Also on /server/config, create `config.env`:

Key  | Example Value
------------- | -------------
PORT  | 5000
MONGO_URI_LOCAL | mongodb://127.0.0.1:27017/ytsvex
NODE_ENV | development
