# installing package:
- npx eslint --init
- npm i nodemon --save-dev
- npm i sucrase --save-dev
- npm i express
- npm i dotenv
- npm i sequelize
- npm i mariadb
- npm i sequelize-cli --save-dev
- npm i bcryptjs
- npm i jsonwebtoken
- npm i multer (file upload)

# sequelize commands:
- "npx sequelize migration:create --name=NAME" to create an migration
- "npx sequelize db:migrate" to send migration
- "npx sequelize seed:generate --name NAME" to create seeds
- "npx sequelize db:seed:all" to send seeds