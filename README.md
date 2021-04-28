<h3 align="center">Express Rest API Starter</h3>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## 🧐 About <a name = "about"></a>

Nodejs REST API Starter built using Express, Sequelize, JsonWebToken & Swagger

##### Demo API Documentation

<p align="center">
 <img src="https://i.ibb.co/Mnfsnjc/image.png" alt="Demo">
</p>

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

Install:

- [NodeJs](https://nodejs.org/en/)
- [MySQL](https://mysql.com)

```
npm i -g sequelize-cli
```

### Installing

1. Install dependencies

```
npm install
```

2. Copy & modify environment variables from .env.example to .env

```
cp .env.example .env
```

3. Migrate database

```
sequelize db:migrate
```

4. Seed to database

```
sequelize db:seed:all
```

## 🔧 Running the app <a name = "run"></a>

run:

```
npm start
```

or run on development mode:

```
npm run dev
```

## 🎈 Usage <a name="usage"></a>

Read API Documentation on browser:
`http://localhost:5000/docs`

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Sequelize](https://sequelize.org) - Database ORM
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Swagger](https://swagger.io/) - API Documentation
