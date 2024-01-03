# mergesort_primo
Setting Up Dependencies:
1. Initialize Project:

Create a new directory for your project and navigate to it in your terminal.
use these command:
mkdir my-merge-project
cd my-merge-project

then COPY ALL FILES IN merge-sort folder in my github and PASTE in their


Initialize a new Node.js project:
npm init -y

2. Install Dependencies:

Install TypeScript and Jest as development dependencies:
npm install --save-dev typescript jest @types/jest ts-jest

But i still could not run the npm test so I install jest this way so they can work with Typescript:
npm install --save-dev @jest/globals

Create the necessary files and directories:
Create a tsconfig.json file to configure TypeScript.
I search these file on the internet you can grab it in my repo


Create a src directory to store TypeScript files.
Inside the src directory, create merge.ts for the merge function implementation.

SO THESE IS MY WORK
YOU CAN LOOK THEM IT IN MY REPO FILE
Code Implementation:
1. Create TypeScript Files:

Create a merge.ts file in the root directory and add the merge function implementation:
src/merge.ts

2.Unit Testing:
src/merge.test.ts

HOW TO RUN
Running Tests:
Add the following scripts in your package.json:
"scripts": {
    "test": "jest"
}

THEN RUN THE COMMAND IN TERMINAL
npm test

This way, others can clone your repository, install dependencies (npm install), and run tests (npm test) to verify the functionality.

