
# 🍕 SELECTlunch 🥗

## Initial Requirements
### Requirements

- [x] Simple web app with a node server and a database
- [x] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [x] Database hosted on Heroku, or locally
- [x] Build script for your database
- [ ] Security concerns appropriately considered (you must protect against script injections!)
- [x] Content dynamic, but DOM manipulation kept to a minimum
- [ ] Mobile-first design
- [ ] Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
- [ ] test your server routes with supertest
- [ ] test your pure functions both server and client side
- [ ] set up a test database so that you can test your database queries

## Installation
- Clone the project to your local machine
- ```npm install``` 
(npm install -g nodemon
npm install tape --save-dev
npm install tap-spec --save-dev
npm install supertest --save-dev)
- create a ```config.env``` file in the root directory and ask for us for the URL to paste inside! 🙏

## Dependencies
- **Tape** for testing
- **Tap-spec** for test output formatting
- **Nodemon** for running a server in development
- **Supertest** for testing requests

## Known bugs/issues
- we don't yet send all data to the right databases
- possible to input empty string

## Our Process

### Wednesday 

- After coming to a decision about what we wanted to create - a tool to help organize community lunches at Space4 - we spent some time whiteboarding and talking in order to plan how we would start our project:

![](https://i.imgur.com/AP6UUFm.jpg)

![](https://i.imgur.com/w39Tfxr.jpg)

![](https://i.imgur.com/tMrNvty.png)



#### Plan of attack! 💪
- [x] 1. Create Github repo ✅
- [x] 2. Create overarching file structure (see below) ✅
- [x] 3. Create database table structure
- [ ] 4. 🎨 Break time - Colour scheme 🎨
- [x] 5. Create HTML basic structure
- [=x ] 6. Create basic server
    - [x] server.js
    - [x] router.js
        - [x] root
        - [x] public
        - [x] getData
        - [x] postData
    - [x] handler.js
- 7. On load 
    - [x] Get request for lunch data for dropdown
        - (to be broken down further)
    - [ ] Get request for booked data to be put into list
        - (to be broken down further)
- 8. On submit button
    - [x] Post request to put input into database
        - (to be broken down further)
    - [x] (kind of) Get request for new data to be put into list
        - (to be broken down further)

#### File structure
![](https://i.imgur.com/rlaLJvN.png)

### Wednesday 
- Started by re-evaluating small steps that could be taken to start to implement the project
- 💥 We tried to get formData() to work, but that proved troublesome
1. - [x] Send the input name to the 'people' database
    - [x] create event listener on form
    - [x] create POST request
    - [x] edit router file
    - [x] create gandler for posting to database
    - [x] create post file for SQL query
    - [x] connect it all!
2. - [x] Return input name from 'people' database and display in DOM
    - 🙌 We thought that we would have to essntially do it all again, but realised that our POST request could also receive the data  🎉🎊🎉
    - [x] create file for get SQL query
    - [x] connect it to the front end
    - [x] display it in the dom
3. - [x] Receive all data from the frontend in the backend
    - [x] create new table for lunches with potential lunches (read only)
    - [x] create new table for bookings
    - [x] get lunches as a dropdown

4. - [ ] Figure out how to use foreign keys










## Presentation!
- Demo website
- Whiteboarding/planning (Susan)

#### What we struggled with
- formData()! (Martin)
- testing
- Sweet jesus trying to return the foreign key of another table THE WORST (Oliver)

#### What we're proud of 
- Creating databases (susan)
- Starting with whiteboarding/discussion
- discovering that POST requests can not only send but also return data
- Accidental good accessibility score
![](https://user-images.githubusercontent.com/37771591/49643008-7e480200-fa0c-11e8-840b-711470e611a6.png)
