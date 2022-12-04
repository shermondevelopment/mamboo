# <p align = "center"> KANBAM MAMBOO </p>

<p align="center">
   <img src="https://mamboo.co.ao/images/logo/logo-dark.png" width="150"/>
</p>

## :clipboard: Description

create a system where I can create my board and within these boards I can have several lists and in this list I can link several tasks to them

---

## :computer: Technologies

- TypeScript
- Node.js
- MongoDb
- JWT

## Instructions on how to run with Docker

<p>
  You need to have installed the following tools: Git, Docker, Docker Compose. It will be necessary for port 3001 to be available for the application and mongodb will use port 27017.
</p>

<p> 
 Clone the repository to a folder of your choice
<p/>

```yml
https://github.com/shermondevelopment/mamboo.git
```

```yml
Navigate to the cloned project folder and Rename file .env.dev to .env
```

<p>
 then go up the application's docker container:
</p>

```yml
docker-compose up -d
```

```yml
app running in port 3001
```

## :rocket: Routers of authenticate

```yml
POST /signup
    - Route to register a new user
    - headers: {}
    - body:
        {
            "email": "lorem@gmail.com",
            "password": "loremipsum",
        }
```

```yml
POST /signin
    - Route to login
    - headers: {}
    - body:
        {
            "email": "lorem@gmail.com",
            "password": "loremipsum"
        }
```

## Routers of frame

```yml
POST /painting/create (authenticated)
    - Route to create new painting
    - headers: { "Authorization": "Bearer $token" }
    - body:
        {
            "title": "My frame Kanbam"
        }
```

```yml
GET /paintings (authenticated)
    - Route to list all painting
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /paintin/:id (authenticated)
    - Route to list single painting
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
PUT /painting/:id (authenticated)
    - Route to update painting
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /painting/:id (authenticated)
    - Route to delete painting
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

## Routers of list

```yml
POST /list (authenticated)
    - Route to create new list
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "To Do",
        "painting_id": "1c9487ef-17dc-4b60-b2b4-81eb88acaa99"
    }

  painting_id: paint_id matches the frame/painting_id
```

```yml
GET /list/by/painting/:id (authenticated)
    - Route to list all framer with list
    - headers: { "Authorization": "Bearer $token" }
    - body: { }
```

```yml
PUT /list/:id (authenticated)
    - Route to update list
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "To Do"
    }
```

```yml
DELETE /list/:id (authenticated)
    - Route to update list
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

## Router of Task

```yml
POST /task (authenticated)
    - Route add new task
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "content": "create api usign nodejs",
        "list_id": "6c4d10df-51a3-4fa3-91fa-051963704657" (TO DO / IN PROGRESS / Done)
    }
```

```yml
GET /tasks (authenticated)
    - Route add list all task
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /task/:id (authenticated)
    - Route to delete task by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /task/:id (authenticated)
    - Route to delete task by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
UPDATE /task/:id (authenticated)
    - Route to update task by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
      "content": "Fixed bug of api",
      "position_id": 1,   (by default the position of the task in the list is zero)
    }
```

```yml
UPDATE /task/member/add/:id (authenticated)
    - Route to add members of task
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "members": [
          { "email": "fernanda@yahoo.com" }
        ]
    }
```

```yml
UPDATE /task/member/remove/:id (authenticated)
    - Route to remove members of task
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "members": [
          { "email": "fernanda@yahoo.com" }
        ]
    }
```

## router of get all list with task

```yml
GET /list/task/:id  (authenticated)
    - Route to remove members of task
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "members": [
          { "email": "fernanda@yahoo.com" }
        ]
    }

    (:id) as painting_id
```
