# SpaceX Program Launches

A front-end application (with server side rendering) which would help users list and browse all launches by SpaceX program.

## Approach used
- Used CRA to get the basic client side code structure, then added server (express) side rendering to it.
- In the server index file, rendering the APP component with the initial data as props and setting that to window object as well.
- Used the same index.html file available in CRA and did some replacements to plug the server side rendered stuff.
- On front end, used Context API to hold the state as this is a small app and does not require redux.
- Used simple css (not sass) to keep it simple
- Added a few test cases using jest

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs all the required dependencies.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm run lint`

You will see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` (client side) and `server-build` (server side) folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## CI
For CI, used github workflow that runs test cases on every push to master branch.

## Deployment

The app has a Procfile that is required by heroku to deploy the server.

## Performance Snapshots
![image](https://user-images.githubusercontent.com/19401452/109651802-fae2d000-7b84-11eb-91d8-80ed6731b348.png)

