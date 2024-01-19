## TypeScript Setup

- To install TypeScript you need to run the command npm i typescript --save-dev on your command line.
  - This will save TypeScript as a dev dependency in your package.json which is the recommended way to install and run TypeScript. You can also install TypeScript globally by using the -g flag but this is not recommended as it is easier to maintain versions of TypeScript in individual projects you install it in

```
"devDependencies": {
    "typescript": "^5.3.3"
  }
```

- You can run TypeScript files by using the command `tsc filename.ts`.
  - This will create a filename.js (same name as your .ts file) in your folder in which your TypeScript code gets converted to plain JavaScript fro browsers to run
- If you want TypeScript to convert only those files to JavaScript which have no errors, you need to pass an additional flag on the command line while running your TypeScript command as follows:

```
tsc filename.ts --noEmitOnError
```

- The above command will only convert the .ts file to .js file if there are no errors in the file
- There is a better way to avoid manually running these commands though and that is using a front end tool or bundler or Vite which takes care of most of the stuff we need to run TypeScript while providing us with a development server which we can run on the browser
