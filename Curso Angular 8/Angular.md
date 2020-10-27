# CLI angular

## Instalar

`npm install -g @angular/cli`

Comprobar la instalación con:

`ng v`

## Iniciar proyecto:

`ng new NombreProyecto`

## Inicialización

`ng serve -o` en la carpeta objetivo

## HTML

El html es la base para los templates de angular 8.

### Html normal

Vamos a encontrar las etiquetas de siempre:

<head>
<p></p>

### Nuevas etiquetas

<app-component></app-component>

nos van a ser muy familiares a la hora de usar componentes.

### Nuevos caracteres

Encontraremos entre el html caracteres como {}, (), [()], #etiqueta, etc …, que nos servirán para incluir “hook” entre el html de los templates y las clases escritas en typescript. Estos caracteres son directivas de varios tipos, las veremos más adelante.

### Elementos html que usaremos

Para aprovechar la evolución del frontend, vamos a utilizar los componentes de “material” incluidos dentro de angular, acompañados de elementos de html simples.

### Bootstrap para la colocación

Para la colocación de estos elementos vamos a utilizar una librería externa “bootstrap” que nos simplifica la manera de distribuir los elementos y nos permite hacer estilos “responsivos”.
Para usar bootstrap, lo incluiremos dentro de nuestro index.html como una librería externa.

La ventaja de usar bootstrap de esta manera, es que al descargarse de mismo sitio que un alto número de páginas comunes, es mucho más probable que ya esté en la caché del navegador y sea aún más rápida la carga.

## Typescript

Es un nuevo lenguaje que usa la sintaxis de javascript, sin embargo está orientado a objetos y está tipado. Cuando compilamos typescript, se genera javascript de alto rendimiento.

Vista previa a un archivo ts


    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app-avisos',
    templateUrl: './avisos.component.html',
    styleUrls: ['./avisos.component.scss']
    })
    export class AvisosComponent implements OnInit {

    activo = true;
    private mensaje: string;
    public visible: boolean;

    constructor() { 
        this.mensaje = "Correo enviado";
        this.visible = false;
    }

    ngOnInit() {
        this.showMenssage('Correo Enviado');
    }

    showMenssage(mensaje: string){
        this.mensaje = mensaje;
        this.visible = true;
        this.waitToHide();
    }

    hideMenssage(){
        this.visible = false;
        this.mensaje = '';
    }

    waitToHide(){
        setTimeout(() => {
        this.hideMenssage();
        }, 2000);
    }
    }

## Partes de un archivo

### Imports

`import { Component, OnInit } from '@angular/core';`

Podemos ver un ejemplo de importación. Aquí incluimos los ficheros externos que se necesiten usar en la clase.

### Cabecera

`export class AvisosComponent implements OnInit`

En esta parte se especifica el nombre de la clase, interfaces que implementa o las clases de las que hereda.

Existen muchísimas interfaces para muchos usos en angular, podemos generar las que nosotros necesitemos y nos ayudan en muchos tipos de propósitos.

La herencia también puede darse de muchas maneras y nos resultará útil cuando queramos reutilizar comportamientos comunes.

### Variables

    activo = true;
    private mensaje: string;
    public visible: boolean;

Deben declararse junto a su tipo al inicio de la clase y serán usadas para almacenar información temporal que estará siempre disponible en los templates.

    Constructor
    constructor() { 
        this.mensaje = "Correo enviado";
        this.visible = false;
    }

Cuando una clase se inicia, este método será siempre el primero en ejecutarse.
En este método es donde se provee de servicios a un componente, además normalmente en él, se suelen inicializar las variables.

    ngInit(){}
    ngOnInit() {
        this.showMenssage('Correo Enviado');
    }

Es una función propia de angular y perteneciente al ciclo de vida de los componentes. Esta función se ejecutará cuando el componente esté iniciado en la vista.

### Función simple

    hideMenssage(){
        this.visible = false;
        this.mensaje = '';
    }

Declaración de una función simple, esta función se puede asociar con un evento en un template de angular y ser ejecutada de forma automática al, por ejemplo, pulsar un botón.

### Privado y público

Estos identificadores nos permitirán restringir el acceso a determinadas variables o funciones de una clase, al ser privados. Esto tiene ventajas como simplificar su uso desde fuera, o evitar que se utilice la función errónea al actualizar una variable.

### Objetos {}

En javascript y typescript, los objetos son la base de todo. Todos los tipos de clases son exportadas como objetos javascript tras compilarse.

Además de que es una manera eficiente de organizar información para ser usada en todos los puntos de nuestra aplicación, se almacenada de forma simple, ser transmitida en servicios, etc …

En typescript el tipo any o object, serán dos tipos para modelar nuestras variables, pero si queremos sacar el máximo partido a este lenguaje, debemos crear nuestros propios tipos de objetos para trabajar con ellos. Esto lo haremos generando interfaces o clases.

Cuando en nuestra aplicación generemos el componente correo, podremos realizarlo usando por separado las variables para título y cuerpo, pero al crear nuestra interfaz de correo, toda esa información se almacenará en una misma variable.

### Arrays

Poco tiene que decirse de los arrays que ya no podamos saber tras trabajar con cualquier lenguaje similar a javascript.

En ellos colocaremos las listas de información para usar en nuestra aplicación y será el tipo de dato destinado a ser recorrido para mostrar todas sus partes para todo tipo de usos.

Ficheros de angular
index.html: Es el primer fichero que se ejecuta, contiene la cabecera con las importaciones e inicia el contenido principal de la aplicación.
styles.scss: Los estilos principales de la aplicación.
app/app.component.ts: El primer componente que se ejecuta tras el index.html
app/app.module.ts: Indica al sistema el conjunto de ficheros que se tendrán en cuenta en la aplicación y deben estar disponibles.
Organización de carpetas por tipos
Interfaces: Estos elementos nos ayudan en typescript a la hora de interactuar con objetos.
Components: Los componentes de nuestra aplicación, todo aquello que se pueda usar como tal.
Services: Incluiremos los ficheros para tratar con servicios web, pero también los que necesitemos para interconectar otros componentes o extraer código. Este tipo de ficheros (services) serán los que contengan la lógica de la aplicación.
Views: Para mejorar la clasificación de ficheros, aquí deberías incluir todos aquellos componentes que componen las vistas de nuestra aplicación, y en ellos importar nuestros componentes.
Menu: Al igual que las vistas, es una buena opción incluir aquí los componentes que componen el menú de la aplicación.
En angular un componente en la unidad mínima. Todo se basa en que todo es un componente que interactúa con más componentes de muchas formas.

Esto hace que la reutilización sea mucho más fácil y a su vez la composición y creación de nuevas partes sea más rápida y con menos errores.

Hemos generado un componente correo para mostrar el contenido de un correo, pero este componente ya podemos usarlo de muchas otras formas fácilmente.

Podemos mostrarlo en una vista como en el ejemplo anterior.

Podemos incluirlo en futuros componentes como uno en el que el correo aparece en un modal emergente en la pantalla, usando el mismo componente base, el correo.

CLI Angular
Podemos usar CLI de Angular para generar un nuevo componente con el siguiente comando:

ng generate component <nombre> [opciones]
Simplificado en:

ng g c <nombre> [opciones]
Más Documentación
CLI compoment

Directivas que encontraremos
- {{ variable }} : Nos sirve para mostrar el contenido de una variable.

- [(ngModel)] : Para enlazar variables a elementos del DOM, como a un input.

- ( event ) :  Para capturar y asignar a funciones eventos disparados en los templates, como el evento click, básico para cualquier objetivo.

- <app-component></app-component> : Las directivas para los componentes.

- [ variable ] : Para incluir información a componentes.

- *ngFor o *ngIf que nos servirán como if y for, los veremos en profundidad a continuación.