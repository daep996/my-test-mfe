# TestWebpackAngularAngular

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## GENERATE A WORKSPACE
```bash
ng new test-webpack-angular-angular --create-application=false --minimal=true --package-manager=pnpm -S
```

## GENERATE AN APPLICATIONS

I Select CSS and **NO** SSR/Prerendering.

```bash
ng generate application shell --prefix app-shell
```

```bash
ng generate application todo --prefix app-todo
```

## INSTALL FEDERATION PACKAGE
```bash
pnpm i -D -E @angular-architects/native-federation
```

## INICIALIZATION SHELL PROJECT
```bash
ng g @angular-architects/native-federation:init --project shell --port 3003 --type dynamic-host
```

### GENERATE A HOME COMPONENT

just for displaying an input component in shell

```bash
ng g c pages/home --project shell
```

## INICIALIZATION TODO PROJECT
```bash
ng g @angular-architects/native-federation:init --project todo --port 3004 --type dynamic-host
```

### CREATE A COMPONENTS IN TODO TO EXPOSE

just for displaying other component in shell

```bash
ng g c components/fake-table --project todo --standalone true
```

## RUN AND OPEN THE MFE's

```bash
ng s shell
ng s todo
```

View in web broswer:
- http://localhost:3003/
- http://localhost:3004/

View the federation files:
- http://localhost:3003/remoteEntry.json
- http://localhost:3004/remoteEntry.json


## CREDITS:
- https://www.youtube.com/watch?v=H7e0DURQL0s
- https://github.com/manfredsteyer/module-federation-with-angular-dynamic
