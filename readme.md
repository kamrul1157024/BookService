### Simple Book Service App

- Authenticate User using JWT
- Any One get the list of the book
- Authenticated User can Add,Update,Remove Books

Endpoints :

```javascipt
POST /api/register 
{
    username: ...
    email: ...
    password: ...
}
```

```javascipt
POST /api/auth 
{
    username: ...
    password: ...
}
```

```javascipt
GET /api/book/   # Get all the book
```

```javascipt
GET /api/book/:bookName   
```

```javascipt
Headers:
    Authorization: Bearer JWT_CODE
POST /api/book/
{
    name: ...
    author: ...
    genere: ...
}
```

```javascipt
Headers:
    Authorization: Bearer JWT_CODE
PATCH /api/book/:id  #Pass Only the parameter you want to update.
{
    name: ...
    author: ...
    genere: ...
}
```

```javascipt
Headers:
    Authorization: Bearer JWT_CODE
DELETE /api/book/:id
```
