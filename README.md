# NodeBackend-Project
This Repo has a backend project on Node which is in progess.


Points to Learn about project structure
________________________________________________________
1. Har folder me ek index hoga ...Index ke andar sara controllers rakhenge. SO that import kahi bhi karo single statement se kaam ho jayega.


2. Some Routes are API driven and some are general routes when lets say we want to do Home Page.
   Current way : /type-of-route/version-of-route/route-name

3. App.use helps to mount router as well as middlewares.Ek akela router bana sakta hua mai for account and call it is accountRouter.
    AccountRouter has 3 routes / , /details ,/balance.

    But agar isko mount karna hai toh account route then import this in main file and then app.use('/account',accountRouter);
    Ab jitna bhi accout se route shuru hoga wo accountRouter se check karega. account/ , account/details/ , account/balance ab yeh 3 route defined hai apna accountRouter me. Helps in segreggation.

4. Winston Logger : Helps to log things. Read documentation (Usually used in small cases) 
    When we have a larger project we go for a logger service like DataDog.

5. ORM vs ODM . ORM is for SQL and ODM is for Document Type DB. ORM is just code that tells what SQL needs to do . Everything is a function that executes SQL code in the backend. Basically a Wrapper.

6. Sequelize me directly go inside the src folder of your project and then do npx sequelize init . Uske baad apne aap kuch migrations, config.json and seeders and models folder banega. Models ke andar sara code rahega toh make connection and Config.json me sara code rahega toh support that code.ALso install a driver for your sequelize.  


Setup for Sequlize

{
  "development": {
    "username": "root",
    "password": "password in string",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

THe above content needs to be setup in your local config folder for the dev environment.
THis is just the configuration for all the environments that our DB will have.

7. Migration folder - This is simple JS files that contain versions of our DB. THat contains older configurations for our DB particular version.THis file also contains our DB schema changes. If we run each file step by step it will lead to current DB schema and configuration.Like linked list.

8. Seeders  Folder - Started data for your table row.
