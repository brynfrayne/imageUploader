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

app.use(cors());

app.post("/images", (req, res) => {
    res.send('this is it!')
    if (file.mimetype !== "image/png" || file.mimetype !== "image/jpg" || file.mimetype !== "image/jpeg") {
        res.status(404).send('Only .png, .jpg and .jpeg format allowed!');
        return;
    }

    const newWarehouse = {
        id: uniqid(),
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        contact: {
          name: req.body.contact.name,
          position: req.body.contact.position,
          phone: req.body.contact.phone,
          email: req.body.contact.email,
        },
      };
      const warehouses = readWarehouseData();
      warehouses.push(newWarehouse);
      fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouses));
    
      res.status(201).json(newWarehouse);

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})