# Installation

npm install -g sass --> *Js implementation*

choco install sass --> Windows Chocolatery

app

# WorkFlow

De .scss -> sass compilation --> .css

Sass - Documentación Oficial

# Variables - Comentarios - Lenguaje SASS

- ## Variables

    - Números

        `$cabecera-anchura: 80%;`
        `width: $cabecera-anchura/2;`

    - Cadenas
    - Colores

        `$cabecera-fondo: rgba(200, 200, 200, 0.8);`
        `$gris: #eee !default;`

    - Booleanos
    - Null
    - Mapas y listas

    **Variables globales**: que estarán disponibles a lo largo de todo el código Sass y que se definen fuera de todo bloque, normalmente al principio de los ficheros Sass.

    $logo-width: 50%;

    **Variables locales**: declaradas dentro de bloques ({}) y que solo están disponibles y tienen valor dentro de ese bloque.

~~~
    .header {
      //Variable local
      $header-width: 50%;
    }
~~~

-  ## Comentarios

~~~
    //Este es un comentario de una línea

    /*
    ...
    Este es un comentario multilínea
    ...
    */
~~~

-  ## Listas y Mapas

    - Listas
        Las listas son colecciones de valores de datos y podemos declarar listas de la siguiente manera:

        Forma general de la definición
            `$variable_lista: (v1, v2, v3);`

        Asociadas a las listas existen multitud de funciones asociadas para acceder a los distintos elementos, añadir elementos, buscar un elemento.

    - Mapas
        Forma general de la definición

~~~
            $breakpoint: (
            "pequeño": 576px,
            "medio": 768px,
            "grande": 992px
            );
~~~

-  ## Interpolación

    Una de las características más útiles y más usadas de Sass es la Interpolación.

    La Interpolación nos permite, casi en cualquier sitio de un documento Sass, incrustar una expresión, cuyo resultado al ser evaluada formará un trozo de código CSS.

    Para que esto ocurra debemos incluir la expresión de la siguiente manera:

    `#{expresión_a_evaluar}`

    Se puede usar en:

    - Selectores
    - Nombres de propiedades
    - Comentarios
    - Reglas de Sass como @import, @extend y @mixins
    - Cadenas con o sin comillas
    - Funciones

~~~
    // Interpolación en selectores
    $buttton-type: "error";
    $btn-color : #f00;

    .btn-#{$name} {
        background-color:  $btn-color;
    }
~~~

~~~
    //Interpolación en el uso de funciones
    $fondo :  "images/fondos/default.png";

    .container {
        ...
        background-image: url("#{fondo}");
        ...
    }
~~~

~~~

    //Interpolación en comentarios
    $autor: "OpenWebinars";

    /* 
        Web desarrollada por #{$autor}
    */
~~~

-  ## Anidamiento

~~~
    //Estructura CSS para un menú simple
    nav {...}
    nav li {....}
    nav li a {...}

    //Alternativa usando las posiblidad es de anidamiento (Nesting) de Sass
    nav {
      ...
      li {
        ...
        a{...}
      }
    }
~~~

~~~
    //Estructura en CSS
    a {...}
    a:hover {...}

    //Alternativa en Sass usando & para referirse al selector padre
    a {
      ....
      &:hover {...}
    }
~~~
~~~
    //Selectores CSS
    .btn {...}
    .btn__warning {...}

    //Origen de selectores en SASS
    .btn {
      ...
      &__warning {...}
    }
~~~

-  ## Compilación

    - Compilación simple: donde a partir de un único fichero Sass generaremos un fichero CSS
        ~~~
        //SIMPLE
        sass file.scss output_file.scss
        ~~~
    - Compilación múltiple: donde partiendo de varios ficheros .scss podremos generar varios ficheros CSS
        ~~~
        //MÚLTIPLE
        sass file1.scss:output1.css ... fileN.scss:outputN.css
        ~~~
    - Compilación extendida: es la opción por defecto, se genera un regla CSS por cada línea. Es la opción que se suele usar mientras estamos en fase de desarrollo.
        ~~~
        //EXPANDIDA (1 SELECTOR - 1 LÍNEA EN SALIDA - POR DEFECTO)
        sass --style = expanded file.scss output_file.scss
        ~~~
    - Compilación comprimida: generando una versión minimizada que elimina cualquier carácter que no sea imprescindible. Es la opción preferida una vez ya hemos pasado la fase de desarrollo y queremos subir nuestro CSS generado a producción.
        ~~~
        //COMPRIMIDA (QUITA LA MAYOR CANTIDAD DE CARACTERES POSIBLES)
        sass --style = compressed file.scss output_file.scss
        ~~~
    - Compilación que vigila los cambios : Es una opción que le pasamos al compilador Sass para que al producirse los cambios en los archivos Scss se vayan regenerando automáticamente los ficheros CSS resultantes.
        ~~~
        //VIGILANDO LOS CAMBIOS Y ACTUALIZANDO FICHEROS
        sass --watch file.scss output_file.scss
        ~~~

    ### Los ficheros .Map

    Esos ficheros contienen un mapeado de las reglas Sass a las reglas CSS.

    Flags de compilación adicionales

    + `—no-source-map` si no queremos que se generan los archivos .map al compilar.
    + `—stop-on-error` si queremos parar el proceso de compilación cuando se produzca un error.
    + `—embed-source-map` si queremos incluir el archivo .map directamente en el CSS generado y no en un fichero aparte.
    + `—help` si queremos solicitar información adicional de cómo usar el compilador.
    + `—quiet` si no queremos que el compilador muestre mensajes de advertencia (warning)
    + `—color/—no-color` si queremos o no mostrar colores en los mensajes generados por el proceso de compilación.
    + ` —trace` si queremos mostrar toda la pila de llamadas del proceso de compilación cuando ha habido un error.
    
    ### Los comentarios al compilar

    Los comentarios en el archivo generado o no dependen del tipo de compilación y del tipo de comentarios que utilizemos.

    ~~~
    //Este comentario no se incluye al general el archivo CSS

    /* Este comentario de varias líneas
    se incluye al genera el CSS salvo que la compilación la hagamos en modo 
    compressed (comprimido) */

    /*!
         Este comentario se incluye tabién en modo Compressed (comprimido)
    */
    ~~~