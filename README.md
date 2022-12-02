# Serrla Web Sevices

## Overview

Serrum Learning App (Serrla) adalah aplikasi untuk membantu dalam mengakomodir ketertarikan, minat, bakat dan potensi masing-masing siswa agar dapat mengartikulasikannya ke dalam medium seni melalui sebuah inovasi digital.

## ERD

https://lucid.app/lucidchart/ad1495cd-a071-4dd7-8cc9-2991e231afa9/edit?invitationId=inv_13897c95-148e-4141-83de-bac86ba13920&page=0_0#

## Teknologi yang Digunakan

- Javascript
- NodeJS
- ExpressJs
- MySQL
- Sequelize
- JSON Web Token

## Fitur

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
