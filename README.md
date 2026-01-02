# NodeJsBackendWeb
My Node js project for the subject Backend Web. 


This project consists of an API, which will be used to connect to a database. For this database, I shall borrow the sqlite database I used for my Laravel project.

### Installation:

First you need to make sure that the following packages are installed:

npm, 
git

Then, insert the following commands inside the terminal:

~~~
git clone https://github.com/StevenDeloof07/NodeJsBackendWeb
cd NodeJsBackendWeb
npm install 
~~~

then, change directoy to the database directory, and run 

~~~
cp database.example.sqlite database.sqlite
~~~

Or on windows:
~~~
copy database.example.sqlite database.sqlite
~~~

Finally, the API can be activated with 

~~~
npm run server
~~~

### Sources

#### Database

For connecting to database:

https://nodejs.org/api/sqlite.html

#### index.js
Send html file via node.js
https://stackoverflow.com/questions/20345936/nodejs-send-html-file-to-client


#### Sqlite code (connection.js)
https://betterstack.com/community/guides/scaling-nodejs/nodejs-sqlite/

#### userRoutes
https://betterstack.com/community/guides/scaling-nodejs/express-validator-nodejs/
https://www.geeksforgeeks.org/web-tech/controllers-in-expressjs/

https://gemini.google.com/share/f2bf73b00975
https://express-validator.github.io/docs/api/validation-chain/

Add details link for user:

https://gemini.google.com/share/0ec02fc75791


#### UserController

https://www.freecodecamp.org/news/check-if-an-object-is-empty-in-javascript/
https://gemini.google.com/share/bc30d58699b2 