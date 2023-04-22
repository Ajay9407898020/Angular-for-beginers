

*************************Typescript Demo******************************

Typescript data type is typed like if we assign string value can then that variable considered to be string then can not assign with number or any other datatype other that string


1. Functions: 

Different ways to write function </br>
    Arrow
    function Declaration
    Function Expression
    Generic Function 
    Optional Parameter
    Required Parameter

2. Classes </br>

    Introduction to calsses
    Creating classes
    Class Properties and constructor
    Class Methods
    Creating Instances of class
    Memeber visibility
    Static Members

3. Interface </br>
    Create Interfaces
    Using Interfaces as Types
    Implementing Interface
    Extending Interfaces
    object destructuring
    Array Destructuring
    rest operator

4. Modules </br>
    ES Modules 
    import/export 
    Compiling Typescripts to different JS version


***************************Angular Basics*********************************

1. Setup & Installation : </br>
    Installation Angular CLI 13.0.1
    Create new empty workspace using CLI
    Create a workspace with default app
    Workspace walkthrough
    Introduction to mono-repo

# Create Empty Workspace using cmd
$ ng new hotelinventoryapp --createApplication=false

# Then Add app in it
$ ng g app hotelinventory

# Also We can create workspace with default app this is we generally use in day to day life
$ ng new hotelinventory

# Walkthrought of workspace
1. src/ : all code based files presents here
    polyfills.ts:  Typescript file can be compiled down to any version of javascript but here does all browser support all version of javascript so ans is NO so to make it compatible require this file

    main.ts: Entry points of app


2. node_modules: installed packages

3. package.json: Required package required to run an app </br>
    a. dependencies: any pacakages required for production up in running comes under this. </br>
    b. devdependencies: any packages required for development purpose.

4. tsconfig.app.json: having .ts conf as same as tsconfig.json file.

5. tsconfig.json: configuration of .ts (Typescript) files.

6. angular.json: information about angular workspaces.

7. karma.conf.json: configuration for testing which is default .



2. Introduction to Mono-repo </br>
    Create and maintain multiple apps in same repo. </br>
    Use Libraries within the project. </br>
    Deploy Multiple apps/libs from same repo. </br>
    Easy to share code within the project. </br>
We can share libraries with in apps also we can deploy multiple apps with same monorepo. </br>
It also helps of sharing code with one another easy


3. Create component </br>
$ ng g c <component name>

4. Binding Syntax </br>
    Interpolation - {{}} </br>
    Property binding - [] </br>
    Event Binding - () </br>

5. Directives
    Introduction: </br>
        Directives are use to change behavior and appearance of DOM element. </br>
        Directives can implement all lifecycle hooks. </br>
        Directives can not have template. </br>
    Types of Directives </br>
        Structural Directives </br>
        Attribute Directives </br>
    Built-in Directives </br>
        *ngIf, *ngFor, *ngSwitch, ngClass, ngStyles </br>

6. Pipes </br>
    Introduction </br>
        Pipes are used for data transformation </br>
        Pipes donn't change actual object </br>
    Built-in Pipes </br>
        Date, UpperCase, LowerCase, Currency, Decimal, Percent, Json, Slice, Async </br>

7. Add Bootstrap using Style.css and angular.json files </br>


# Angular Intermediate

8. Lifecycle Hooks
-> Component instance has lifecycle hooks which can help you to hook into different evets On component. </br>
-> Life cycle ends when component is destroyed

ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy

9. Ways of component communication</br>
    Input/Output decorator
    Viewchild decorator
    Services

10. ChangeDetection: </br>
    As data updates so related view also get update called as change detection </br>
    We also can apply changedetection strategy mannually in @Componenet decorator </br>
    We have two option to do that </br>

    a. Default: 
    b. OnPush: It should Only apply to those component having no change internally like itself component is not changing data either parents.

    @Component({</br>
        selector: 'hinv-rooms-list',</br>
        templateUrl: './rooms-list.component.html',</br>
        styleUrls: ['./rooms-list.component.scss'],</br>
        changeDetection: ChangeDetectionStrategy.OnPush,</br>
    })</br>

    ONPUSH : Here We should follow the concept called immutability if onpush strategy applied on child component

    - Remember if any modified array (using push) we pass to child component the view will not be update 
    - We require the new instance of array only

11. ngAfterViewInit: always execute after view rendered and we should use when we use @viewChild decorator</br>

- Here is some catch that you will always have one error in console due to double check in dev mode and you can ignore it</br>

- MOST IMP: Suppose we instantiate component (headercomponent) using viewchild decorator in parent component (roomscomponent) and use static property true then It is consider that header component having no Asyncronous programming so we are free to use that instance in ngOninit of parent component</br>

If instantiate(header component) having Asyncronous program then we should not use static property becuse bydefult it is false and use that instance in ngAfterViewInit() parent component</br>

- if we use template ref (ngTemplate with #variale ) use read property of viewchild decorator :pls check app.component.html</br>

- Dynamically loading component using viewContainerRef.createComponent check exp in app component</br>

- If any component rendered more than one time using <hinv-header></hinv-header> then we should using viewChildren decorator </br>

12. Template Refrence
