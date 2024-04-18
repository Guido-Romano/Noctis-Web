ANGULAR.JSON

"options": {
    "outputPath": "docs (ejemplo, aca va la carpeta donde va a ir a buscar la compilacion)",
    "index": "src/index.html",
    ...
}


para crear rama directamente en DOCS (luego poner esa misma ruta en github)
ng build --configuration production --output-path docs --base-href /turepositorio/
git add docs
git commit -m "Compilación de la aplicación Angular para producción en docs"
git push origin main

comandos generales para inicializacion
  git add .
  git commit -m "Actualización de los archivos de producción"
  git push
  git push origin main

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
