var db = require("./db.json")

module.exports = function(app){

    app.get("/api/notes", function(req,res){
        return res.json(db)
    });

    app.get("/api/notes", function(req, res){
        return res.json(false);
    });

    app.post("api/notes", function(req, res){
        const newNote = req.body
        newNote.id =db.length
        console.log(newNote)
        //add json to db array
        db.push(newNote);
        //display JSON to
        res.json(newNote)
    })
}