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

DO this inside src
command  : npx sequelize init 
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



FOr creating a DB connection in this Project : 

1. command inside src : npx sequelize init
2. Config.json is created inside the config folder. Make changes to Dev environment variables inside this file.
3. Use your own DB username and password and then use Database name.
4. Come back to terminal execute npx sequelize db:create
5. This creates a DB names the actual DB name in jSon file.


Creating a model in Sequelize

npx sequelize model:generate --name Name of the table --attributes modelNo:string,capacity:integer

THis command creates a file in the models folder with the name of the table.js and then we have our sequelize code inside it.

Now only migration file is created. The changes are not actually done in the DB. We just have the JS code ready for making the change in DB level.

Use command : npm sequelize db:migrate

Isse ab wo table create hoga inside DB. Isse pehle sirf JS file he create hua tha. Ab isse table banega Airplanes and aur ek table banega sequelizemeta.

Airplane : Yeh apna table tha jo models ke andar airplanes.js se create hua
sequelizemeta : yeh table is used for versioning of migrations. Ab isme ek entry hoga jo contain karega is current migration ka filename.


100 BAAT KI EK BAAT : KOI BHI ALTERATION KARNA HAI DB ME TOH MIGRATIONS USE KARENGE. TOH TRACK REHTA HAI ABOUT WHAT CHANGE WENT IT. EMPTY MIGRATION FILE BANAO USING NPX SEQUELIZE MIGRATION:CREATE --NAME TABLENAME
AND USKO EDIT KARO TO MAKE MY OWN CHANGES. THEN USE NPX SEQUELIZE DB:MIGRATE TO MAKE THOSE CHANGES ON TO THE TABLE.