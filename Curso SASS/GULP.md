# GULP

## Requisitos

Los requisitos para poder instalar Gulp son los mismos que para instalar SassDoc. Es decir:

- Nodejs: Entorno de ejecución para JavaScript.
- Npm: Gestor de paquetes para Node.
- Npx: Para poder ejecutar paquetes Node.

Instalación
Una vez cumplidos con los requisitos instalar Gulp es tan sencillo como instalar un paquete node. Es decir:

#### Si tengo los permisos adecuados
> npm install gulp -g

#### Si tenemos que pedir permisos de superusuarios (Linux)
> sudo npm install gulp -g

Una vez tenemos Gulp instalado debemos de proceder,si es que estamos creando el proyecto desde cero, a crear el proyecto Gulp. Para ello desde la carpeta en la que estemos debemos ejecutar la siguiente orden:

> npm init
Esta orden me solicitará preguntas para la creación del fichero package.json dentro de esa carpeta.

Una vez hemos hecho esto debemos instalar Gulp localmente y hacer que el uso de Gulp se incluya en las dependencias de mi proyecto, lo que será necesario si queremos distribuir el mismo. Para ello:

> npm install gulp --save-dev

## El fichero package.json

El fichero package.json, que se crea al hacer npm init, es el manifiesto de nuestro proyecto y contiene toda la información del mismo así como las dependencias que pueda tener.

En el apartado anterior lo hemos creado, rellenando la información y añadiendo como dependencia Gulp.

Mi primer gulpfile.js
Sin anestesia…

require("gulp");

//TAREA
function holamundo(cb) {
  console.log("Hola Mundo");
  cb();
}

//TAREA
function adiosmundo(cb) {
  console.log("Adios Mundo");
  cb();
}

//HACEMOS PUBLICAS LAS TAREAS
exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
//ESTABLEZCO TAREA POR DEFECTO
exports.default = holamundo;
En primer lugar destacar que las sintaxis de esta versión del Gulp (4.0.2) difiere bastante con respecto a versiones anteriores. Es algo a tener en cuenta si buscáis tutoriales para aprender por vuestra cuenta.

Si sabemos un poco de javascript todo será mucho más fácil de entender pero básicamente lo que hacemos en ese fichero lo podemos dividir en tres partes:

Inclusión del módulo Gulp para hacerlo disponible.
Declaración de las tareas que vamos a tener como si fueran funciones javascript.
Exportamos las tareas que consideramos que deben ser públicas (ejecutables desde el exterior) y declaramos la tarea por defecto (default).
Ejecutando las tareas del gulpfile.js
Una vez hemos creado ese fichero podremos ejecutar las tareas e interactuar con el mismo a través de la línea de comandos. Siguiente con el ejemplo anterior:

### Lista las tareas contenidos en el fichero gulpfile.js de ese directorio
> gulp --task

### Ejecuta la tarea por defecto (default)
> gulp

### Ejecuta las tareas especificando el nombre
> gulp holamundo
> gulp adiosmundo
Ejecutar tareas en serie y en paralelo
Para flujos de trabajo complejos Gulp nos permite realizar tareas unas detrás de otra, estableciendo una secuencia e incluso, dadas las características de javascript, lanzar tareas en paralelo para que se vayan ejecutando a la vez.

Probablemente al comienzo nuestros flujos de trabajo no vayan a ser muy complejos y debemos de tener cuidado con las dependencias y posibles condiciones de carrera que puedan tener nuestras tareas en paralelo.

La sintaxis de Gulp para declarar ejecuciones de tareas en paralelo y en serie es la siguiente:

//Asignación desestructurada
const { series, parallel } = require("gulp");

function t1(cb) {
  //Contenido de la tarea t1
  cb();
}

function t2(cb) {
  //Contenido de la tarea t2
  cb();
}

exports.paralelo = parallel(t1, t2);
exports.default = series(t1, t2);
Es importante destacar que puede tener más de dos en serie y más de dos en paralelo y que puedo anidar tareas en serie y en paralelo para flujos complejos. Para más información deberíamos leer la documentación oficial.

Creando un Pipeline. src() y dest()
Con los métodos src() y dest() de Gulp podemos procesar ficheros y construir pipelines de tal manera que cogiendo unos ficheros de origen los procesaremos usando algún plugin y el resultado será procesado por otros plugins y así sucesivamente hasta colocar los ficheros resultantes en su destino.

Un ejemplo básico sería el siguiente:

const { src, dest } = require("gulp");

exports.default = function() {
  //Se mueven los ficheros js dentro de la carpeta src a la carpeta output
  return src("css/*.js").pipe(dest("dist/"));
};
En el anterior ejemplo no hay procesamiento ninguno. Existe únicamente un movimiento de ficheros desde una localización a otra. Sin embargo, entre esos dos pasos podemos añadir el procesamiento de los ficheros de origen por tantos plugins como queramos. Muchos de los plugins que nos interesan los veremos en el capítulo posteriormente pero la estructura general será la siguiente:

const { src, dest } = require('gulp');

exports.default = function() {
  //Se mueven los ficheros js dentro de la carpeta src a la carpeta output
  return src('css/*.js')
  .pipe(plugin1())
  ....
  ....
  .pipe(plugin())
  .pipe(dest('dist/'));
}
Reaccionando a cambios (watch)
Si no queremos estar llamando a tareas Gulp cada vez que realizamos un cambio en los ficheros el API de Gulp nos proporciona el método watch() que ejecutará ciertas tareas de manera automática si ciertos ficheros cambian.

La sintaxis es sencilla y podemos verla directamente con un ejemplo:

//Obtengo la referencia
const { watch } = require("gulp");

exports.default = function() {
  //Cada vez que cambia un archivo scss se vuelven a generar todos los estilos
  watch("scss/*.scss", compilar_scss);
};

Instalación de los plugins
Una vez hemos localizado el plugin que nos interesa nos daremos cuenta de al hacer click sobre el nombre nos lleva a la página del gestor de paquetes de Node (npm). En dicha página se recoge la instalación y de cada uno de ellos aunque, para simplificar, podemos decir que la instalación de un plugin se realizará de la siguiente manera:


## Si queremos que la instalación sea global
> npm install -g nombre_del_modulo_o_plugin

## Si queremos que la dependencia se guarde en el package.json para la posterior distribución de mi proyecto
> npm install --save-dev nombre_del_modulo_o_plugin
Algunos plugins o módulos recomendados
La lista es larga, evoluciona constantemente pero para las tareas relacionadas con los contenidos del curso podemos establecer una lista más pequeña:

gulp-concat: Concatenación de ficheros.
gulp-if: Ejecución condicional de tareas en Gulp.
gulp-rename: Renombrado de ficheros.
gulp-dart-sass: Compilación de Dart-Sass(gulp-sass para versiones anteriores de Sass).
gulp-processhtml: Procesamiento y modificación de ficheros HTML.
gulp-plumber: Gestión de los errores en la ejecución de las tareas de un pipeline o workflow.
del: Borrado de ficheros.
path: Trabajar con rutas a ficheros y/o directorios.
gulp-image-optimize: Para optimizar el tamaño de los ficheros de image.
gulp-pleease: Postproceso de ficheros CSS.
sassdocs: Documentación de ficheros SCSS utilizando ficheros SassDoc.
gulp-ssh: Para gestionar conexiones y transferencias sftp o ssh.
Existen, por supuesto, muchas más y sobre todo, son interesantes para el desarrollo Front-End aquellas relacionadas con JavaScript, pero el desarrollo JavaScript queda fuera del alcance de este curso.

Ejemplos de uso
A continuación vamos a ver ejemplos para ficheros gulpfile.js que usan algunos de estos plugins para ejecutar tareas.

Ejemplo con gulp-concat
//Defino una tarea que devuelve un stream que concatena todos los
// archivos de la carpeta css en un solo archivo final.css y lo deja en
// la misma carpeta
function concatenar() {
  return src("./css/*")
    .pipe(concat("final.css"))
    .pipe(dest("./css/"));
}

exports.contatenar = concatenar;
Ejemplo con gulp-pleeease y gulp-rename
///Defino una tarea que devuelve un stream que minimiza el contenido del fichero final.css, le cambia el nombre poniendo el sufijo .min y lo deja en la misma carpeta
function min_and_rename() {
  return src("./css/final.css")
    .pipe(pleeease())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css"
      })
    )
    .pipe(dest("./css/"));
}
Ejemplo con del
//Borra el archivo final generado (callbacks). En este caso no hay stream
function borrado (cb) {
  del("./dist/css/final.css");
  cb();
}
Ejemplo con gulp-dart-sass y sassdoc
//Tarea para generar el CSS a partir de los ficheros Sass
function generar() {
  return src("./scss/styles.scss")
  .pipe(sass())
  .pipe(dest('./dist/css/'));
}

//Opciones para el módulo sassdoc
var doc_options = {
  dest : 'docs' //Ruta de destino a la documentación
}

//Tarea para generar los documentos de los ficheros Scss
function generar_docs() {
  return src("./scss/styles.scss")
  .pipe(sassdoc(doc_options));
}
Ejemplo con gulp-if

//Opciones que vamos a usar como condiciones del plugin gulpif
var options = {
  minimize : false,
  rename : true
}

function min_and_rename() {
  return src("./dist/css/final.css")
    // Si minimize es true se aplica la tarea
    .pipe(gulpif(options.minimize,pleeease()))
    // Si la opción de rename es true se aplica la tarea de renombrado
    .pipe(gulpif(options.rename,
      rename({
        suffix: ".min",
        extname: ".css"
      })
    ) )   
    .pipe(dest("./dist/css/"));
}

Una vez nos hemos acercado, aunque sea muy por encima, a las posibilidades que nos presenta Gulp vamos a definir cuál será nuestro “pequeño” flujo de trabajo como desarrolladores Front-End.

Pero antes de proseguir vamos a recordar lo que era un workflow o flujo de trabajo.

Un workflow es una serie de pasos que conforman nuestro proceso de trabajo. En este caso nuestro trabajo como desarrollador FrontEnd.

En este capítulo lo definiremos y posteriormente, en el capítulo 5, lo usaremos en el apartado para el desarrollo de nuestro propio FrameWork CSS.

Tenemos que tener en cuenta que en este workflow, una vez estemos en una empresa, habrá más tareas que quedan fuera del alcance de este curso. Tareas como testing, creación de contenedores (si es que nuestra empresa los uso) y despliegues más complejos que el que vamos a proponer que es un despliegue tradicional mediante SSH / SFTP.

Una vez dicho esto la lista de tareas que deberemos hacer con Gulp es la siguiente:

Generar las hojas de estilos a partir de los ficheros .scss.
Generar la documentación de nuestro framework a partir de los comentarios en los ficheros .scss.
Mover todos los ficheros, incluidos los ficheros .html a la carpeta destino.
Borrar los contenidos de las carpetas destino antes de la generación de las hojas de estilos y de los documentos y de mover los ficheros
Subir la carpeta destino al servidor ya que mediante sFTP o mediante SSH.
Tareas en Serie / Tareas en Paralelo
Debemos recordar también que Gulp podemos definir flujos en serie y flujos en paralelo.

Mediante los flujos en serie expresamos un orden de ejecución de tal manera que cuando un tarea acaba la siguiente dentro del flujo empieza.



Si embargo en los flujos en paralelo, en un momento dado de nuestro flujo de trabajo dos tareas se empiezan a realizar a la vez.



Una visión global
Una vez dicho esto, el flujo de trabajo que os propongo es este, aunque podéis adaptarlo según vuestras propias necesidades.



Empezaremos borrando los contenidos de la carpeta destino.
Generaremos las hojas de estilos y la documentación en paralelo.
Moveremos lo generado a la carpeta destino.
Una vez finalizado todo esto lo subiremos a nuestro servidor.