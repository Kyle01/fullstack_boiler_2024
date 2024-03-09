## Overview
My personal fullstack template for 2024. Constructed in May, 2024. 

## Technologies and Features 
* DB - Postgres hosted on [Render](https://render.com/)
* Backend - Python Flask API hosted on Render
* Frontend - NextJS with Typescript hosted on [Vercel](https://vercel.com/)
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
Deploying will take place in two parts. First, we will set up the database and deploy the backend using Render. Second, we will deploy the frontend using Vercel. 
#### Backend 
1. You'll need this repo in your own github account. You can either clone it or fork it to create your own repo in your own github account. Do this now. 
2. You'll need to bring your own PostgreSQL database with a url connection. If you don't have that already, consider the below steps to create this in Render: 
    1. Navigate to [Render](https://render.com/), make an account, and navigate to [your dashboard](https://dashboard.render.com/). Click the New button and select PostgreSQL.
    2. You'll be prompted to enter a name (doesn't matter, but if you're stuck on it, try `my-unqiue-database`). The other parameters are optional. 
    3. Once the database has been created, you'll see the internal URL. We'll need this later. 
3. We'll be creating the backend in render. Log into your account, navigate to [your dashboard](https://dashboard.render.com/), and click the New button. Select New Web service and point this to your newly cloned github repo. 
4. You'll be promoted for name and some other fields. Be sure to change root directory to `/api/` and select python 3 as your runtime. You'll also need to change the run command to be `$ gunicorn app:app`. 
5. There are 3 environment variables you'll need to provide. See the descriptions below: 
```
DB_CONNECTION_URL=**Postgres required connection url. If you're using Render, provide the Internal Database URL which you can find in the render database UI 
SECRET_HASH=**Your own secret hash. This will be used also in Vercel. 
DEPLOY_MODE=Prod. self explanatory 
```
6. Click 'Create Web Service' button at the bottom. 
7. Once it is deployed, you'll see your production url at the top. Try it our by navigating your browser to `<your-url>` and you should see a Hello World Message! 
#### Frontend
1. Next we'll do the frontend with Vercel. Navigate to [Vercel](https://vercel.com/), make an account, and navigate to [your dashboard](https://vercel.com/dashboard). 
2. Find the 'Add New Project' Button and select your associated github repo from the list. 
3. Select `Next.JS` for the Framework Present, and change the root direct to `/web-app/`
4. There are 3 environment variables you'll need to provide. See the descriptions below: 
```
SECRET=**Your own secret hash. This is the same hashed secret used in Render land. 
GOOGLE_CLIENT_ID=* I used Google as my Oauth Provider. See details below. 
GOOGLE_CLIENT_SECRET=** Another detail from Oauth. See details below. 
```
I used Google as my OAuth provider. [Next Auth](https://next-auth.js.org/providers/) has a ton of providers, I used Google. You should follow the documentation on [NextAuth](https://next-auth.js.org/providers/google) if you decide to go down this route. But you'll be unable to complete this step until you've actually launched your site and have a hosted URL. 

5. Click Deploy and visit your site on the provided URL. You should see the basic elements and a Log in button.
6. Provide the host URL and other details to your OAuth provider. Go back to vercel and add the client_id and client_secret from Google to your environment variables. 
7. Test login, query the backend, and you're ready to go! 