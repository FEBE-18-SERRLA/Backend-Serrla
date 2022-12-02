# Serrla Web Sevices

## Tech Stack

- Javascript
- NodeJS
- ExpressJs
- MySQL
- Sequelize
- JSON Web Token

## Features

- Registrasi akun
- Login
- Mengakses modul pembelajaran
- Quiz
- Melihat event seni
- Menambahkan event ke favorit
- Melihat daftar favorit event
- Mengedit data profil
- Mengubah password
- Membagikan hasil karya seni melalui menu portofolio
- Memposting artikel
- Memberikan like artikel
- Mengomentari artikel
- Logout

## Requirement

For running this project please install nodejs and mysql.

## Getting Started to the development

- Clone the repository:

```
git clone https://github.com/FEBE-18-SERRLA/Backend-Serrla.git
```

- Switch to the repo folder:

```
cd Backend-Serrla
```

- Install all the dependencies using npm or you can using yarn:

```
npm install or yarn install
```

- Set configuration database like on your environment system,to the config file on mode development in file config/config.json :

```
"development": {
    "username": "root",
    "password": "",
    "database": "remedial",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

- Run the server:

```
npm run start
```

- Migrate all Sequelize:

```
npx sequelize db:migrate
```

You can now access the server at http://localhost:3200
