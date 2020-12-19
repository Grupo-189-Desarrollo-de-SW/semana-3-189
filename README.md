# Reto Semana 3

## Proyecto final Sprint III

## Actividad

Para el proyecto de la semana los estudiantes deberán construir tanto el frontend como el backend del módulo de inicio de sesión.
- Durante las sesiones 4 y 5 de la semana, el formador hace la explicación de los diferentes componentes necesarios para construir un módulo de inicio de sesión
- Se deben construir los documentos explicados durante la semana 1, documento de requerimientos, documento del proyecto, casos de uso e historias de usuario; estos
enfocados al proyecto de la semana.
- Durante la sesión 4 se hace la explicación del documento de pruebas, este nuevo documento deberá ser construido por los estudiantes para el proyecto de la semana.

La interfaz debe contar con un campo para el nombre de usuario, otro campo para contraseña y un botón realizar la acción de inicio de sesión, al ingresar deberá mostrar un escritorio para el usuario en donde se visualicen su nombre y correo. En caso de fallar, se debe indicar que hubo un error en el inicio de sesión.

Para la calificación del proyecto de la semana, los estudiantes deben conservar una estructura base, esta estructura garantizará que se puedan realizar pruebas automáticas. En
caso de no cumplir con la estructura base alojada en github, la prueba arrojará un fallo que afectará la calificación.

La estructura base [link github](https://github.com/Tecnalia-Cilco-3/semana-3).

## Usage API

### Login 
```
POST http://localhost:3000/api/auth/signin
```
#### Ejemplo del cuerpo de la solicitud
```
{
    email:"ejemplo@gmail.com"
    password: "micontraseña"
}
```

### Consultar todos los usuarios registrados
```
GET http://localhost:3000/api/user/showall
```

### Registrar un usuario
```
POST http://localhost:3000/api/user/signup
```
#### Ejemplo del cuerpo de la solicitud
```
{
    name: "example"
    email:"example@gmail.com"
    password: "123456"
    rol:"Admin"
}
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Run your tests
```
npm run test
```

### Despliegue en Heroku

https://safe-waters-18200.herokuapp.com

## Autores  
- Juan José Neira Cote 
- Gustavo Adolfo Garcia Londoño 
- David Esteban Hernández Garzón 
- Carlos Alfredo Galindez Muñoz 
- Carlos Andrés Gutierrez Cruz
