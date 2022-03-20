const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const fs = require('fs');

require("dotenv").config();

// cloudinary config

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
  });

  const storage = new CloudinaryStorage({
      cloudinary:cloudinary,
      params: {
          folder: "DEV",
      },
  });

// multer config variables
const multer = require('multer');

// const multerConfig = multer.diskStorage({
//     destination: (_req, _file, callback) => {
//         callback(null,'./data/' );
//     },
//     filename: (_req, file, callback) => {
//         // const ext = file.mimetype.split('/')[1];
//         console.log(`${file.originalname}`);
        
//         callback(null,`${file.originalname}`);
//         // callback(null,`${Date.now()}.${ext}`);

//     }
// })
const isImage = (_req,file, callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null,true);
    } else {
        callback(new Error('Only Image is Allowed..'));
    }
};

const upload = multer({
    // storage: multerConfig,
    storage:storage
    // fileFilter: isImage
});
const uploadImage = upload.single('photo');


// middleware
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.static('data'));
app.use(cors());

// endpoints
app.post("/images", uploadImage, (req, res) => {
    // cloudinary.uploader.upload(`./data/${file.originalname}`,
    //     function(result) {console.log(result)})
    // res.send("Image uploaded")
    res.json(req.file.path);
})

app.get("/result/:fileName", (req, res) => {
    const fileName = req.params.fileName;
    // console.log(fileName);
    // const data = fs.readdirSync('./data');
    // const dataFilter = data.filter(img=>img===fileName);

    // res.send(dataFilter[0]);
    res.sendFile(`${fileName}`, {root:'./data'});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})