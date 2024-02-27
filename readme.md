## Overview

## Technologies and Features 

## Getting Started - Local Development 
1. Clone repo `$ git clone `
2. Do the backend first - Switch the terminal to backend directory with `$ cd api` 
    1. Install requirements `$ pip3 install -r requirements.txt`
    2. We'll need to fill out the environment variables: 
        1. Clone the example environment file `$ cp -a example.env .env`
        2. Add a postgres URL for the `DB_CONNECTION_URL` variable. I used render and they easily provide an external url, the docs can be [found here](https://docs.render.com/databases#connect-to-your-database). 
        3. Add a secret value for the `SECRET` variable that we will use for the backend/frontend handshake. You can create a secure secret in the terminal with `$ openssl rand -base64 32`
    3. Run first migration to backfill database with `$ python3 scripts/init_db.py`
    3. Start Flask server`python3 -m flask --debug run`
    4. Server will be running on http://localhost:5000/
3. Next we'll do the frontend - Open a second terminal tab in the same directory and switch to the backend with `$ cd web-app`


## Deployment