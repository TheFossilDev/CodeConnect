# CodeConnect front-end UI

## Development resources:

* [React Icons](https://react-icons.github.io/react-icons/icons?name=fa) * I personally like Font Awesome a lot so I usually start there but that of course is flexible.

1. Add the name to the import of the file
2. Add `<FaClock />` or whatever the name is as a self-closing HTML tag

* [Why I decided on tailwindCSS for us](https://tailwindcss.com/docs/utility-first)
* [Tailwind cheat sheet with links to docs](https://nerdcave.com/tailwind-cheat-sheet)
* [NextJS in 100 seconds video (long tutorial isn't super relevant)](https://www.youtube.com/watch?v=Sklc_fQBmcs)

## VSCode Extensions:

* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs)

## Steps to run:

1. Clone the repo and open in Visual Studio Code
2. Go to our shared Google Drive and download the `.env` file and put it in the root of the project (same level as `package.json`). This file contains the API keys for the firebase authentication service.
3. Open a terminal in VSCode and run `npm install` to install all the dependencies
4. Run `npm run dev` to start the development server and go to localhost:3000 to see the app
5. Make changes to the code and save to see the changes in the browser

## Backend

The backend for this project was built using Django and PostgreSQL. The link to the repository for the backend is here [Link](https://github.com/robinsonianr/CodeConnect/tree/main). 

## Getting started with our repo:

1. Take a look at the structure of each of the pages under `pages/` and the components under `components/` to get a feel for how the app is structured. We make generic components that we can reuse in other UI elements.

## Why are we using Next.js instead of Create React App

We are generating our front-end interface with Next.js. This is a competitor to the simpler create-react-app. Create react app (CRA) is good for single page applications, but CodeConnect will be creating multiple pages that a user can navigate between. Every solution in CRA that helps with this is hacky and can present issues. We will be using Next.js to better support the Multi Page Application use-case. Read below for some info automatically generated by create-next-app
