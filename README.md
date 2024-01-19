# TypeScript Simplified

## Learning TypeScript

- This repository contains TypeScript snippets I coded while practicing the language from scratch
- Each lesson is based on a different topic
- Some of these lessons contain a file `notes.md` which contains theory and concepts which required a deeper explanation than just code examples or comments in the main file.

## How to run files

- install TypeScript by running the following command in your terminal `npm i typescript --save-dev`
- Traverse to individual lesson folders
- lesson-01 requires you to run the command `tsc script.ts` on your command line or `tsc script.ts --noEmitOnError` just in case you encounter any errors and you don't want TypeScript to compile it to a script.js file
- From lesson-02 onwards you need to run the following two commands to install and run TypeScript on your browser through a development server provided by Vite bundler

```
npm i
```

```
npm run dev
```

## Lessons

- Lesson 01 - TypeScript setup and learn usage of --noEmitOnError
- Lesson 02 - Learn TypeScript using the Vite bundler
- Lesson 03 - Type interfaces
- Lesson 04 - array type
- Lesson 05 - 'any' type
- Lesson 06 - Object basics
- Lesson 07 - types vs interfaces
- Lesson 08 - Functions
- Lesson 09 - void type and optional parameters
- Lesson 10 - Destructuring parameters in functions
- Lesson 11 - Typing variables as functions
