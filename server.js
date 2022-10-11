const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const notesContent = require("./models/content")
const cors = require("cors");
const path = require("path");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.connect(DATABASE_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

//Get all notes
app.get('/yourNotes', (req, res) => {
    notesContent.find({}, (err, result) => {
        if(err){
            req.json(err)
        } else {
            res.json(result)
        }
    })
})

//Add new note
app.post('/add-note', async (req, res) => {
   const content = new notesContent(req.body);
   await content.save();
   res.status(200).json(req.body);
})

//delete notes
app.delete('/delete-note/:id', async (req, res) => {
    const deletedNote = new notesContent(req.body);
    try {
        await notesContent
        .findByIdAndDelete(req.params.id);
        res.status(200).json(deletedNote)
    } catch (err) {
        res.status(500).json(err);
    }
})

if(process.env.NODE_ENV ==="production"){
    //Set static folder
    app.use(express.static("client/build"));

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.listen(process.env.PORT || 8000, () => console.log("SERVER IS RUNNING"));
