# React: ES6, ES2016, and Beyond
Carl Peaslee's LinkedIn Learning course [here](https://www.linkedin.com/learning/react-es6-es2016-and-beyond/welcome)

## Getting Started
- $ Yarn install
- $ Yarn start

## Built With
- React, Yarn, ES6+.

## NOTES
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
- 

## Acknowledgments
- Carl Peaslee
