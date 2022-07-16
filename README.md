# REST API COUNTRIES

Este proyecto está diseñado para los paises consultados en la API [restcountries](https://restcountries.com/) mostrando una lista de tarjetas con informacion basica del pais. al ir al detalle podra consultar informacion mas especifica y navegar a los paises fronterizos.

## Tecnologias
_El cliente esta desarrollado utilizando tecnologías JavaScript principalmente React con TypeScript y consume la REST API mediante el método Fetch_

-	*React:* como librearía para escribir JS, utilizando fuertemente React Hooks para manejar estados y realizar cambios en tiempo real.
-	*SCSS:* Como preprocesador CSS para escribir estilos utilizando la metodología BEM (Bloque Elemento Modificador), Esta metodología nos ayuda a escribir estilos más escalables y minimizar el riesgo de sobreponer estilos.
-	*Babel:* es un transcompilador que nos ayuda a convertir el código para ser entendible para todos los navegadores.
- *Eslint:* Nos ayuda a revisar nuestro código tratando de encontrar errores que podrían provocar problemas de compilación o bien futuros bugs en nuestro desarrollo, tambien ayuda a cumplir las mejores practicas posible para escritura de codigo.
-	*WebPack:* Empaquetador de JavaScript o TypeScript moderno que con ayuda de Babel nos permite transpirar código de JavaScript para ser interpretado por cualquier navegado, minificando y optimizando el código que se envía a producción con el mejor rendimiento posible.
-	*Jest:* Herramienta para escritura y construcción de pruebas.
-	*Travis:* Herramienta que nos ayuda a realizar el despliegue e integración continuos  (CI/CD) de manera fácil y rápida. Para este proyecto el Job esta configurado para realizar ejecutar las pruebas,  construir el proyecto y desplegarlo en Firebase Hosting solo si se hace un pull request a la rama main.
-	*Firebase:* servicios Cloud de Google para proyectos, en este caso se utiliza solo el hosting para desplegar y alojar el cliente.


## Comenzando 🚀
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Instalación 🔧

#### Clonar
_Puede clonar el proyecto descargarlo en una carpeta comprimido desde el boton verde de clonar o descargar_

_tambien puedes clonarlo con el siguiente comando (recuerda que para poder clonar el proyecto debes tener instalado git en tu computador)_

```
git clone https://github.com/alejozepol/restContries-react-typeScript.git
```

#### Instalar paquetes

Debes instalar los paquetes utilizando NPM o YARN el cual te va a crear una carpeta node_modulos con cada una de las dependencias. Utiliza el siguiente comando (recuerda que para tu computador reconozca el comando NPM debes tener instalado node.js puedes descargarlo en https://nodejs.org/es/)

```
yarn
```

## Deployment 📦

_Despues de tener todos los paquetes requeridos instalados puedes ejecutar el proyecto de la siguiete manera:_

### Modo Desarrollo 🛠️

```
yarn run start
```
Este comando te abrira una ventana en tu navegador.

### Ejecucion de Pruebas 🛠️

```
yarn run test
```
_Este comando ejecuta JEST para realizar la ejecución de las pruebas_

### Modo Producción 🛠️

```
yarn run build
```
_Este comando te crea la carpeta dist la cual es la que se va ha cargar en el hosting de tu preferencia para su utilizacion_

## Autor ✒️

* **Alejandro López Ramírez** - *Desarrollador full stack Javascript* - [alejozepol](https://github.com/alejozepol),  http://alejozepol.com, [twitter](https://twitter.com/alejozepol), [Linkedin](https://www.linkedin.com/in/alejozepol/), 

Me encantaria poder recibir feedback del proyecto, esto me ayudara a ser un mejor desarrollador, asi que no dudes en escribirme.

_contactame si necesitas ayuda o cualquier otra cosa_
