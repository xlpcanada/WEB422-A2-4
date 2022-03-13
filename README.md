# Resort Website (React Version)

## Rules to Setup the project locally
1. Create an empty folder and attach it to your workspace area in VS Code
1. Open terminal
1. Clone this repo by running your **git clone project URL .** 
1. Reinstall all your dependencies by running the following command **npm i**
1. Start React project by running **npm start**


---------------------------------------------------------------------------------


# RestInnCompany API

## Summary 

A simple RESTful API that allows an administrator to create, read, edit and delete RestInn company's users and properties .



## End Points

#### GET /properties

The above end point returns all properties and their respective location(s).

The above end point also allow you to filter hereoes by passing any of the below query string parameters :

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| Type      | Comic Type                                     |
| min_age   | Minimum age preference                         |
| max_age   | Maximum age preference                         |


#### POST /properties

The above end point creates a property. You must submit the property data in the body of the request (as JSON), The data includes  :

heroName (required),
realName (required),
age (required),
gender (optional),
universeType(required)


#### GET /properties/id

The above end point returns a property based on the id provided.


### PUT /properties/id

The above end point updates a property based on the id provided. The client application is required to submit the hero data ,in the body of the request (as JSON), that is required to be updated: The data includes : :

heroName 
realName 
age 
gender,
universeType


### DELETE /properties/id

The above end point returns the deleted property based on the id provided.


### Rules to Set up Back-End (Locally)

1. Clone source code by running: **git clone GITHUP_PROJECT_URL .** Add clone project to a blank workspace area in your code editor
1. After Cloning, re-install ALL 3rd party dependencies by running **npm install**
1. Create a folder within the project called **config**  This config folder must be on the root.
1. Within the **config** folder, create a file called **keys.env**
1. Within the **keys.env** file, create the below environment variables :
      - **MONGO_DB_CONNECTION** - Assign your MongoDB Database Connection String for your Test cases. Ensure that this value points to a different database because the data for this will b wiped after your test cases run.
1. Run application (locally) by running : **npm run dev**


