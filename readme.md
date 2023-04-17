

*************************Typescript Demo******************************

Typescript data type is typed like if we assign string value can then that variable considered to be string then can not assign with number or any other datatype other that string


1. Functions: 

Different ways to write function
    Arrow
    function Declaration
    Function Expression
    Generic Function 
    Optional Parameter
    Required Parameter

2. Classes

    Introduction to calsses
    Creating classes
    Class Properties and constructor
    Class Methods
    Creating Instances of class
    Memeber visibility
    Static Members

3. Interface
    Create Interfaces
    Using Interfaces as Types
    Implementing Interface
    Extending Interfaces
    object destructuring
    Array Destructuring
    rest operator

4. Modules
    ES Modules 
    import/export 
    Compiling Typescripts to different JS version


***************************Angular Basics*********************************

1. Setup & Installation
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

#Walkthrought of workspace
1. src/ : all code based files presents here
    polyfills.ts:  Typescript file can be compiled down to any version of javascript but here does all browser support all version of javascript so ans is NO so to make it compatible require this file

    main.ts: Entry points of app


2. node_modules: installed packages

3. package.json: Required package required to run an app
    a. dependencies: any pacakages required for production up in running comes under this
    b. devdependencies: any packages required for development purpose

4. tsconfig.app.json: having .ts conf as same as tsconfig.json file

5. tsconfig.json: configuration of .ts (Typescript) files

6. angular.json: information about angular workspaces 

7. karma.conf.json: configuration for testing which is default 



2. Introduction to Mono-repo
    Create and maintain multiple apps in same repo
    Use Libraries within the project
    Deploy Multiple apps/libs from same repo
    Easy to share code within the project
# We can share libraries with in apps also we can deploy multiple apps with same monorepo
# It also helps of sharing code with one another easy


3. Create component
$ ng g c <component name>

4. Binding Syntax
    Interpolation - {{}}
    Property binding - []
    Event Binding - ()

5. Directives
    Introduction: 
        Directives are use to change behavior and appearance of DOM element.
        Directives can implement all lifecycle hooks.
        Directives can not have template.
    Types of Directives
        Structural Directives
        Attribute Directives
    Built-in Directives
        *ngIf, *ngFor, *ngSwitch, ngClass, ngStyles

6. Pipes
    Introduction
        Pipes are used for data transformation
        Pipes donn't change actual object
    Built-in Pipes
        Date, UpperCase, LowerCase, Currency, Decimal, Percent, Json, Slice, Async

7. Add Bootstrap using Style.css and angular.json files