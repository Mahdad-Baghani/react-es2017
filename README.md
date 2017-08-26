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

## Acknowledgments
- Carl Peaslee
