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

  `> sass fichero_sass.scss fichera_salida.css`