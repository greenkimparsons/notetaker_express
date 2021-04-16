const { request } = require("http");
const path = require("path");

module.exports = (app) => {

    app.get("/notes", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    app.use("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
}