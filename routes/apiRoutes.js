const noteData = require("../db/db.json");

module.exports = (app) => {
  // when they  click on the API Table and API Wait List links, it shows you the json
  app.get("api/notes", (request, response) => response.json(noteData));

  app.get("api/notes", (request, response) => {
    noteData.push(request.body); //pushing the new obj value into database
  });

  app.post("api/notes", (request, response) => {
    // from client to you, they are submitting their info to put into notes
    noteData.push(request.body); //pushing the new obj value into database
  });

  //delete route - /notes/:delete?
};
