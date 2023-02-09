# CTM 2.0 Dashboard

**CTM 2.0 Dashboard Position Summary**

This application is based on [Material Dashboard 2 React](https://www.creative-tim.com/learning-lab/react/overview/material-dashboard/) and is hosted on [Firebase](https://firebase.google.com/docs).

## Project Structure

`/*firebase*` configuration files provide build and host information. Please DO NOT commit any secrets to the project.

`/ctm-dashboard` contains the main React application. Visit the Material Dashboard 2 React website for more documentation.

`/public` contains an initial static implementation of dashboard with firebase hook.

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

```
npm install
```

We use npm scripts with [Webpack][] as our build system.

Run the following command to create a development experience where your browser auto-refreshes when files change on your hard drive.

```
npm start
```

## Building for Production

To build the final distribution and optimize the bundle for production, run:

```
npm run build
```

This will concatenate and minify the client CSS and JavaScript files and copy the output in `ctm-dashboard/build`.

## Deploying to Production

To deploy, you will need to login to Firebase using the command line:

```
firebase login
```

Smoke test on your local machine:

```
firebase serve
```

Deploy the hosting:

```
firebase deploy --only hosting
```
