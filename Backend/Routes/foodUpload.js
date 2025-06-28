// // routes/foodUpload.js
// const express = require('express');
// const multer = require('multer');
// const csv = require('csvtojson');
// const Food = require('../models/Food'); // your Mongoose or ORM model

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/upload-csv', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const foodList = await csv().fromFile(filePath);
//     await Food.insertMany(foodList);
//     res.status(200).json({ message: 'Foods uploaded successfully', count: foodList.length });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
