# Case Frontend Test
Application build on AngularJS that fetches and displays dummy info from an API. The design of the application has been made using AngularJS components.

## Structure of the project
The application has been developed using AngularJS components, Sass to handle the styling, HapiJS to run a little server and gulp as a task runner.

### Scripts structure
```
| appRoot
|
| - commons
| | - header
| | - breadcrumb
|
| - components
| | - charts
| |
| | - display
| | | - display-album
| | | - display-albums-posts
| | | - display-post
| |
| | - search
| | | - search-general
| | | - search-user
| |
| | - users
| | | - users-list
|
| - services
| | - component-comunicator
| | - http-requests
| | - search-filter
|
| - utils
| | - routes
```

*commons* contains components used throughout the whole application such as the header, or de breadcrumb.

*components* keeps the logics of the application components.

*services* provides some shared logics accross the application, such as http-requests.

*utils* contains certain handy information, such as the API route paths.

### Component Structure

Each component folder normally contains different kinds of files. In the example *c* stands for the component name:

```
c.component.js
# Is the spine bone of the component. Registers templates, controllers, bindings...

c.controller.js
# Keeps the logics and methods needed for the component.

c.template.html
# The views of the component. AngularJS templates makes it ease to create dinamic content. It stays directly with to controller.

c.styles.scss
# Registers the styles of the component using Sass CSS preprocesor.
```

Specific information regarding certain component might be found in inner comments.

## Application features
* Displays list of users brought from external API.
* When user selected, displays list of albums and posts made by them.
* When clicking specific album, displays all pictures that the album contains and little info about them.
* When clicking specific post, displays further info about the post, and all comments asociated with it.
* On stats, you can select a user from a select list, and automatically it will display a chart showing that particular user's info like the number of albums or posts.
* One can search throughout the whole application. If user has been selected, it wil search only posts made by that user. Otherwise, it will search for any post made by any user.

## Installing and running the application
Clone the project from my repository -you should have git installed-.
```sh
git clone https://github.com/pgarciaegido/case_frontend_test
```

Install all the packages in your local machine. You should have installed node.js and npm. Inside the project folder, run
```sh
npm install
```

Make the bundle of the project. It will bundle the whole project minifiying the JS and the CSS files.
```$
npm run build
```

Run local server.
```
node server.js
```

The application will be working properly into
```
localhost:8080
```

## Hands on! Contributing.
Feel free to PR any possible enhancements you would like the application to have.

For the development process, you can run
```sh
npm start
```

It will start up the server and gulp will be watching to any code modification.

If you are a MAC or Linux user, this command might not work. As a windows user, I use *concurrently* to concatenate different commands. Modify the package.json to get rid of this setup:
```json
"scripts": {
  "start": "gulp watch && nodemon server"
},
```
For windows users, just install *concurrently* globally:
```sh
npm install -g concurrently
```

I strongly recomment *nodemon* in your development process. If you don't have it installed:
```sh
npm install -g nodemon
```

## Contact
You can contact me on pgarciaegido@gmail.com for any particular issue.

Thanks! :beer:
