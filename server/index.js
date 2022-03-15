const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './data')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({dest: './data'});

// function to read image json file data
const readImageData = () => {
    const imageData = fs.readFileSync("./data/images.json");
    const imageDataParsed = JSON.parse(imageData);
    return imageDataParsed;
};

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());


app.post("/images", upload.single("image"), (req, res) => {
    // res.send('this is it!')
    // if (file.mimetype !== "image/png" || file.mimetype !== "image/jpg" || file.mimetype !== "image/jpeg") {
    //     res.status(404).send('Only .png, .jpg and .jpeg format allowed!');
    //     return;
    // }

    // if i use this now with postman i can upload
    // an image with form data --- havent figured out
    // how to do that with browser yet
    
    console.log(req.body);
    const newFile = {
        file: req.body.image
    };
    const images = readImageData();
    images.push(newFile);
    fs.writeFileSync('./data/images.json', JSON.stringify(images));

    // res.status(201).json(newFile);
    res.send("Image uploaded")
 

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})