# angular-utn-hx
repo created for UTN - FRP speaking

## before we start

### What it is Angular?

Angular it's an [open-source](https://opensource.org/) front-end web application framework. It is primarily sustained by Google together with an extended community of people and companies, to approach many of the challenges faced when developing single page, cross platform, performant applications. It is fully extensible and works well with other libraries. 

### Angular requirements: Install NodeJS and npm

[nodeJs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are fundamental to modern web development using Angular and other platforms. Node empowers client development and build tools. We are gonna use the node package manager (npm) to install all the JavaScript libraries dependencies.

### The Angular CLI

Angular apps are created and developed primarily through the [Angular](https://cli.angular.io/) CLI (command line interface tool) that helps project creation, adding files, and performing a variety of ongoing development tasks.

The [Angular CLI](https://cli.angular.io/) takes care of configuration and initialization of various libraries. It also helps us adding components, directives, services, etc, to already existing Angular applications. It’s also worth mentioning that the CLI uses Typescript and Webpack for module bundling, Karma for unit testing, and Protractor for an end to end testing. It includes everything you need to start writing your Angular 2 application right away.

To install the Angular CLI globally, run the following command on your console ```npm install -g @angular/cli```

### Now, let’s get started building the Angular app example project

```ng new “utn-angular”```

### What this command do?

1. Creates a new directory “utn-angular”
2. Downloads and installs Angular libraries and any other dependencies
3. Installs and configures TypeScript
4. Installs and configures Karma & Protractor (testing libraries)

### Running the APP

```ng serve```

This command runs the compiler in watch mode (looks for changes in the code and recompiles if needed), starts the server, launches the app in a browser, and keeps the app running while we continue building it.

The Webpack Development server listens on HTTP port 4200. Hence, if you open the url [http://localhost:4200/](http://localhost:4200/) you will see the app running.

### Using the Angular CLI to add new pages

To create a new component you can use the following command:

```
ng generate component my-new-component
ng g component my-new-component # using the alias
```

```Python
Create app/pages/my-page/my-page.html
Create app/pages/my-page/my-page.ts
Create app/pages/my-page/my-page.scss
```

The angular-CLI will add a reference to components, directives and pipes automatically in the `app.module.ts.`

### Angular apps architecture

Angular is a framework designed to build single page applications (SPAs) and most of its architecture design is focused towards doing that in an effective manner.

Single-page application (or SPA) are applications that are accessed via web browser like other websites but offer more dynamic interactions resembling native mobile and desktop apps. The most notable difference between a regular website and SPA is the reduced amount of page refreshes.

Typically, 95 percent of SPA code runs in the browser; the rest works in the server when the user needs new data or must perform secured operations such as authentication.

As a result, the process of page rendering happens mostly on the client-side.

#### Angular Modules

**Modules** help organize an application into cohesive functionality blocks by wrapping components, pipes, directives, and services. They are just all about developer ergonomics.

Angular applications are modular. Every Angular application has at least one module— the root module, conventionally named AppModule. The root module can be the only module in a small application, but most apps have many more modules. As the developer, it's up to you to decide how to use the modules. Typically, you map major functionality or a feature to a module. 

Let's say you have four major areas in your system. Each one will have its own module in addition to the root module, for a total of five modules.

Any angular module is a class with the `@NgModule` decorator. Decorators are functions that modify JavaScript classes. They are basically used for attaching metadata to classes so that it knows the configuration of those classes and how they should work. The @NgModule decorator properties that describe the module are:

1. declarations: The classes that belong to this module and are related to views. There are three classes in Angular that can contain views: components, directives and pipes.
2. exports: The classes that should be accessible to other modules components.
3. imports: Modules whose classes are needed by the components of this module.
4. providers: Services present in one of the modules which are going to be used in the other modules or components. Once a service is included in the providers, it becomes accessible in all parts of that application.
5. bootstrap: The root component which is the main view of the application. Only the root module has this property and it indicates the component that’s gonna be bootstrapped.
6. entryComponents: An entry component is any component that Angular loads imperatively, (which means you’re not referencing it in the template), by type.

#### Angular Components

Components are the most basic building block of an UI and Angular applications. A component controls one or more sections on the screen (what we call views).

A component is self contained and represents a reusable piece of UI that is usually constituted by three important things:

1. A piece of html code that is known as the view
2. A class that encapsulates all available data and interactions to that view through an API of properties and methods architectured by Angular. Here’s where we define the application logic (what it does to support the view)
And the aforementioned html element also known as selector.

Using the Angular `@Component` decorator we provide additional metadata that determines how the component should be processed, instantiated and used at runtime. For example we set the html template related to the view, then, we set the html selector that we are going to use for that component, we set stylesheets for that component.

The Component passes data to the view using a process called **Data Binding**. This is done by Binding the DOM Elements to component properties. Binding can be used to:

* display property values to the user
* change element styles
* respond to an user event
* etc

A component **must belong to an ```NgModule```** in order for it to be usable by another component or application. To specify that a component is a member of an NgModule, you should list it in the declarations property of that NgModule.

One side note on the components importance from a point of software architecture principles: It’s super important and recommended to have separate components, and here’s why. Imagine we have two different UI blocks in the same component and in the same file. At the beginning, they may be small but each could grow. We are sure to receive new requirements for one and not the other. Yet every change puts both components at risk and doubles the testing burden without any benefits. If we had to reuse some of those UI blocks elsewhere in our app, the other one would be glued along.

A typical Angular application looks like a tree of components. The following diagram illustrates this concept. Note that the modal components are on the side of the parent component because they are imperative components which are not declared on the component html template.

![angular app structure](https://s3-us-west-2.amazonaws.com/angular-templates/tutorials/learn-angular-from-scratch-step-by-step/learn-angular-from-scratch-step-by-step-tree-of-components.png)

### Angular app tree of components

#### Angular building blocks: Templates

Templates are used to define a component view. A template looks like regular HTML, but it also has some differences. Code like ```*ngFor```, ```{{hero.name}}```, ```(click)```, and ```[hero]``` uses Angular template syntax to enhance HTML markup capabilities. Templates can also include custom components like <custom-element> in the form of non-regular html tags. These components mix seamlessly with native HTML in the same layouts.

#### Angular building blocks: Services

Almost anything can be a service, any value, function, or feature that your application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. The main purpose of Angular Services is sharing resources across components.

Take Component classes, they should be lean, component's job is to enable the user experience (mediate between the view and the application logic) and nothing more. They don't fetch data from the server, validate user input, or log directly to the console. They delegate such tasks and everything nontrivial to services.

**Services are fundamental to any Angular application, and components are big consumers of services as they help them being lean.**

```
//gets all the question categories from a local json
getCategories(){
  return this.http.get("./assets/categories.json")
  .map((res:any) => res.json())
  .toPromise();
}

//finds a specific category by slug
getCategoryBySlug(slug: string){
  return this.getCategories()
  .then(data =>{
    return data.categories.find((category) => {
      return category.slug == slug;
    });
  })
}
```

### Angular example app project structure

After following the setup instructions for creating a new project in the previous section, let’s walk through the anatomy of our Angular app. The cli setup procedures install lots of different files. Most of them can be safely ignored.

In the project root we have three important folders and some important files:

```/src/```

This is the most important folder. Here we have all the files that make our Angular app.

```/e2e/```

This folder is for the End-to-end tests of the application, written in Jasmine and run by the protractor e2e test runner. Please note that we will not enter in details about testing in this post.

```nodemodules/```

The npm packages installed in the project with the npm install command.

```package.json```

As every modern web application, we need a package system and package manager to handle all the third-party libraries and modules our app uses. Inside this file, you will find all the dependencies and some other handy stuff like the npm scripts that will help us a lot to orchestrate the development (bundling/compiling) workflow.

```tsconfig.json```

Main configuration file. It needs to be in the root path as it’s where the typescript compiler will look for it.

```webpack.config.js```

Main configuration file, it needs to be in the root path as it’s where the typescript compiler will look for it.
Inside of the /src directory we find our raw, uncompiled code. This is where most of the work for your Angular app will take place. When we run ng serve, our code inside of /src gets bundled and transpiled into the correct Javascript version that the browser understands (currently, ES5). That means we can work at a higher level using TypeScript, but compile down to the older form of Javascript that the browser needs.

Under this folder you will find two main folder structures.

```/app```

has all the components, modules, pages you will build the app upon.

```/environments```

this folder is to manage the different environment variables such as dev and prod. For example we could have a local database for our development environment and a product database for production environment. When we run ng serve it will use by default the dev env. If you like to run in production mode you need to add the --prod flag to the ng serve.

```index.html/```

It’s the app host page but you won’t be modifying this file often, as in our case it only serves as a placeholder. All the scripts and styles needed to make the app work are gonna be injected automatically by the webpack bundling process, so you don’t have to do this manually. The only thing that comes to my mind now, that you may include in this file, are some meta tags (but you can also handle these through Angular as well).

And there are other secondary but also important folders

```/assets```

in this folder you will find images, sample-data json’s, and any other asset you may require in your app.
Angular best practices: The app folder
This is the core of the project. Let’s have a look at the structure of this folder so you get an idea where to find things and where to add your own modules to adapt this project to your particular needs.

```/shared```

The SharedModule that lives in this folder exists to hold the common components, directives, and pipes and share them with the modules that need them.

It imports the CommonModule because its component needs common directives. You will notice that it re-exports other modules. If you review the application, you may notice that many components requiring SharedModule directives also use NgIf and NgFor from CommonModule and bind to component properties with [(ngModel)], a directive in the FormsModule. Modules that declare these components would have to import CommonModule, FormsModule, and SharedModule.

You can reduce repetition by having SharedModule re-export CommonModule and FormsModule so that importers of SharedModule get CommonModule and FormsModule for free. SharedModule can still export FormsModule without listing it among its imports.

```/styles```

Here you will find all the variables, mixins, shared styles, etc, that will make your app customizable and extendable.
Maybe you don’t know Sass? Briefly, it is a superset of css that will ease and speed your development cycles incredibly.

```/services```

Here you will find all the services needed in this app. Each service has only the functions related to it.
Other folders.

To gain in code modularity, we’ve created a folder for each component. Within those folders you will find every related file for the pages included in that component. This includes the html for the layout, sass for the styles and the main page component.

```app.component.html```

This serves as the skeleton of the app. Typically has a <router-outlet> to render the routes and their content. It can also be wrapped with content that you want to be in every page (for example a toolbar).

```app.component.ts```

It’s the Angular component that provides functionality to the app.component.html file I just mentioned about.

```app.routes.ts```

Here we define the main routes. These routes are registered to the Angular RouterModule in the AppModule. If you use lazy modules, child routes of other lazy modules are defined inside those modules.

```app.module.ts```

This is the main module of the project which will bootstrap the app.
As we advance in this tutorial we will be creating more pages and perform basic navigation.

