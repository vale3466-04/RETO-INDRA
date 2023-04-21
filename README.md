# RT-INDRA
En este prueba se realizó una integración entre los servicios de AWS(Lambda, API Gateway, DynamoDB) y el framework Serverless, utilizando en el backend Node JS.

## Usos
Podemos encontrar un CRUD para poder interactuar a lo largo de la presente API-Rest.

## Routes:
- GET → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/planets, para traer todos los planetas con sus respectivas características.

- GET → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/planet/:id, donde id: Es el identificador del planeta ingresado

- POST → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/planet, Con esta ruta creamos un nuevo planeta donde el objecto a ingresar debe contener por ejemplo:
{   
    "name_planet": "Tierra",
    "diameter": "1500",
    "climate": "Arido",
    "population": "0"
}

- PUT → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/planet, Para actualizar la información de uno de los planetas, ingresando una propiedad adicional al objeto que ya se había mencionado, que es 'done', seteando un valor de true indicando que se realizó la actualización del registro. 

Por ejemplo:

{   "done": true,
    "name_planet": "Tierra",
    "diameter": "1500",
    "climate": "Arido",
    "population": "0" 
}

- DELETE →  https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/planet/:id, donde id: Es el identificador del planeta ingresado

- GET → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/swapi-planets/:id, donde id: Es el numero de id del planeta de SWAPI, esta API permite integrar nuestro lambda hacia SWAPI y luego poder almacenarlo en una tabla de DynamoDB.

- GET → https://oq64s6nbmb.execute-api.us-west-2.amazonaws.com/swagger, sirve para mostrar la UI donde se muestran todos los endpoints y se pueda probar el servicio.

## Testing
Tambien se encontrará una carpeta con las pruebas unitarias realizadas a cada una de las peticiones para poder garantizar la funcionalidad de la API, esta fue realizada con JEST.

## Documentacíon
Para mejor información del servicio, acceder a: http://localhost:3000/swagger, en la cual cargará una UI para poder interactuar con los lambdas creados.

Nota:
- Se documento en SWAGGER los endPoints de tipo GET.

## Ejecutar el proyecto
Paso 1:
Ejecutar el comando -> npm run start

Paso 2:
Probar la API.
