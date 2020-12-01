# Minimal setup for a Web Node-React project

Includes a React client and an Express server ready for production deployment, as detailed [here](https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/)

## Usage

In the `package.json` and the `client/package.json`, change the `name` for your App's name.

Run the app:

```
# root directory
yarn dev
```

Open your browser and point it to `http://localhost:3000`.  
If everything is working correcty, you should be able to enter an input and see the API's response displayed.

## Client

Initially set up with create-react-app.  
Useless files (logos, default DOM elements) have been removed.  
A minimal functional component allows to:

- interact with the GET Express API route
- set the state to the API response
- send an input to the POST Express API route

The client is configured to use a proxy.  
This way, the web-pack development server will proxy requests to the API server, i.e. `localhost:5000`

## Server

The Express server runs on port 5000.

### Usage

```
# root directory
node server.js
```

### API routes

- GET - /api/hello
- POST - /api/world

## Production deployment to Heroku

Ensure you have a [heroku](https://www.heroku.com/) account and create a new app.

Install heroku:

```
curl https://cli-assets.heroku.com/install.sh | sh
# or check out the [doc](https://devcenter.heroku.com/articles/heroku-cli).
```

Deploy committed app:

```
git push heroku master
```

If your repo is already set up:

```
heroku git:remote -a red-tetris-em
```

#TODO  
[] use yarn import command to generate a yarn.lock file from package-lock.json
