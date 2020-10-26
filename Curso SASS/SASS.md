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


  ## Estructuras de Control.

  ### Funciones.

  Estructuras de Control

  Las estructuras de control son aquellas que nos van a permitir definir un flujo de ejecución a la hora de generar nuestras hojas de estilos. Sass nos proporciona las siguientes:

  ~~~
  @if / @else if / @else
  @while
  @for
  @each
  @if / @else if / @else
  ~~~

  ### `@if`

  ~~~
  @if expresion2 {
      //Se evalua si se cumple la expresión
  } @else if expresion2 {
      //Esta parte es opcional y se evalua si se cumple la expresión2    
  } @else {
      //Esta parte también es opcional. Se evalua cuando no se cumple ninguna de la expresiones de las pares anteriores.
  }
  ~~~

  ~~~
  header {
    @if $light-theme == true {
      background-color: #fff;
      color: #000;
    } @else if $dark-theme {
      background-color: #000;
      color: #fff;
    } @else {
      //Default theme
      background-color: #aaa;
      color: #444;
    }
  }
  ~~~
    

  ### `@while`

  Esta estructura de control nos sirve para evaluar de manera repetitiva ciertas órdenes Sass. De manera general tiene la siguiente estructura:
  
  ~~~
    @while expresión {
        //Esto se evaluará mientras se cumpla la expresión
  }
  ~~~

  Un posible ejemplo sería:

  ~~~
  $num: 1;
  $color-list: #0f0, #00f, orange, #ccc;
  @while $num < 5 {
    td:nth-child(#{$num}) {
      color: #f00;
      background-color: nth($color-list, $num);
    }
    $num: $num + 1;
  }
  ~~~

  Utilizamos el bucle para recorrer una lista de colores y hacer que las celdas de una tabla tengan diferentes colores dependiendo de la posición en la que se encuentran.

  ### `@for`

  Esta estructura de control es muy similar a la estructura @while. Las diferencias son que nosotros establecemos unos valores inicial y final para controlar el número de veces que se repite la estructura y que no tenemos que preocuparnos para la actualización de las variables de control. De manera general tiene la siguiente estructura:

  ~~~
  @for $var from $start to $end {

  }
  ~~~

  Un ejemplo sería:

  ~~~
  num: 1;
  $color-list: #0f0, #00f, orange, #ccc;

  @for $i from 1 to 5 {
    p:nth-of-type(#{$i}) {
      color: #f00;
      background-color: nth($color-list, $i);
    }
  }
  ~~~

  ### `@each`

  Esta estructura es una estructura iterativa que utilizaremos para recorrer tanto listas como mapas.

  @each para recorrer una lista
  La estructura general sería:

  ~~~
  $list: ...;

  @each $e in $list {
      //Trozo de código que se evalua tantas veces como elementos tenga la lista. En cada iteración en $e tendremos el elemento de la lista que tratamos cada vez.
  }
  ~~~

  Un ejemplo:

  ~~~
  $usuarios: pepe, lola,manuel;

  @each $u in $usuarios {
    .profile-#{$e} {
      background: 
    image-url("img/#{$e}.png") no repeat;
  }
  ~~~
  
  ### `@each` para recorrer mapas.

  En estos casos la estructura general sería:

  ~~~
  $map: ...;

  @each $k,$v in $map {
      //Trozo de código que se evalua tantas veces como elementos tenga el mapa. En cada iteración en $k tendremos la clave y en $v el valor del elemento del mapa
  }
  ~~~

  Un ejemplo sería:

  ~~~
  $mapa : pepe : pepe.png, lola: lola.png ,manuel: manuel.png;

  @each $u,$v in $mapa {
    .perfil-#{$u} {
      background: image-url("img/#{$v}") no repeat;
  }
  ~~~


  ## Funciones

  Al igual que en un lenguaje de programación en Sass podemos definir funciones en las que por un lado pondremos, normalmente un trozo de código que vayamos a utilizar frecuentemente y , por otro lado, nos deben devolver un valor.

  En Sass tendremos:

  - Funciones definidas por nosotros mismos.
  - Funciones nativas de Sass
  - Funciones definidas por el usuario
  
  ### Funciones definidas por nosotros mismos

  De manera general tienen la siguiente estructura:

  ~~~
  //Función sin parámetros
  @function name() {
      //Cuerpo de la función
      //que devolverá un valor
      @return ...;
  }
  ~~~

  ~~~
  //Función con parámetros (uno o varios)
  @function name(p1,...,pn) {
      //Cuerpo de la función
      //que devolveŕa un valor
      @return ...;
  }
  ~~~

  ### Funciones nativas

  En relación a las funciones nativas decir que Sass nos proporciona un montón de utilidades en forma de función. En especial funciones:

  - Numéricas
  - Cadenas (Strings)
  - Colores
  - Listas
  - Mapas
  - Selectores
  - Introspection
  
  Ya hemos visto algunas directivas @nombre_directiva de Sass cuando hemos hablado de estructuras de control y de funciones pero, además, Sass nos proporciona algunas más que nos van a permitir

  Entre ellas:

  - @import
  - @extend
  - @error / @warn / @debug
  - @at-root
  - @media / @support / @keyframe
  - @import

  De manera general usaremos la directiva de la siguiente manera:

  ~~~
  @import "file1";
  //...
  @import "file2";
  //@import "file1","file2"; sería los mismo
  ~~~

  ~~~
  //Los ficheros (partials) tendrán que tener los siguientes nombres
  //_file1.scss y _file2.scss
  Un ejemplo de esto podría ser:
  ~~~

  ~~~
  @import "scss/colors.scss";
  @import "scss/layout.scss";
  @extend
  ~~~

  Mediante el uso de la directiva @extend podremos reutilizar estilos (fragmentos de código) de tal manera que podré construir estilos de unos componentes usando como base los estilos de otros.

  La sintaxis para usar esta directiva es la siguiente:

  ~~~
  .some_selector  {
      //Estilos para este selector
  }
  ~~~

  ~~~
  .another_selector {
      @extend .some_selector;
      //Estilos propios de .another_selector
  }
  ~~~

  En este caso .another_selector tendrá todos los estilos propios además de los estilos de .some_selector.

  Un ejemplo típico del uso de esta directiva es la construcción de distintos tipos de botones que tiene la misma forma pero distinto color de fondo:

  ~~~
  .btn {
      border-radius: 2px;
      color: #FFF;
      padding: 5px 0;
      margin: 2px auto;
      text-align: left;
      width: 150px;
  }

  .btn-error {
      @extend .btn;  
      background-color: #F00;  
  }

  .btn-ok {
      @extend .btn;
      background-color: #0F0;
  }
  ~~~

  Puede ser que queramos que uno de los selectores usados no salga en el CSS resultante pero que sí sea usado como base usando la directiva @extend. Para ello tendremos que utilizar un placeholder selector que funciona igual pero tenemos que añadir el carácter % delante del nombre del selector. Un ejemplo:

  ~~~
  %btn {

  }

  .btn-error {
      @extend %btn;  
      background-color: #F00;  
  }

  .btn-ok {
      @extend %btn;
      background-color: #0F0;
  }
  ~~~

  Esta directiva, para usos avanzados tiene algunas peculiaridades que deben ser consultadas en la documentación oficial, pero de manera general podemos hacer algunos apuntes:

  La directiva @ se procesan después del resto (incluidos los selectores referentes a padres o parentescos).
  Copia el estilo en la regla actual.
  Los estilos añadidos tienen preferencia, igual que en HTML+CSS puro.
  Está a limitado a selectores simples (dart-version)
  Usado dentro de una directiva @media solo podremos hacer referencia a selectores dentro de esa directiva.
  Similar a @mixin (comparativa en el capítulo posterior).
  @error / @warning / @debug
  Las directivas @error, @warn y *@debug son directivas útiles cuando estamos depurando nuestro SCSS. Nos permiten mostrar mensajes y valores de variables, funciones etc..durante el proceso de generación del CSS.

  Tienen una sintaxis muy sencilla:

  ~~~
  @error <expression>; //PARA LA COMPILACIÓN

  @warn <expression>;

  @debug <expression>;
  Un posible ejemplo sería:

  $test: false;

  body {
    @if $test {
      @error "Mensaje de error";
      @debug "Test tiene el siguiente valor: #{$test}"; //nuca sale
    }
    else {
      @warn "Mensaje de warning";
      @debug "Test tiene el siguiente valor: #{$test}"; //Sale cuando test es false
    }
  }
  ~~~

  @at-root
  La directiva @at-root permite que selectores dentro de reglas con anidamiento sean movidos a la raíz del documento. Su uso no es algo común y se puede llegar a usar con anidamientos avanzados que usan funciones de selección y selectores referentes a elementos padre. Tiene sentido si seguimos metodologías de nombrado como BEM.

  Tiene una sintaxis muy sencilla:

  ~~~
  @at-root selector {
      //Estilos para ese elemento
  }
  Y una aplicación podría ser la siguiente:


  .item {
      color: black;    
      @at-root #{&}is-active {
        color: blue;
      }
  }
  Que genera el siguiente CSS:


  .item {
    color: black;
  }
  .item.is-active {
    color: blue;
  }
  ~~~

  Vemos con el selector sale a la raíz del documento y genera un selector que une los dos, que es el usado para aquellos elementos que tienen esas dos clases a la vez.

  @media / @support / @keyframes
  Sass soporta las directivas @media, @support y @keyframes que son directivas propias de CSS.

  ## Definición y uso de los mixins, la directiva @include

  La definición de un mixin y su posterior uso es algo muy sencillo:

  ~~~
  //Definición del mixin
  @mixin nombre_del_mixin {
    //Contenido (estilos / etiquetas con estilos etc..)
  }
  ~~~

  ~~~
  //Uso del mixin
  @include nombre_del_mixin;
  ~~~

  Un ejemplo básico sería:

  ~~~
  @mixin centrado {
    margin: 0px auto;
  }

  header {
    @include centrado;

    background-color: black;
    color: white;
  }
  ~~~

  Generando el siguiente CSS:

  ~~~
  .header {
    margin: 0px auto;
    background-color: black;
    color: white;
  }
  ~~~

  Puedo incluir selectores dentro del mixin de tal manera que se pueda usar desde fuera de cualquier otro selector.
  Por ejemplo:

  ~~~
  @mixin highlighted-link {
    a {
      background-color: yellow;
      font-style: italic;
      text-decoration: none;
    }
  }
  @include highlighted-link; //Todo el contenido del mixin de muestra en el css
  ~~~

  Y una de las características más útiles de los mixins es que podemos anidarlos usando la directiva @include dentro de una otra definición de mixin que a su vez, podremos usar posteriormente en otro lugar de nuestras hojas de estilos. Un ejemplo de ese uso podría ser:

  ~~~
  @mixin centrado_menu {
    @include centrado;

    background-color: #666;
    color: white;
    height: 3rem;
  }

  .main_menu {
    @include centrado_menu();
  }
  ~~~

  ### Mixins con parámetros

  La verdadera potencia del uso de los mixins, además de la reutilización de nuestros estilos, reside en la posibilidad que vamos a tener de parametrizarlos. Cada mixins podrá recibir una serie se parámetros, que serán obligatorios u opcionales. En caso de ser opcionales tendremos que asignarles en la definición un valor por defecto.

  Lo vamos a ver de manera muy claro con un ejemplo:

  ~~~
  //Mixin con todos los parámetros obligatorios
  @mixin girar($grados) {
    -webkit-transfrom: rotate(#{gradosdeg}deg);
    -ms-transform: rotate(#{gradosdeg}deg);
    transform: rotate(#{gradosdeg}deg);
  }

  //Mixin con parámetros opcionales y valores por defecto
  @mixin logo($image, $radio: 10px) {
    background-image: url("#{$image}");
    background-position: center;
    border-radius: $radio;
  }

  //Especificando un valor
  .logo-cuadrado {
    @include logo("img/milogocuadrado.png", 0px);
  }

  //Usando el valor por defecto del parámetro opciones
  .logo-redondeado {
    @include logo("img/milogoredondeado.png");
  }
  ~~~

  ### Mixins Vs Extends

  @mixin nos va a permitir el uso de parámetros mientras que @extend no. Eso hace que el uso de @mixin nos de más flexibilidad.
  Con @extend podemos combinar selectores, con @mixin no.
  @extend puede considerarse más adecuado si lo único que queremos es replicar estilos.
  Si usamos @extend con clases y subclases (coge todos los estilos) podemos encontrarnos con que es difícil de prever el código que vamos a generar. Eso es bastante peligroso en sí mismo

  Usos comunes para los mixins
  Hay muchas posibilidades para el uso de la directiva @mixin pero a continuación vamos a citar algunos de los más comunes:

  - Media Queries.
  - Prefijos relativos a los navegadores.
  - Transformaciones CSS.
  - Animaciones CSS.
  - Colocación fija de elementos.
  - Gradientes.

  # SASSDoc

  Requisitos
  Para poder trabajar con SassDoc necesitamos el entorno NodeJs instalado. Es decir:

  Nodejs: Entorno de ejecución para JavaScript.
  Npm: Gestor de paquetes para Node.
  Npx: Para poder ejecutar paquetes Node.
  Para poder instalar todo esto tenemos las instrucciones detalladas, para todos los sistemas operativos, en el siguiente enlace.

  Instalación de Nodejs y asociados.

  Podremos comprobar que todo está bien instalado con los siguientes comandos (pongo las versiones actuales):

  ~~~
  > node --version
  v10.16.3
  > npm --version
  6.9.0
  > npm --version
  6.9.0
  ~~~

  ### Instalación de SassDoc

  Una vez hemos instalado los requisitos necesarios la instalación de SassDocs es muy sencilla. Debemos hacer lo siguiente:

  #### Para instalarlo a nivel global debemos de tener los permisos necesarios
    > npm install sassdoc -g

  #### Para comprobar que la instalación se ha llevado a cabo correctamente
    > sassdoc --version

  ### Uso básico

  Para generar la documentación automáticamente con SassDoc debo:

  En primer lugar añadiré comentarios a mis ficheros Sass. Los comentarios que queramos incluir en la documentación generada por SassDoc deberán comenzar con /// (tres barras invertidas), //// (para afectar a todos los comentarios del doc)
  Estos comentarios se colocarán encima de los elementos que queramos documentar.
  Una vez hayamos añadido todos los comentarios necesarios tendremos que ejecutar el siguiente comando:
  ~~~
  > sassdoc ruta_proyecto_sass [opciones]
  ~~~
  Esto generará por defecto la carpeta sassdoc con toda la documentación generada automáticamente siendo el punto de entrada el fichero index.html.

    @access	    @ignore	    @return
    @alias	    @link	    @see
    @author	    @name	    @since
    @content    @output     @content
    @deprecated	@parameter	@throw
    @example   	@property   @todo
    @group	    @require  	@type

