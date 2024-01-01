### NOTES MANAGER REST API

## TESTING API

### IN THIS API THERE ARE FOLLOWING ROUTES. 

####  /signup (POST REQUEST)
####  /login  (POST REQUEST)

## PROTECTED ROUTES

####  /create (post request)
####  /notes  (get request)
####  /note/:id      (get request)
####  /delete/:id     (delete request)
####  /update/:id     (delete request)


#### INPUT FORMAT FOR /login and /signup

{
    "email":"",
    "password":""
}


### NOTE: On successfull login user gets one token in response which should be included in authorization header to access protected routes


### INPUT FORMAT FOR /create

{
    "title":"",
    content:""
}


