# StarWars Edward Forero Api
<Bienvenido, este el el código para crear un api en AWS usando el framework serverless, esta api esta basada en SWAPI. En ella podras crear nuevos personajes en tu DynamoDB y consultar los personajes creados. Tambien podrás consultar personajes del API de SWAPI con los identificadores de sus campos traducidos>

## Obtener un personaje de starwars

#### URL
```
    </people/:id/> -- obten una persona almacenada en tu base de datos
    </swapi/people/:id/> -- obten una persona desde el api de SWAPI
```
#### Method: GET

#### <Respuesta Exitosa>
Code: 200
Content: 
```
{
    "anoNacimiento": "19BBY",
    "colorOjo": "blue",
    "peliculas": [
        "https: //swapi.py4e.com/api/films/1/",
        "https: //swapi.py4e.com/api/films/2/",
        "https: //swapi.py4e.com/api/films/3/",
        "https: //swapi.py4e.com/api/films/6/",
        "https: //swapi.py4e.com/api/films/7/"
    ],
    "genero": "male",
    "colorCabello": "blond",
    "altura": "172",
    "mundoNatal": "https: //swapi.py4e.com/api/planets/1/",
    "masa": "77",
    "nombre": "Luke Skywalker",
    "colorPiel": "fair",
    "creado": "2021-01-22T00: 28: 15.957Z",
    "editado": "2021-01-22T00: 28: 15.957Z",
    "especies": [
        "https: //swapi.py4e.com/api/species/1/"
    ],
    "naves": [
        "https: //swapi.py4e.com/api/starships/12/",
        "https: //swapi.py4e.com/api/starships/22/"
    ],
    "url": "https: //swapi.py4e.com/api/people/1/",
    "vehiculos": [
        "https: //swapi.py4e.com/api/vehicles/14/",
        "https: //swapi.py4e.com/api/vehicles/30/"
    ]
}
```


<Respuesta de error>
Code 404:
Persona no encontrada.


## Crear un personaje de starwars

#### URL
```
    </people>
```

#### Method: POST

#### Data Params -- todos los parametros son obligatorios
```
{
    "anoNacimiento": "19BBY",
    "colorOjo": "blue",
    "peliculas": [
        "https: //swapi.py4e.com/api/films/1/",
        "https: //swapi.py4e.com/api/films/2/",
        "https: //swapi.py4e.com/api/films/3/",
        "https: //swapi.py4e.com/api/films/6/",
        "https: //swapi.py4e.com/api/films/7/"
    ],
    "genero": "male",
    "colorCabello": "blond",
    "altura": "172",
    "mundoNatal": "https: //swapi.py4e.com/api/planets/1/",
    "masa": "77",
    "nombre": "Luke Skywalker",
    "colorPiel": "fair",
    "creado": "2021-01-22T00: 28: 15.957Z",
    "editado": "2021-01-22T00: 28: 15.957Z",
    "especies": [
        "https: //swapi.py4e.com/api/species/1/"
    ],
    "naves": [
        "https: //swapi.py4e.com/api/starships/12/",
        "https: //swapi.py4e.com/api/starships/22/"
    ],
    "url": "https: //swapi.py4e.com/api/people/1/",
    "vehiculos": [
        "https: //swapi.py4e.com/api/vehicles/14/",
        "https: //swapi.py4e.com/api/vehicles/30/"
    ],
    "id": 2,
    "typeData": "people"
}
```

<Respuesta Exitosa>
Code: 200
Content:

```
{
    "anoNacimiento": "19BBY",
    "colorOjo": "blue",
    "peliculas": [
        "https: //swapi.py4e.com/api/films/1/",
        "https: //swapi.py4e.com/api/films/2/",
        "https: //swapi.py4e.com/api/films/3/",
        "https: //swapi.py4e.com/api/films/6/",
        "https: //swapi.py4e.com/api/films/7/"
    ],
    "genero": "male",
    "colorCabello": "blond",
    "altura": "172",
    "mundoNatal": "https: //swapi.py4e.com/api/planets/1/",
    "masa": "77",
    "nombre": "Luke Skywalker",
    "colorPiel": "fair",
    "creado": "2021-01-22T00: 28: 15.957Z",
    "editado": "2021-01-22T00: 28: 15.957Z",
    "especies": [
        "https: //swapi.py4e.com/api/species/1/"
    ],
    "naves": [
        "https: //swapi.py4e.com/api/starships/12/",
        "https: //swapi.py4e.com/api/starships/22/"
    ],
    "url": "https: //swapi.py4e.com/api/people/1/",
    "vehiculos": [
        "https: //swapi.py4e.com/api/vehicles/14/",
        "https: //swapi.py4e.com/api/vehicles/30/"
    ],
    "id": 2,
    "typeData": "people"
}
```

Code: 500
Content: { status : "Descripcion del error }
