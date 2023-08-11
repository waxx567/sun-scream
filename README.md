# Requirements ,Usage and Installation

## Backend - Flask

### Installation

### 1 .Clone the git repo and create an environment

Depending on your operating system,make a virtual environment to avoid messing with your machine's primary dependencies

**Windows**

```bash
git clone https://github.com/Dev-Elie/Connecting-React-Frontend-to-a-Flask-Backend.git
cd Connecting-React-Frontend-to-a-Flask-Backend/backend
py -3 -m venv venv
```

**macOS/Linux**

```bash
git clone https://github.com/Dev-Elie/Connecting-React-Frontend-to-a-Flask-Backend.git
cd Connecting-React-Frontend-to-a-Flask-Backend/backend
python3 -m venv venv
```

### 2 .Activate the environment

**Windows**

`venv\Scripts\activate`

**macOS/Linux**

`. venv/bin/activate`
or
`source venv/bin/activate`

### 3 .Install the requirements

Applies for windows/macOS/Linux

`pip install -r requirements.txt`

### 4 .Migrate/Create a database - Optional during initial set up

Applies for windows/macOS/Linux

`python manage.py`

### 5. Run the application

**For linux and macOS**
Make the run file executable by running the code

`chmod 777 run`

Then start the application by executing the run file

`./run`

**On windows**

```
set FLASK_APP=routes
flask run
```

OR
`python routes.py`

## Frontend - React

### Installation

You just need to install the packages listed on package.json, on the frontend folder.

```
cd Connecting-React-Frontend-to-a-Flask-Backend/frontend
npm install
```

`npm start`

## Updating pip packages

In an active virtual environment install updates using the command:

`pip list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U`

Update the reqirements.txt file.

`pip freeze > requirements.txt`

![](https://github.com/Dev-Elie/Connecting-React-Frontend-to-a-Flask-Backend/blob/main/flask%2Breact.png)

<div align="center"><h1>Follow me on Twitter</h1></div>
<p align="center"> <a href="https://twitter.com/dev_elie" target="blank"><img src="https://img.shields.io/twitter/follow/dev_elie?logo=twitter&style=for-the-badge" alt="dev_elie" /></a> </p>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
