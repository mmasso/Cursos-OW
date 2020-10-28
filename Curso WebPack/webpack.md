¿Qué es Webpack?
Webpack se define a si mismo como un Module Bundler, pero gracias al sistema de plugins que ofrece tambien puede ser considerado como un Task runner. De tal modo que puede aunar el empaquedado de módulos y la posiblidad de ejecutar tareas como hacen otras librerias como Grunt o Gulp.

Sistema de módulos
En JS podemos encontrar los siguientes sistemas de módulos:

AMD
Commonjs
ES2015
En Webpack podemos usarlos todos.

Componentes de Webpack
Web se compone de:

Entry points
Output
Loaders
Plugins
Configuración en Webpack
Webpack es conducido mediante ficheros de configuración. Aquí definiremos como transformar los assets, el tipo de output que vamos a generar y además configuraremos los plugins.

Hot module replacement (HMR)
Nos ofrece una interface para poder actualizar nuestros módulos sin necesidad de efectur una actualización completa de la página.

Webpack DevServer soporta HMR en hot mode.

Instalando
Podemos instalar Nodejs directamente desde su página oficial. NPM se instalará automaticamente junto con Nodejs

Para instalar Webpack solo tendremos que ejecutar en un proyecto de npm:

npm install webpack webpack-cli --save-dev

Y con esto tendremos instalado Webpack.

Entry y Output
Entry: El módulo de entrada en nuestra aplicación. Aquí empezará el proceso de Webpack

Output: El fichero resultante de aplicar todo el proceso de Webpack

Proceso de ejecución
El proceso de Webpack comienza en los entry points. Primero Webpack tratará de resolver los imports contra el sistema de ficheros. Despues se irán aplicando los loaders contra los ficheros resueltos. Los plugins tambien se ejecutarán en este punto. Finalmente nos generará uno o varios ficheros de salida.

Tipos de ficheros soportados
Webpack irá generando un grafo de dependencias a medida que vaya pasando a traves de todos los imports. Este proceso se puede hacer contra muchos tipos de ficheros.
Los mas habituales con los que trabajaras en Webpack son:

Ficheros Javascript
Imágenes
Fuentes
Videos
Ficheros JSON
Ficheros .vue
Entre muchos otros…