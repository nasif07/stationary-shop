# Stationary Shop - MERN Stack Application

This is a simple MERN stack application for a stationary shop. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.

Tech Stack we used: 
- Express & Mongoose for backend
- React & Redux for frontend
- MongoDB for database


## Project Repo folder structure

```bash
/client
  /public
  /src
    /main.tsx
    /App.tsx
    /layout
    /components
    /redux
    /hooks
    /utils
    /pages
    /assets
    ...

/server
  /src
    /server.ts
    /app.ts
    /app
      /config
      /modules
        /auth
        /product
        /order
        /user
    /middleware
    /utils
    ...
  /package.json

```

## Getting Started
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies for both client and server (Make sure to `cd` into client and server seperately)
4. Setup environment variables for both client and server
6. Make sure: 
    - all the environment variables are set up correctly
    - MongoDB is running
    - all dependencies are installed
    - the backend server is running on the correct port
    - the frontend server is running on the correct port
    - the backend server is running before the frontend server

5. Start the server and client (All other commands are in the package.json files of client and server)

```bash
# In the server folder
npm install
npm run start:dev # development mode 
npm run build
npm run start:prod # production mode 

# In the client folder
npm install
npm run dev # development mode
npm run build
npm run preview # production mode preview
```


## .env setup
environment variables example are provided in the `env.example` in each of the client and server folders. copy them to your `.env` file and fill in the values.


## Project Demonstration

[Stationary Shop Video Demonstration](https://youtu.be/4TbW9eRgEbk)


