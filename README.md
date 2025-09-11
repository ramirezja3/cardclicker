To run the card clicker, clone this repository: https://github.com/ramirezja3/cardclicker.git
Docker is needed to be installed.
Run the following commands in order:
- git clone https://github.com/ramirezja3/clickcards-app.git
- cd clickcards-app
- docker-compose up --build

The frontend will be running on http://localhost:3000
The backend will be running on http://localhost:5000/api/cards

To end the application, press "CTRL + C" and run "docker-compose down" at the command line.

Familiar/Easy Parts
- HTML, CSS, and JavaScript programming: I already had experience developing websites, so the UI portion felt very natural.
- Using Git: I’m comfortable with the Git workflow, so version control was smooth.
- Writing SQL queries: coming up with the queries for inserting, updating, and clearing card data was straightforward.
- TypeScript basics: I’ve used TypeScript before in smaller projects, so adding types to my frontend components felt natural.
- General frontend structure: setting up a React project and laying out a responsive grid was something I’ve done before.

Difficult/New Parts
- Docker: I had never worked with Docker before, but I learned how powerful it is for containerizing both frontend and backend, and making the whole project run with one command. I'm gonna continue using docker, it was a lot of fun.
- API integration: connecting the frontend to the backend via fetch calls was a little tricky at first, especially handling JSON responses and state updates.
- Express syntax: I had never used Express before, so learning query handling was new but really rewarding. Made the code look more "pretty".
- Database integration with Node: this was my first time wiring up PostgreSQL with a Node backend, so figuring out the connection pool and queries was a challenge.
- Sorting logic on the frontend: making sure the cards re-ordered correctly when switching between sort modes (most clicks / first clicked) required some debugging.
- Working across the full stack: the biggest challenge was making all the pieces (frontend, backend, database, and Docker) talk to each other correctly. Once everything was finally working, it was quite satisfying.

Questions:
- Why was React with TypeScript chosen for the frontend instead of plain React or another framework like Vue or Angular?
- Docker vs Kubernetes? I've heard of both for containerization but what would be worth learning more in depth? 
