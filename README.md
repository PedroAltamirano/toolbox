
# Reversed word api

En este repositorio se encuentra una aplicacion simple que toma una palabra y retorna la misma en reversa, ademas de si es o no palindroma.
Las tecnologias usadas son: node12

- front
    - react
    - redux
    - bootstrap

- back
    - express
    - cors
    - mocha (dev)
    - chai (dev)
    - super test (dev)
## Deployment

Una ves con el codigo descargado
```bash
    $ git clone https://github.com/PedroAltamirano/toolbox.git
```

### server
se ingresa a la carpeta server
```bash
  $ cd path-to-proyect/server
```

y se descargan las dependencias
```bash
  $ npm i
```

para iniciar el servidor
```bash
  $ npm start
```
o
```bash
  $ nodemon server
```

### client
se ingresa a la carpeta client
```bash
  $ cd path-to-proyect/client
```

y se descargan las dependencias
```bash
  $ npm i
```

para iniciar el proyecto de react
```bash
  $ npm start
```

Dado que es un repositorio de prueba se opto por incluir ambos proyectos en el mismo.
## Running Tests

Las pruebas se han creado solo para el servidor, para testear el api

```bash
  $ cd path-to-proyect/server && npm test
```

Existen 6 pruebas, para testear casos de respueta correcta y casos de respuesta erronea
## API Reference

#### Get reversed word

```http
  GET /api/iecho
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text`    | `string` | **Required**. Palabra a reversar |

## Authors

- [@PedroAltamirano](https://github.com/PedroAltamirano)

```Created using readme.so```