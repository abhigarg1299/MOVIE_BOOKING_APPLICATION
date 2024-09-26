## API's

Application Programming Interface

## Express

Simple and Cleaner Syntax
Reusabilty
code readability
Middlewares: used for Authorisation
Routes: StraightForward Way for Creating Routes and enables different HTTP Routes like post get put patch.

PUT---> Complete replace of the resource
PATCH---> Specific Update/ pinpoint update

## Setting up an express application

Step 1. Create a file index.js
Step 2. npm init -y
step 3. npm install express --save
step 4. sudo npm i nodemon -g (it will install nodemon at global level)

## status code:

100-199--> information code
200-299--> successfull response
300-399--> redirection response
400-499--> client error response
500-599--> server error response

## middlewares

app.use(Express.json()) It is a middleware for the post request to read json data.
app.use(middlewared) it is run by all request.

## Difference between Sql and NoSql

SQL:
Relational Database
Structured DATA
Data Intigrity
Transaction are Secure
ACID(Atomicity, Consistency, Isolation,Durability)
row-columns
NoSQL:
Non Relational DB
No Structured
Scalability and Flexibility
Schema on read Options
Document key-value

## Mongoose

npm install Mongoose
mongoose.connect is a function that contains DB URL.
