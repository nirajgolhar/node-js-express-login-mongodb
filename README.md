# Node.js Express Login and Registration with MongoDB and JWT

- Appropriate Flow for User Login and Registration with JWT and Cookies
- Node.js Express Architecture with CORS, Authentication & Authorization middlewares
- How to configure Express routes to work with JWT
- How to define Data Models and association for Authentication and Authorization
- upload image for admin only and show image for user only.
- file structure for model , middlewares and controllers 

## Project setup for running server
```
npm install
```

### Run
```
node server.js
```

## Postman collection link provided

- url: https://www.getpostman.com/collections/ba46ff0a32c6e43c0a0f
- multer package for image upload url: https://www.npmjs.com/package/multer



## Task to do (Achived => ✔ and Left because time decay => ❌):-
1. Create a API which Perform CRUD operation.
• signUp( fields:- display user name, password, qualification, city, phone
number) => ✔
• login(with authentication use jwt or auth0)(fileds:- username,
password)  => ✔
• home page (display user name, qualification, city, phone number) => ✔
• logout(token should be expire and if I try to call home api, it should not
access that api). => ✔
2. In above task add user as role :- example user can be guestuser or admin. 
And According to that display home record. => ✔
3. Based on user role, if it is admin then in home APi admin can upload image for
=> ✔
and if user is guest user then guest user can only saw those uploaded
images. => ❌
4. Separate Routes file should be there(mandotary). => ✔

Please visit the postman collection i have shared , I have added the possible request there and not created the UI. 


**Thank you!** 
