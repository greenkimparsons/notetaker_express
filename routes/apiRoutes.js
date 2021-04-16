const notes = require("../db/db.json");
const path = require("path");

module.exports = (app) => {
  // when they  click on the API Table and API Wait List links, it shows you the json
  app.get("api/notes", (request, response) => response.json(noteData));

  app.get("api/notes", (request, response) => {
    noteData.push(request.body); //pushing the new obj value into database
  });

  app.get("/api/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../db/db.json"))
  });
  
  app.post("/api/notes", (request, response) => {
    const notes = JSON.parse(fs.readFileSync("../db/db.json"));
    console.log(notes);
    // user's new notes
    const newNotes = request.body;
    // adding the new notes into the json
    notes.push(newNotes);
    // create a new file and writing it into db.json
    fs.writeFileSync("../db/db.json", JSON.stringify(notes))
    // server responding with updates notes file
    response.json(notes);
  });
  //delete route - /notes/:delete?

  const deleteNote = () => {
    console.log('Deleting note by id...\n');
    connection.query(
      'DELETE FROM products WHERE ?',
      {
        id: 'strawberry',
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} products deleted!\n`);
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  };
};
