# DoType - A First Approach To TypeScript

##### <i>...by zshmeta</i>

1. What is This?

### A So Called Better To Do App...

To Do apps are pretty much the first thing you would code when trying to learn full stack development. I have done it in
the past with vanilla JS and React. This time I wanted to try it with TypeScript.

2. Why is This?

Well because i believe having knowledge in TypeScript could potentially turn out to be rewarding some day, and after
failure to implement it in a production grade app
*see [YAP-yetAnotherPortfolio](https://github.com/zshmeta/YAP_yetAnotherPortfolio)*  i have decided to start from where
i should start and that is by coding a To Do app using TypeScript in order to gasp the core aspects of it and to gain
familiarity with how it works.

3. How is This?

As i aim for a full comprehension of TypeScript i will be using it in both the front and back end of this app. The front
end will be built using React and the back end will be built using Node.js and Express.js. I will also be using MongoDB
as the database.

### The Architecture

At the Root we find dist/ and src/ folders. The dist/ folder is where the compiled code will be stored and the src/
folder is where the source code is stored. The src/ folder is further divided into model routes controllers and types
folders. The model folder contains the mongoose models, the routes folder contains the views *(here labeled as route for
convention sake)*, the controllers folder contains controllers. This represent the MVC architecture.

###### here comes th Type...

Annother folder that is necessary when using TypeScript is a src/types folder. TypeScript requires each fonction to be
typed. This is done by creating a .d.ts file for each fonction. The .d.ts file is a declaration file that contains the
type of the fonction. The src/types folder contains all the .d.ts files for the functions used in the app.
TypeScript also requires the type of the data that is being passed to the fonction. This is done by creating an
interface for the data. The interface is a .ts file that contains the type of the data. The src/types folder contains
all the .ts files for the interfaces used in the app.
Finally TypeScript requires a tsconfig.json file. This file contains the configuration for the TypeScript compiler. The
src/ folder contains the tsconfig.json file.

Here is an overall view of the structure for the doType_back App:

```
├── dist
├── node_modules
├── src
├── app.ts
├── controllers
|  └── todos
|     └── index.ts
├── models
|  └── todo.ts
├── routes
|  └── index.ts
└── types
└── todo.ts
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
``` 

then here is the commands i ran to create the structure :
*yarn over npm for it's speed*

```bash
yarn add typescript -g
yarn add express cors mongoose && yarn add -D @types/node @types/express @types/mongoose @types/cors
yarn add -D concurrently nodemon
``` 

then i created the tsconfig.json file on whish you can find notes
*see [tsconfig.json](https://github.com/zshmeta/DoType/blob/master/tsconfig.json)*

For the doType_front App i used create-react-app to create the structure and then i added TypeScript to it.

```typescript
npx create-react-app doType_front --template typescript
```

and the structure looks like this:

```
├── node_modules
├── public
├── src
|  ├── components
|  |  ├── AddTodo.tsx
|  |  ├── Todo.tsx
|  |  └── TodoList.tsx
|  ├── App.css
|  ├── App.test.tsx
|  ├── App.tsx
|  ├── index.css
|  ├── index.tsx
|  ├── API.ts
|  ├── react-app-env.d.ts
|  ├── serviceWorker.ts
|  └── setupTests.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

### Typing A Mindset

The first step is to shape our Todo Model and the Schema for it's content and make it work with mangoose, in other
words, our Object. But since we are using TypeScript we need to create a "Type" for the content of our todo
Model.Similar to an object The Type is an interface that contains the type of the data that is being passed to the
Model. The Model is the mongoose model that contains the Schema for the data. The Model is created in the models/todo.ts
file and the Type is created in the types/todo.ts file. The Model is then imported in the controllers/todos/index.ts
file and the Type is imported in the routes/index.ts file.

We also create the routes are created in the routes/index.ts file and the controllers in the controllers/todos/index.ts
file. The routes are then imported in the app.ts file and the controllers are imported in the routes/index.ts file.

## The Server

### Controlling Routes...

The routes are created in the routes/index.ts file and they simply determine the method which takes our controllers as
argument. Controllers are written in the controllers/todos/ folder. The routes are then imported in the app.ts
file.

##### The Controllers

```typescript
const addTodo: RequestHandler = async (req, res, next) => {
  ...
    const todo: ITodo = new Todo...
    const newTodo: ITodo = await todo.save();
};
```

Notice how we type our const todo and newTodo with the ITodo interface we created in the types/todo.ts file.

This is how we type our data in TypeScript.

The server is created in the app.ts file. The server is created using express and it is listening on port defined in env
or default to 4000. The server is then exported to the index.ts file in the root folder.

##### NoDemon

We use nodemon to run our server. Nodemon is a tool that helps develop node.js based applications by automatically
restarting the node application when file changes in the directory are detected.

##### cors

We use cors to enable cross-origin resource sharing. CORS is a mechanism that allows restricted resources on a web page
to be requested from another domain outside the domain from which the first resource was served.

##### bcryptjs

We use bcryptjs to hash the password. Bcryptjs is a password hashing function designed by Niels Provos and David
Mazières, based on the Blowfish cipher.

##### jsonwebtoken

We use jsonwebtoken to create a token. JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and
self-contained way for securely transmitting information between parties as a JSON object.

##### mongoose

Uses mongoose to connect to the database. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

## The Client

The client is created in the doType_front/src/index.tsx file. The client is created using react with thw yarn

```typescript
yarn create react-app doType_front --template typescript
```

### The Components

The components are created in the src/components/ folder. The components are then imported in the src/App.tsx file.

#### The Components Types

The components are created in the src/components/ folder and "typed" by creating the interfaces in the
src/types.d.ts file. here the .d.ts makes the file a declaration file available globally. The interfaces are then
imported as needed

### The API

The API is created in the src/API.ts file. The API is created using axios. Axios is a promise based HTTP client for the
browser and node.js. With axios we can make HTTP requests to our server and handle the different requests and their
responses in our client.

### The App

The App is created in the src/App.tsx and it is the main component that contains the main fonctions and the state of the
app.

# What "type" of developer should i be ?

Well i can say that this was a rather interesting and consuming experience, i learned about TypeScript and how it works
which is definitely not complicated at all but rather extremely time consuming. I finally understood the concept and why
many are looking at implementing it in their projects.

That being said, it is definitely an "option" and unless you have the need for it i would not recommend, for example,
there is really no need for so much "typing and interfacing" for a simple "burger menu", but if you are working on a big
project with a team of developers then it is definitely a must.

I would say that it is a good thing to know and understand but not a must in order to create something decent. I would
definitely deepen my knowledge of it and try to implement it in any of my medium to large size projects.

# Thanks!