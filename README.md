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