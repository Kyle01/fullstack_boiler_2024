## Overview
My personal fullstack template for 2024. 

## Technologies and Features 
* DB - Postgres hosted on Render
* Backend - Python Flask API hosted on Render
* Frontend - NextJS with Typescript hosted on Vercel
* CSS Framework - Tailwind
* Middleware - NextJS 
* Auth - NextAuth with Google Provider 

## Getting Started - Local Development 
1. Clone repo `$ git clone `
2. Do the backend first - Switch the terminal to backend directory with `$ cd api` 
    1. Install requirements `$ pip3 install -r requirements.txt`
    2. Fill out the environment variables: 
        1. Clone the example environment file `$ cp -a example.env .env`
        2. Add a postgres URL for the `DB_CONNECTION_URL` variable. I used render and they easily provide an external url, the docs can be [found here](https://docs.render.com/databases#connect-to-your-database). 
        3. Add a secret value for the `SECRET` variable that we will use for the backend/frontend handshake. You can create a secure secret in the terminal with `$ openssl rand -base64 32`
    3. Run first migration to backfill database with `$ python3 scripts/init_db.py`
    3. Start Flask server`python3 -m flask --debug run`
    4. Server will be running on http://localhost:5000/
3. Next we'll do the frontend - Open a second terminal tab in the same directory and switch to the backend with `$ cd web-app`
    1. Fill out the environment variables: 
        1. Clone the example environment file `$ cp -a example.env .env`
        2. For the `SECRET` variable, use the same secret from the .env file in the `/api/` directory
        3. We'll need to supply a auth provider using NextAuth. I used Google. Documentation can be [found here](https://next-auth.js.org/providers/google) on how to set that up.
    1. We need install all libraries using `$ npm i` 
    2. Run `$ pnpm dev `to start development server 
    3. Server will be running on http://localhost:3000/

## Deployment
...