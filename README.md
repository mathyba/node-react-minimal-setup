# Minimal setup for a Web Node-React project

Includes a React client and an Express server.

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

## Configuration

#TODO  
[] use yarn import command to generate a yarn.lock file from package-lock.json
