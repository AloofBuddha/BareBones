# BareBones

## Intro

**BareBones** is a prototype of a super-basic boilerplate for the GraceShopper project of Senior Phase. My goal is to create something that is complete in that it sets up all essential components, but is unopinionated, is open for further configuration, and is ideally simple to read and walkthrough.

## Project Values

1. Simplicity
2. Minimal-Complete Project Structure
3. Unopinionated
4. Explicitness before Cleverness
5. Prioritize Essentials before Whistles

## Walkthrough

This will be a basic overview of the steps I am taking. Try and not be too pedantic Ben!

1. Git Setup
  - [x] `git init`
  - [x] add README.md
  - [x] `git commit -m "first commit"`
  - [x] create remote Github repo
  - [x] `git remote add origin <my-remote-github-url>`
  - [x] `git push -u origin master`

2. NPM setup + dependencies
  - [x] `npm init`
  - [x] added nodemon to devDependencies (`yarn add --dev nodemon`)
  - [x] create 'hello world' logging main script (index.js)
  - [x] create start script in `package.json`
  - [x] add mocha and chai (`yarn add --dev mocha chai`)
  - [x] create test script in `package.json`
  - [x] create basic test (index.spec.js)
  - [x] add node-modules to .gitignore

3. create express backend to serve a basic HTML page + API
  - [x] added express to dependencies (`yarn add express`)
  - [x] create a server that serves a basic html page
  - [x] add logging middleware (+ morgan dependency)
  - [x] add body-parsing middleware
  - [x] add static-middleware and public folder
  - [x] add fav-icon, serve fav-icon
  - [x] add basic api
  - [x] add supertest to devDependencies