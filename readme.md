

*************************Typescript Demo******************************

Typescript data type is typed like if we assign string value can then that variable considered to be string then can not assign with number or any other datatype other that string


1. Functions: Different ways to write function:
    - Arrow
    - function Declaration
    - Function Expression
    - Generic Function 
    - Optional Parameter
    - Required Parameter

2. Classes:

    - Introduction to calsses
    - Creating classes
    - Class Properties and constructor
    - Class Methods
    - Creating Instances of class
    - Memeber visibility
    - Static Members

3. Interface: 
    - Create Interfaces
    - Using Interfaces as Types
    - Implementing Interface
    - Extending Interfaces
    - object destructuring
    - Array Destructuring
    - rest operator

4. Modules: 
    - ES Modules 
    - import/export 
    - Compiling Typescripts to different JS version


***************************Angular Basics*********************************

1. Setup & Installation :
    - Installation Angular CLI 13.0.1
    - Create new empty workspace using CLI
    - Create a workspace with default app
    - Workspace walkthrough
    - Introduction to mono-repo

- Create Empty Workspace using cmd
    - $ ng new hotelinventoryapp --createApplication=false

- Then Add app in it
    - $ ng g app hotelinventory

- Also We can create workspace with default app this is we generally use in day to day life
    - $ ng new hotelinventory

- Walkthrought of workspace
1. src/ : all code based files presents here
    - polyfills.ts:  Typescript file can be compiled down to any version of javascript but here does all browser support all version of javascript so ans is NO so to make it compatible require this file

   - main.ts: Entry points of app


2. node_modules: installed packages

3. package.json: Required package required to run an app
    - dependencies: any pacakages required for production up in running comes under this.
    - devdependencies: any packages required for development purpose.

4. tsconfig.app.json: having .ts conf as same as tsconfig.json file.

5. tsconfig.json: configuration of .ts (Typescript) files.

6. angular.json: information about angular workspaces.

7. karma.conf.json: configuration for testing which is default .



2. Introduction to Mono-repo :
    - Create and maintain multiple apps in same repo. 
    - Use Libraries within the project. 
    - Deploy Multiple apps/libs from same repo. 
    - Easy to share code within the project. 
- We can share libraries with in apps also we can deploy multiple apps with same monorepo. 
- It also helps of sharing code with one another easy


3. Create component: 
    - $ ng g c <component name>

4. Binding Syntax:  
    - Interpolation - {{}} 
    - Property binding - [] 
    - Event Binding - () 

5. Directives:
    - Introduction: 
        - Directives are use to change behavior and appearance of DOM element. 
        - Directives can implement all lifecycle hooks. 
        - Directives can not have template. 
    - Types of Directives 
        - Structural Directives 
        - Attribute Directives 
    - Built-in Directives 
        - *ngIf, *ngFor, *ngSwitch, ngClass, ngStyles 

6. Pipes :
    - Introduction 
        - Pipes are used for data transformation 
        - Pipes donn't change actual object 
    - Built-in Pipes 
        Date, UpperCase, LowerCase, Currency, Decimal, Percent, Json, Slice, Async 

7. Add Bootstrap using Style.css and angular.json files 


***************************Angular Intermediate Level 1*********************************

8. Lifecycle Hooks
   - Component instance has lifecycle hooks which can help you to hook into different evets On component.
   - Life cycle ends when component is destroyed

   - ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

9. Ways of component communication</br>
    - Input/Output decorator
    - Viewchild decorator
    - Services

10. ChangeDetection: </br>
    As data updates so related view also get update called as change detection </br>
    We also can apply changedetection strategy mannually in @Componenet decorator </br>
    We have two option to do that </br>

    - Default: 
    - OnPush: It should Only apply to those component having no change internally like itself component is not changing data either parents.

    @Component({</br>
        selector: 'hinv-rooms-list',</br>
        templateUrl: './rooms-list.component.html',</br>
        styleUrls: ['./rooms-list.component.scss'],</br>
        changeDetection: ChangeDetectionStrategy.OnPush,</br>
    })</br>

    - ONPUSH : Here We should follow the concept called immutability if onpush strategy applied on child component

    - Remember if any modified array (using push) we pass to child component the view will not be update 
    - We require the new instance of array only

11. ngAfterViewInit: always execute after view rendered and we should use when we use @viewChild decorator

- Here is some catch that you will always have one error in console due to double check in dev mode and you can ignore it

- MOST IMP: Suppose we instantiate component (headercomponent) using viewchild decorator in parent component (roomscomponent) and use static property true then It is consider that header component having no Asyncronous programming so we are free to use that instance in ngOninit of parent component</br>

- If instantiate(header component) having Asyncronous program then we should not use static property becuse bydefult it is false and use that instance in ngAfterViewInit() parent component</br>

- If we use template ref (ngTemplate with #variale ) use read property of viewchild decorator :pls check app.component.html</br>

- Dynamically loading component using viewContainerRef.createComponent check exp in app component</br>

- If any component rendered more than one time using <hinv-header></hinv-header> then we should using viewChildren decorator </br>

12. Template Refrence


*****************Angular InterMediate Level 2***************************************

13. Dependency Injection
    - Introduction
        - Dependencies are service or objects needed by classes to perform some function
        - It's a design pattern
        - Angular has built-in Dependency injection support
    - Component Interaction Using Service
        - Sharing data between multiple components
        - Sharing data within App

    - Resolution Modifiers
        - self Decorator: As we add self decorator with service in a component ex employee component then angular will search that service in current employee folder location if it is not found will raise Null injector error insted of going app moudle or something else 
        
        - skip slef decorator: If the service injected using skipself decorator then angular want the service to be placed above the current postion of component other wise raise an error you can check rooms.component.ts file 

        - Optional decorator: If the service is injected using optional decorator then It indicates that if service is present then only execute otherwise skip that 
            - Use case schenario: when if we want that service available in dev but not in production in such time we use this (Logger.service.ts)
    - DI Providers
        - Class based providers
            - ng g s <service-name>
            - Injecting a service
            - Consuming a service
            - root: 
                - In old days we have to register service in providers array of app module and issue here was if we not using that service by any chance still that service gets bundeled.
                - Solution were to use provided in root inside @Injectable decorator which means the same but if we are not using that service does not let add servie in bundled.
                - root also means that It will create only single instance of a service no matter how many time of service class instantiate you can check to write console in service class constructor.(rooms.service.js)
                - Flow Dig
                <img src="./dependency-service-flow-dig.png" ></img>
            - any  
        - VALUE PROVIDERS: VERY IMPORTANT CONCEPTS 
            - If any resource that we don't want to use directly due to the risk of modification or something else we should use value provider concept and genrally we use @Inject() decorator
            - Go to appconfig.service.ts file to verify and how it is use
            - Also we can do the same for using localstorage API
        - Factory     

14. Angular HTTP Request Module
    - Introduction:
        - In enterprise apps, You need to interact with API's
        - You may be familiar with ajax,fetch
        - HttpClient Service Provided by Angular to interact with API's
        - HttpClient internally uses RXJS
    - Setting Up HttpClient
        - We need to import HttpClientModule
        - Once module is imported we can inject HttpClient Service
    - Using HttpClient Service
    - Rxjs, Observable and streams
        - RXJS is an library for writing Reactive Programming
        - Observable are stream of data to which we can subscribe
            - Observable : It bradcast the stream of data 
            - Observer : It checks wether the data has changed if yes then calls the next() method internally and in subscribtion we can get the new data
    - http methods
        - GET, PUT, POST, DELETE
    - HTTPRequest API: When you want full control on requesting api like if you want to do something on these folowing event happens then you can do insted of using http.get() method becouse it does not gives this controls  
        - Request send: notfication card having req send msg
        - Data loading: show some loaded data first
        - Download progress:  show loading symbol
        - Response: show response body once get
        - check the roomcomponent.ts ngoninit 
    - async Pipe: If the data is only we want to get and we subscribe has to unsubscribe as well so the best way to do it is to use async pipe which make subscribe and unsubscribe as well
        - Remember async pipe can return null so handle accordingly 
        - Try to avoid multiple async pipe in one html rather you can use alias and use that alias
            - roomsList$ | async as rooms 
    - Rxjs Operator:
        - shareReply: It help to cash the request so you don't have to request again if request made more than one time
        - catchError: It helps to handle error if api response Error response
        - subject: It act as observable and observer as well
        -Map: modify the stream of data using this 
    - Http Interceptors: 
        - Allow us to intercept every request
        - We can change data and add headers
        - {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
            }
        - HTTP_INTERCEPTORS it is a service use for intercepting request 
        - Angular itself add many interceptor in request and also we can add interceptor in it 
        - Interceptor only works sequencially in case you have multiple interceptors
        - we can intercept request only for POST method or PUT method or GET method check this RequestInterceptor
    - APP_INITIALIZERS
        - APP_INITIALIZER allow you to inject function as applications startup or initialize

15. Angular Router
    - Introduction
        - Provides the functionality to add Routes
        - Developers can configure all the routes at Front-End
        - Provides SPA functionality
        - Feature to add nested routes
    - Setup Router
        - Import RouterModule
        - forRoot method allows us to add multiple route config
        - Default route : empty url should redirect  ex - { path: '', redirectTo :'/rooms', pathMatch: 'full'  },
        - Dynamic route
        - Wild card route: the url given not present in routes should be redirect to error page
    - Using ActivatedRoute Service
    - Using Router Service
    - Feature Module and Routing
    - Nested Routing and Child Routes
    - Lazy Loading
    - Route Guards
