const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');

// function to read image json file data
const readImageData = () => {
    const imageData = fs.readFileSync("./data/images.json");
    const imageDataParsed = JSON.parse(imageData);
    return imageDataParsed;
};

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post("/images", (req, res) => {
    // res.send('this is it!')
    // if (file.mimetype !== "image/png" || file.mimetype !== "image/jpg" || file.mimetype !== "image/jpeg") {
    //     res.status(404).send('Only .png, .jpg and .jpeg format allowed!');
    //     return;
    // }
    console.log(req.body.file);
    const newFile = {
        file: req.body.file
    };
    const images = readImageData();
    images.push(newFile);
    fs.writeFileSync('./data/images.json', JSON.stringify(images));

    res.status(201).json(newFile);
 

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})