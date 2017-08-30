# React: ES6, ES2016, and Beyond
Carl Peaslee's LinkedIn Learning course [here](https://www.linkedin.com/learning/react-es6-es2016-and-beyond/welcome)

## Getting Started
- $ Yarn install
- $ Yarn start

## Built With
- React, Yarn, ES6+.

## Variables and Declarations
### When choosing `Const`, `Let` and `Var`:
- What is the scope?
- Can these variables be redeclared?
- Can this variable be reassigned?
- Can this variable be hoisted?
```
            var               const          let
scope       global or local   block          block
redeclare?  yes               no             no
reassign?   yes               no             yes
hoisted?    yes               no             no
```
### Import/Export syntax
- You can import/export a `class`, `function`, but not `const`
- `variables` export work as sortof sub-exports
- importing with brackets allows for importing sub-modules from a directory

### Importing styled components
- $ yarn add styled-components
- `import styled from 'styled-components'`
- `export const Button = styled.button`

``

### Arrow Functions
- Most succinct: `withACallBack('very short', options => options)`

### Destructuring assignments
- to destructure an object we declare a
new variable and then choose any number
of keys to create into stand alone variables
we also specify the object we're destructuring
- use destructuring with arrays so if I have an array called horsdoeuvres and in it I've named all these delicious horsdoeuvres and I wanted to structure that, you can use almost the same syntax as object destructuring but with an array. So I can create a new variable that holds the index of these objects and I can skip over ones that I don't want to access, and then later on in my code, I can access those variables as these variable names, rather than as, say, horsdoeuvre, square bracket, one.
- Quiz  
  - You cannot mix object assembly shorthand and the traditional object declaration
  syntax.
    - false

## Arguments and Template Literals
### Spread Operator
- `...` that allows you to pull apart the values of an array and make use of them as though they were instead a series or collection of values, rather than a traditional array.
```
<Container>
  {...props}
</Container  
```
- very useful for helping you disassemble arrays, and in some cases, objects, and if you don't have the spread operator available to you for objects, you can use Object.assign.
```
const sauces = ['bbq', 'buffalo', 'honey mustard']

const dressings = ['ranch', 'balsamic', 'thousand island']

const superSecretSauce = [...sauces, ...dressings]
```

### Template Literals
- allows us to easily insert variables into a string with back ticks and `${}`
```
let exclamation = 'yowza'
let noun = 'jumbo jet'
const madlibs = `"Oh ${exclamation}!" they said.
                 "I've never seen a ${noun} before!" `
```
- Quiz
  - Template literals allow you to insert variables into strings
    - true
  - Does spread operator syntax always work with objects?
    - No, it isn't officially part of the ecmascript spec.

## Classes
-`class` is a function that returns a special object that has all these different
methods and types set on it from another function.
- `constructor() ` function gets called when you instantiate your class. It allows
you to pass in values as arguments and it allows you to use those arguments to inform
the creation of your class.

### `extends` and `super()`
- when we call a component from React, we're actually extending the React
component class.
- `super()` is a method that's available to us within a `class`, specifically an extended `class`, and it calls one of the methods of a class's parent class.

### Getter, setter and static
- `.includes` is a new ES2016 method that is available on Array, and it iterates
over the Array looking for something.
- a `getter` function means that it can be invoked without actually being called
like a function. an automatically invoked function
- Quiz
  - A "getter" method represents a function which will be invoked whenever it's referenced.
    - true
  - Class declarations are hoisted.
    - false
  - What does the "super" keyword allow you to do?
    - allows you to access the properties and methods of an extended class's
    parent class.

## Promises and Async
- The Promise allows us to make asynchronous actions in JavaScript.
- `new Promise( (resolve, reject) => {})`
- Fetch gives us an easy way to make promise enabled http requests without
using an outside library.
- `fetch(url, options).then(resp => { ... })`
```fetch(shakespeareApi, options()).then( res => res.json()).then(json =>
{
  console.log('json =>', json)
})
```
### Async and Try/Catch (not technically part of specs yet - needs babel compiling)
- `async function(){ ... }`
- `try{ ... }catch(e){ ... }`
- `throw error` -  makes sure that the error is still flagged as an error,
and that means if we have another catch block wrapping this, it'll get caught in that.
- Quiz
  - The "includes" method can be used to search an object's properties for a specific value or key.
    - false
  - What are the two primary outcomes for a promise?
    - Resolve or reject
  - What is the fetch function's first argument?
    - URL string
  - How might you instruct an async function to stop running code within the `try`
  block and begin running code within the `catch` block?
    - Use `throw` to pass a variable into the `catch` block as an exception or error.

## Acknowledgments
- Carl Peaslee
