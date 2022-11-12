# Api para el proyecto final de la materia Desarrollo de Aplicaciones para Dispositivos

## Get Users
Retorna la lista de todos los usuarios disponibles.
### Request

`GET /api/users`

### Response

``` json
{
    "users":[
        {
            "userName": "string",
            "password": "string"
        }
    ]
}
```

## Log in
Request para "loguearse" en la app

### Request

`POST /api/login`

### Request Body

``` json
{
    "user":
        {
                "userName": "string",
                "password": "string"
        }
}
```

### Response
`200 OK | 401 | 404 | 500`

``` json
{
    "userName": "string"
    "mesagge": "Login has been successfully."
}
```

## Log out
Request para "desloguearse" en la app

### Request

`POST /api/logout`

### Response
`200 OK `

``` json
{
    "mesagge": "Logout has been successfully."
}
```
