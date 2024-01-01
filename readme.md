### NOTES MANAGER REST API

### API SETUP
1 Download files from git repo.
2 run command "npm install" to install all dependencies.
3 run command "node app.js" to start the api.

### TESTING API

#### IN THIS API THERE ARE FOLLOWING ROUTES. 

#####  /signup (POST REQUEST)
#####  /login  (POST REQUEST)

#### PROTECTED ROUTES

#####  /create (POST REQUEST)
#####  /notes  (GET REQUEST)
#####  /note/:id      (GET REQUEST)
#####  /delete/:id     (DELETE REQUEST)
#####  /update/:id     (PUT REQUEST)


#### INPUT FORMAT FOR /login and /signup

{
    "email":"",
    "password":""
}

#### NOTE:ON SUCCESSFULL LOGIN USER GETS ONE TOKEN IN RESPONSE WHICH SHOULD BE IN AUTHORIZATION HEADER TO ACCESS PROTECTED ROUTES.


#### INPUT FORMAT FOR /create

{
    "title":"",
    content:""
}


