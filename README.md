CKEditor 5 classic editor build
========================================

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)
[![Coverage Status](https://coveralls.io/repos/github/ckeditor/ckeditor5/badge.svg?branch=master)](https://coveralls.io/github/ckeditor/ckeditor5?branch=master)
[![Build Status](https://travis-ci.com/ckeditor/ckeditor5.svg?branch=master)](https://app.travis-ci.com/github/ckeditor/ckeditor5)
![Dependency Status](https://img.shields.io/librariesio/release/npm/@ckeditor/ckeditor5-build-classic)

The classic editor build for CKEditor 5. Read more about the [classic editor build](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/predefined-builds.html#classic-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html).

![CKEditor 5 classic editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-classic.png)

## Documentation

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html#building-the-editor-from-source) for how to customize the build (configure and rebuild the editor bundle).

## Instalacion

_Una vez clonado el repositorio_ para hacer uso del editor, solo necesitaras la carpeta build, puedes incluirla en tu proyecto.

Si usas un proyecto laravel, dentro de la carpeta vendor creas otra subcarpeta llamada *ckeditor5-build-classic* y dentro de esa carpeta incluyes la carpeta build del repositorio clonado o descargado.

## Uso Html
Para usar, puedes crear una etiqueta:
```
<textarea id="editor" name="editor"></textarea>
 ```js
## Uso Script
hacemos referencia a la carpeta 'build/ckeditor.js'

Si usas Node

```
<script src="./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>
```js

Si usas Laravel
```
<script src="{{ asset('vendor\ckeditor5-build-classic\build/ckeditor.js') }}"></script>
```js

Luego colocas el siguiente script

```
<script>
        ClassicEditor
            .create( document.querySelector( '#editor' ),{
                mediaEmbed: {
                                previewsInData:true
                            },
                            
            },)
            .catch( error => {
                console.error( error );
            } 
        );
    </script>
```js