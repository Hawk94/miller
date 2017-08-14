This app is a showcase of my development skill set, additionally I use it as a playground
to test new/interesting components/design ideas.

## Table of Contents

- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn run build](#yarn-run-build)
  - [yarn run eject](#yarn-run-eject)
- [Deployment](#deployment)
  - [S3 and CloudFront](#s3-and-cloudfront)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Deployment

`yarn run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### S3 and CloudFront

See this [blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) on how to deploy your React app to Amazon Web Services [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/).