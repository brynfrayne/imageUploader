const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const fs = require('fs');

const multer = require('multer');

const multerConfig = multer.diskStorage({
    destination: (_req, _file, callback) => {
        callback(null,'./data/' );
    },
    filename: (_req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null,`${file.originalname}.${ext}`);
    }
})
const isImage = (_req,file, callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null,true);
    } else {
        callback(new Error('Only Image is Allowed..'));
    }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage
});
const uploadImage = upload.single('photo');

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());


app.post("/images", uploadImage, (req, res) => {
    res.send("Image uploaded")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})