Cricbuzz APIs

Description
This is a backend project built with Node.js and Express.js. It uses a MySQL database with Sequelize ORM for data management. The project also incorporates bcrypt for hashing passwords and jsonwebtoken for handling authentication.

Features:
User authentication and authorization
Secure password hashing
Relational database management with MySQL
ORM with Sequelize
Technologies Used
Node.js
Express.js
MySQL
Sequelize ORM
bcrypt
jsonwebtoken


Prerequisites
Node.js and npm installed
MySQL database setup

API endpoints:

1) http://localhost:3000/api/admin/signup -->post, register admin
2) http://localhost:3000/api/admin/login  --->post, checking Authentication
3) http://localhost:3000/api/matches      --->get, get all match details
4) http://localhost:3000/api/matches/:id   ---> get, matches details by id
5) http://localhost:3000/api/matches/     ---->post, create a match
6) http://localhost:3000/api/players/:id  ----> get , player details by id





