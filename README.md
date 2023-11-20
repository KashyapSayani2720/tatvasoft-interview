1) first go to tatvasoft-interview>
2) npm i 
3) npm run both
4) go to postman
    a) call api : http://localhost:5000/api/auth/register
    b) pass this as a body : 
    {
    "first_name" : "Kashyap",
    "last_name" : "Sayani",
    "email" : "kashyapsayani2720@gmail.com",
    "dob" : "02/07/2000",
    "city" : "Rajkot",
    "state" : "Gujarat",
    "password" : "Pass@1707",
    "role" : "1"
    },
    method : "POST"
5) now go to localhost:3000
6) Login and check the app