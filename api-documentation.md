# API Documentation

## Authentication

All API must use this authentication

Request :

- Header :
  - X-Api-Key : "your secret api key"

## Login

Request :

- Method : POST
- Endpoint : `api/auth/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "email": "string, unique",
  "password": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "token": "number"
}
```

---

# User

## Create User

Request :

- Method : POST
- Endpoint : `api/users`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string, unique",
  "password": "string",
  "telp": "long, unique",
  "birthdate": "date",
  "picture": "string",
  "school_id": "int",
  "role_id": "int"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "int, unique",
    "first_name": "string",
    "last_name": "string",
    "email": "string, unique",
    "password": "string",
    "telp": "long, unique",
    "birthdate": "date",
    "picture": "string",
    "school_id": "int",
    "role_id": "int",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get user

Request :

- Method : GET
- Endpoint : `/api/users/{user_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "int, unique",
    "first_name": "string",
    "last_name": "string",
    "email": "string, unique",
    "password": "string",
    "telp": "long, unique",
    "birthdate": "date",
    "picture": "string",
    "school_id": "int",
    "role_id": "int",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update user

Request :

- Method : PUT
- Endpoint : `/api/users/{user_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string, unique",
  "password": "string",
  "telp": "long, unique",
  "birthdate": "date",
  "picture": "string",
  "school_id": "int",
  "role_id": "int"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "first_name": "string",
    "last_name": "string",
    "email": "string, unique",
    "password": "string",
    "telp": "long, unique",
    "birthdate": "date",
    "picture": "string",
    "school_id": "int",
    "role_id": "int",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List User

Request :

- Method : GET
- Endpoint : `/api/users`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "first_name": "string",
      "last_name": "string",
      "email": "string, unique",
      "password": "string",
      "telp": "long, unique",
      "birthdate": "date",
      "picture": "string",
      "school_id": "int",
      "role_id": "int",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "first_name": "string",
      "last_name": "string",
      "email": "string, unique",
      "password": "string",
      "telp": "long, unique",
      "birthdate": "date",
      "picture": "string",
      "school_id": "int",
      "role_id": "int",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete User

Request :

- Method : DELETE
- Endpoint : `/api/users/{user_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Role

## Create Role

Request :

- Method : POST
- Endpoint : `/api/roles`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Get Role

Request :

- Method : GET
- Endpoint : `/api/roles/{role_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Role

Request :

- Method : PUT
- Endpoint : `/api/roles/{role_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Role

Request :

- Method : GET
- Endpoint : `/api/roles`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Role

Request :

- Method : DELETE
- Endpoint : `/api/roles/{role_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# School

## Create School

Request :

- Method : POST
- Endpoint : `/api/schools`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "npsn": "integer",
  "name": "string",
  "alamat": "string",
  "telp": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "npsn": "integer",
    "name": "string",
    "alamat": "string",
    "telp": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get School

Request :

- Method : GET
- Endpoint : `/api/schools/{school_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "npsn": "integer",
    "name": "string",
    "alamat": "string",
    "telp": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update School

Request :

- Method : PUT
- Endpoint : `/api/schools/{school_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "npsn": "integer",
  "name": "string",
  "alamat": "string",
  "telp": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "npsn": "integer",
    "name": "string",
    "alamat": "string",
    "telp": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List School

Request :

- Method : GET
- Endpoint : `/api/schools`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "npsn": "integer",
      "name": "string",
      "alamat": "string",
      "telp": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "npsn": "integer",
      "name": "string",
      "alamat": "string",
      "telp": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete School

Request :

- Method : DELETE
- Endpoint : `/api/schools/{school_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Event

## Create Event

Request :

- Method : POST
- Endpoint : `/api/events`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "description": "string",
  "image": "string",
  "date": "date",
  "time": "string",
  "location": "string",
  "loc_url": "string",
  "price": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "date": "date",
    "time": "string",
    "location": "string",
    "loc_url": "string",
    "price": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Event

Request :

- Method : GET
- Endpoint : `/api/events/{event_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "date": "date",
    "time": "string",
    "location": "string",
    "loc_url": "string",
    "price": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Event

Request :

- Method : PUT
- Endpoint : `/api/events/{event_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "description": "string",
  "image": "string",
  "date": "date",
  "time": "string",
  "location": "string",
  "loc_url": "string",
  "price": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "date": "date",
    "time": "string",
    "location": "string",
    "loc_url": "string",
    "price": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Event

Request :

- Method : GET
- Endpoint : `/api/events`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "description": "string",
      "image": "string",
      "date": "date",
      "time": "string",
      "location": "string",
      "loc_url": "string",
      "price": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "description": "string",
      "image": "string",
      "date": "date",
      "time": "string",
      "location": "string",
      "loc_url": "string",
      "price": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Event

Request :

- Method : DELETE
- Endpoint : `/api/events/{event_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Favorite

## Create Favorite

Request :

- Method : POST
- Endpoint : `/api/{user_id}/favorites`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "event_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "event_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Favorite

Request :

- Method : GET
- Endpoint : `/api/{user_id}/favorites/{favorite_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "event_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Favorite

Request :

- Method : PUT
- Endpoint : `/api/{user_id}/favorites/{favorite_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Favorite

Request :

- Method : GET
- Endpoint : `/api/{user_id}/favorites`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user_id": "integer",
      "event_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user_id": "integer",
      "event_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Favorite

Request :

- Method : DELETE
- Endpoint : `/api/{user_id}/favorites/{favorite_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Portofolio

## Create Portofolio

Request :

- Method : POST
- Endpoint : `/api/{user_id}/portofolios`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "media": "string",
  "title": "string",
  "description": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "media": "string",
    "title": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Portofolio

Request :

- Method : GET
- Endpoint : `/api/{user_id}/portofolios/{portofolio_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "media": "string",
    "title": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Portofolio

Request :

- Method : PUT
- Endpoint : `/api/{user_id}/portofolios/{portofolio_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "media": "string",
  "title": "string",
  "description": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "media": "string",
    "title": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Portofolio

Request :

- Method : GET
- Endpoint : `/api/{user_id}/portofolios`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user_id": "integer",
      "media": "string",
      "title": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user_id": "integer",
      "media": "string",
      "title": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Portofolio

Request :

- Method : DELETE
- Endpoint : `/api/{user_id}/portofolios/{portofolio_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Article

## Create Article

Request :

- Method : POST
- Endpoint : `/api/articles`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "title": "string",
  "description": "string",
  "topic_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "title": "string",
    "description": "string",
    "topic_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Article

Request :

- Method : GET
- Endpoint : `/api/articles/{article_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "title": "string",
    "description": "string",
    "topic_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Article

Request :

- Method : PUT
- Endpoint : `/api/articles/{article_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "title": "string",
  "description": "string",
  "topic_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "title": "string",
    "description": "string",
    "topic_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Article

Request :

- Method : GET
- Endpoint : `/api/articles`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user_id": "integer",
      "title": "string",
      "description": "string",
      "topic_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user_id": "integer",
      "title": "string",
      "description": "string",
      "topic_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Article

Request :

- Method : DELETE
- Endpoint : `/api/articles/{article_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Like

## Create Like

Request :

- Method : POST
- Endpoint : `/api/articles/{article_id}/likes`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "article_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "article_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Like

Request :

- Method : GET
- Endpoint : `/api/articles/{article_id}/likes/{like_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "article_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Like

Request :

- Method : PUT
- Endpoint : `/api/articles/{article_id}/likes/{like_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Like

Request :

- Method : GET
- Endpoint : `/api/articles/{article_id}/likes`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user_id": "integer",
      "article_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user_id": "integer",
      "article_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Like

Request :

- Method : DELETE
- Endpoint : `/api/articles/{article_id}/likes/{like_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Topic

## Create Topic

Request :

- Method : POST
- Endpoint : `/api/topics`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Get Topic

Request :

- Method : GET
- Endpoint : `/api/topics/{topic_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Topic

Request :

- Method : PUT
- Endpoint : `/api/topics/{topic_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Topic

Request :

- Method : GET
- Endpoint : `/api/topics`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Topic

Request :

- Method : DELETE
- Endpoint : `/api/topics/{topic_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Article Comments

## Create Comment

Request :

- Method : POST
- Endpoint : `/api/articles/{article_id}/comments`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "article_id": "integer",
  "comment": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "article_id": "integer",
    "comment": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Comment

Request :

- Method : GET
- Endpoint : `/api/articles/{article_id}/comments/{comment_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "article_id": "integer",
    "comment": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Comment

Request :

- Method : PUT
- Endpoint : `/api/articles/{article_id}/comments/{comment_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "article_id": "integer",
  "comment": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "user_id": "integer",
    "article_id": "integer",
    "comment": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Comment

Request :

- Method : GET
- Endpoint : `/api/articles/{article_id}/comments`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "user_id": "integer",
      "article_id": "integer",
      "comment": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "user_id": "integer",
      "article_id": "integer",
      "comment": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Comment

Request :

- Method : DELETE
- Endpoint : `/api/articles/{article_id}/comments/{comment_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Course

## Create Course

Request :

- Method : POST
- Endpoint : `/api/courses`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "description": "string",
  "image": "string",
  "track_id": "integer",
  "instructure_id": "integer",
  "exp_point": "integer",
  "test_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "track_id": "integer",
    "instructure_id": "integer",
    "exp_point": "integer",
    "test_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Course

Request :

- Method : GET
- Endpoint : `/api/courses/{course_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "track_id": "integer",
    "instructure_id": "integer",
    "exp_point": "integer",
    "test_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Course

Request :

- Method : PUT
- Endpoint : `/api/courses/{course_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "description": "string",
  "image": "string",
  "track_id": "integer",
  "instructure_id": "integer",
  "exp_point": "integer",
  "test_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "description": "string",
    "image": "string",
    "track_id": "integer",
    "instructure_id": "integer",
    "exp_point": "integer",
    "test_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Course

Request :

- Method : GET
- Endpoint : `/api/courses`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "description": "string",
      "image": "string",
      "track_id": "integer",
      "instructure_id": "integer",
      "exp_point": "integer",
      "test_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "description": "string",
      "image": "string",
      "track_id": "integer",
      "instructure_id": "integer",
      "exp_point": "integer",
      "test_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Course

Request :

- Method : DELETE
- Endpoint : `/api/courses/{course_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Module

## Create Module

Request :

- Method : POST
- Endpoint : `/api/courses/:course_id/modules`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "course_id": "integer",
  "title": "string",
  "video": "string",
  "image": "string",
  "description": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "course_id": "integer",
    "title": "string",
    "video": "string",
    "image": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Module

Request :

- Method : GET
- Endpoint : `/api/courses/:course_id/modules/{module_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "course_id": "integer",
    "title": "string",
    "video": "string",
    "image": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Module

Request :

- Method : PUT
- Endpoint : `/api/courses/:course_id/modules/{module_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "course_id": "integer",
  "title": "string",
  "video": "string",
  "image": "string",
  "description": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "course_id": "integer",
    "title": "string",
    "video": "string",
    "image": "string",
    "description": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Module

Request :

- Method : GET
- Endpoint : `/api/courses/:course_id/modules`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "course_id": "integer",
      "title": "string",
      "video": "string",
      "image": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "course_id": "integer",
      "title": "string",
      "video": "string",
      "image": "string",
      "description": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Module

Request :

- Method : DELETE
- Endpoint : `/api/courses/:course_id/modules/{module_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Track

## Create Track

Request :

- Method : POST
- Endpoint : `/api/tracks`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Get Track

Request :

- Method : GET
- Endpoint : `/api/tracks/{track_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Track

Request :

- Method : PUT
- Endpoint : `/api/tracks/{track_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Track

Request :

- Method : GET
- Endpoint : `/api/tracks`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Track

Request :

- Method : DELETE
- Endpoint : `/api/tracks/{track_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Status

## Create Status

Request :

- Method : POST
- Endpoint : `/api/statuses`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Get Status

Request :

- Method : GET
- Endpoint : `/api/statuses/{status_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "integer, unique",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Status

Request :

- Method : PUT
- Endpoint : `/api/statuses/{status_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## List Status

Request :

- Method : GET
- Endpoint : `/api/statuses`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer, unique",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Status

Request :

- Method : DELETE
- Endpoint : `/api/statuses/{status_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Instructure

## Create Instructure

Request :

- Method : POST
- Endpoint : `/api/instructures`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "bio": "string",
  "picture": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "bio": "string",
    "picture": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Instructure

Request :

- Method : GET
- Endpoint : `/api/instructures/{instructure_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "bio": "string",
    "picture": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Instructure

Request :

- Method : PUT
- Endpoint : `/api/instructures/{instructure_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "bio": "string",
  "picture": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "bio": "string",
    "picture": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Instructure

Request :

- Method : GET
- Endpoint : `/api/instructures`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "name": "string",
      "bio": "string",
      "picture": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "name": "string",
      "bio": "string",
      "picture": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Instructure

Request :

- Method : DELETE
- Endpoint : `/api/instructures/{instructure_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Started Course

## Create StartedCourse

Request :

- Method : POST
- Endpoint : `/api/users/{user_id}/started_courses`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "course_id": "integer",
  "status_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "status_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get StartedCourse

Request :

- Method : GET
- Endpoint : `/api/users/{user_id}/started_courses/{started_course_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "status_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update StartedCourse

Request :

- Method : PUT
- Endpoint : `/api/users/{user_id}/started_courses/{started_course_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "course_id": "integer",
  "status_id": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "status_id": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List StartedCourse

Request :

- Method : GET
- Endpoint : `/api/users/{user_id}/started_courses`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "user_id": "integer",
      "course_id": "integer",
      "status_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "user_id": "integer",
      "course_id": "integer",
      "status_id": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete StartedCourse

Request :

- Method : DELETE
- Endpoint : `/api/users/{user_id}/started_courses/{started_course_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Review

## Create Review

Request :

- Method : POST
- Endpoint : `/api/courses/{course_id}/reviews`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "course_id": "integer",
  "star": "integer",
  "review": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "star": "integer",
    "review": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Review

Request :

- Method : GET
- Endpoint : `/api/courses/{course_id}/reviews/{review_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "star": "integer",
    "review": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Review

Request :

- Method : PUT
- Endpoint : `/api/courses/{course_id}/reviews/{review_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "star": "integer",
  "review": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "course_id": "integer",
    "star": "integer",
    "review": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Review

Request :

- Method : GET
- Endpoint : `/api/courses/{course_id}/reviews`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "user_id": "integer",
      "course_id": "integer",
      "star": "integer",
      "review": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "user_id": "integer",
      "course_id": "integer",
      "star": "integer",
      "review": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Review

Request :

- Method : DELETE
- Endpoint : `/api/courses/{course_id}/reviews/{review_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Testimoni

## Create Testimoni

Request :

- Method : POST
- Endpoint : `/api/testimonis`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "testimoni": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "testimoni": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Testimoni

Request :

- Method : GET
- Endpoint : `/api/testimonis/{testimoni_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "testimoni": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Testimoni

Request :

- Method : PUT
- Endpoint : `/api/testimonis/{testimoni_id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user_id": "integer",
  "testimoni": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "user_id": "integer",
    "testimoni": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Testimoni

Request :

- Method : GET
- Endpoint : `/api/testimonis`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "user_id": "integer",
      "testimoni": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "user_id": "integer",
      "testimoni": "string",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Testimoni

Request :

- Method : DELETE
- Endpoint : `/api/testimonis/{testimoni_id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

---

# Test

## Create Test

Request :

- Method : POST
- Endpoint : `/api/courses/{course_id}tests`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "name": "string",
  "price": "long",
  "quantity": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "long",
    "quantity": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Test

Request :

- Method : GET
- Endpoint : `/api/tests/{id_test}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "long",
    "quantity": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Test

Request :

- Method : PUT
- Endpoint : `/api/tests/{id_test}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "price": "long",
  "quantity": "integer"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "long",
    "quantity": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Test

Request :

- Method : GET
- Endpoint : `/api/tests`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "name": "string",
      "price": "long",
      "quantity": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "name": "string",
      "price": "long",
      "quantity": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```

## Delete Test

Request :

- Method : DELETE
- Endpoint : `/api/tests/{id_test}`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```
