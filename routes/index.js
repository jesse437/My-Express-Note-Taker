// This is for my path
const path = require("path");
// Now im using module exports to export index.html from public folder
module.exports = (app) => {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // Here im doing the same thing for the notes.html file
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/note.html"));
  });
};
