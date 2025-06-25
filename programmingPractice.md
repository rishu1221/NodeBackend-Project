Few things about Making production Level Applications :

1. Error jitna close to the source handle ho jaye utna better.

Agar error client side se hai toh controller ya phir middleware me handle hona chahiye.
Agar error DB level ya service layer me hai toh Service layer me handle hona chahiye.

This is actually important because this tells how much GOOD CODE you have written.

2. Kabhi bhi routes ka name shoulnt tell what we are doing in that route jaise 
    http:localhost:2201/api/v1/airplane/createAirplane - THis is wrong. This tells ki in this route we create things

    actual way : http:localhost:2201/api/v1/airplane now user doesnt know this route is used for what??.TOh this is what we want.But developer sees ki bhai get request hai and getAirplane method call hai code me so he knows what this route does.

    same way : http:localhost:2201/api/v1/airplane/id this wont tell ki we are fetching details or deleting details. If it is delete type request it deletes things but if it is get type request it gets details for us.