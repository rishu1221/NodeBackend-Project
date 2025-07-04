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


Things to Understand about repository :

1. Repository me sirf QUery ka code hoga. Model will communicate to repository. Model object is used to pass in the repositroy.

2. Simple rule : Models sirf repository se communicate karta hai. Model humko table object deta hai and then repository me humlog function banate hai that internally calls sequelize method to some operation on the table. 

3. Repository import hoga service me . Jaha humlog actual operation karenge DB me.


_______________________________________________________________________________________________________
1. Request aya controller ke pass -> Service. Services use repositories to interact with the DB.


Final FLow :  Request → Routes → Controller → Service → Repository → Model → DB


____________________________________________________________________________________________________
1. Yeh sequeluize me models ka scene thoda different hai. Generally mongoose me model banao aur uska object banake use karo. But idhar model banega and then repository ka index.js usko acutal sequelize object me convert karke export karega toh model hamesha index.js se he import hoga ni toh constructor error dega.


_______________________________________________________________________________________________________
1. Error handling Part :

- Jab bhi parameters missing ho API me toh usko alag se handle karna hota hai. Usko middleware se handle kar lenge. THis is badRequest (400 error code).

- Hamesha raw json response me bhejne se acha hai ki ek standard object bana le. Ek error ke liye banega and ek SuccessObject banega. Dono utils ke andar common folder me rakhenge. But agar custom Error object bhejna hai toh kya karenge.

- Uska solution hai ki humlog hamesha utils ke andar ek error folder banyenge . Ek class jo error ko extend karega usme initialiation karke usko throw karenge. This is important part.

- Har layer me apne ko error handling karna apdega. Start from Repository to Service and then COntroller layer.


_________________________________________________________
Another Important thing : 

[ Postman Request (HTTP POST /airplanes) ]
                ↓
[ Express Route Handler (routes/airplaneRoutes.js) ]
                ↓
[ Controller (e.g., airplaneController.js) ]
                ↓
[ Service Layer (optional, handles business logic) ]
                ↓
[ Sequelize Model Method (Airplane.create(data)) ]
                ↓
[ Sequelize Validates Input Based on Model Definition ]
    └── If validation fails → throws SequelizeValidationError
    └── If validation passes → generates SQL INSERT
                ↓
[ DB Query Executed (INSERT INTO airplanes...) ]
                ↓
[ DB responds with success or failure (e.g., PK error) ]
                ↓
[ Response sent back to Postman ]

Models ka jo bhi defenition hai that is used and validated before sequelize make a call to DB. Models is JS code and something that is there in our end not on DB. Migations use karte toh DB me wo validation lag jata (DB level par) and agar models me updated ni bhi hai toh bhi call hone ke baad DB error deta.

2 scenario : 
a . Model me validation hai but migartion ke thorugh DB pe ni. TOh DB call se pehle he error milta.

b. Model me validation ni hai but migartion ke throguh DB level pe hai . TOh DB se error milta.

_______________________________________________________________
1. In international Project we never use raw strings. We have a strings folder we use key value pair and then use them. Sometimes we use transalation service to convert the message according to the user's language.


Seeders in Sequelize
Inside SRC folder of your project
command :  npx sequelize seed:generate --name add-ariplanes

command for running my seeder file : npx sequelize db:seed:all
command for reverting my seed file : npx sequelize db:seed:undo:all

This creates your seeder file in the seeders folder with name add-ariplanes.

Seeders are basically used for populating bulk values into our models.




ABhi tak humlog sirf practices he sikh rahe the and sequelize stuff.
___________________________________________________________________________________________________
Other important sytem designs : Notification Systems,News feed for twitter , 


Now Actual Project Starts : 

Flight Booking System Backend :

Description : 

Monolith bhi rakh sakte the but ab dekho Flight booking system is Read heavy . WHy so ? 

Kyuki Har user spends more time in choosing the flight. But booking flow toh confirm hone ke baad he hoga that is write. Toh most of the time users will query a lot of things. But booking will be less.

Agar sab kuch monolith me store karte hai toh problem aayega ki quering ko scale up karne ke liye booking bhi scale up hoga. So isiliye we need more scale for FLight Search Rather than Flight booking.

Imagine 2 service hai Flight Search and Then FLight booking. Booking only needs to scale up when we have a sale at our site or any reason for increase in People moving from One place to another.

But searching me hamehsa he load rahega.

Toh lets choose microserivce for individual scaling of services.

Non-Functional Requirements :

1. Application expects more flight searches than flight bookings (Read heavy)
2. Application expects 100000 bookings in 1 quarter.
3. Application will be make sure that the seat booked by 1 person shouldnt be booked by another person(Handling concurrency bugs).
4. We dont change the price of flight once user has initiated payements.
5. Application should be able to autoscale itself 3x the usual traffic.
6. We should persist the data of any user for more than 10 years.(More of a compliance related thing).

System Design Diagram : 

Load Balancer  : Just balances out our load across different replicas for scaling. Isme ek aur load balancer stand by pe rakh sakte hai toh avoid single point of failure.

API Gateway : Helps to protect address of other services on which our services are hosted. (Using reverse proxy). 
              API gateway bhi service jaise he hai Bas uska code humlog usually alag likhte hai.It contains following things :
              1. Authentication Logic(Jo bhi request aaya hai does it have access to our services or not.)
              2. Reverse Proxy (NGINX) (For security purposes) (Acts like services but it is not).
              3. Logic for Rate limiter.
              
![alt text](image.png)


Low Level Design :

Isme basically yeh decide karte hai ki bhai kya structure hoga code ka. Agar apne ko kya class banana hai toh usme kya kya fields hoga. Har project me ek entity hota hai . Lets say Flights booking ka backend hai toh isme Flights class banaoge jisme flights ka characteristics hoga jaise capacity,model-number aur bhi kuch kuch parameters. Ab iska booking hoga toh bookings class banega jo ki bookings ke bare me batayega jaise from,to,date,people yeh sab.

ClassNames : 

1. Flights - WHich flight is schedule from where to where
2. Airplanes - Which airplanes are there and what are their capacity of passengers
3. City - Contains city codes for each City
4. Airports - Contains airport codes and the city they belong to
5. Bookings - Contains booking information for all the users



Again coding things :

1. Agar delete karte waqt sql 0 return kare that means data wasn't present.





