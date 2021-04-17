const notes = require("../db/db.json");
const path = require("path");
const fs = require("fs");
// const uuidv4 = require("uuid/v4");

module.exports = (app) => {
  // when they  click on the API Table and API Wait List links, it shows you the json
  // app.get("api/notes", (request, response) => response.json(noteData));

  app.get("api/notes", (request, response) => {
    noteData.push(request.body); //pushing the new obj value into database
  });

  app.get("/api/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../db/db.json"))
  });
  
  app.post("/api/notes", (request, response) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    console.log(notes);
    // user's new notes
    const newNotes = request.body;
    // newNotes.id = uuidv4();
    // adding the new notes into the json
    notes.push(newNotes);
    // create a new file and writing it into db.json
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
    // server responding with updates notes file
    response.json(notes);
  });
  
  localhost/apai/notees/5
  //delete route - /notes/:delete?
  app.delete("/api/notes/:id", (request, response) => {
    request.params.id
    response.json(deleteNote);
  });
};
