// const express = require('express');
// const router = express.Router();
// const Fruit = require('../Schema/Fruit');

// // Add fruit
// router.post('/add', async (req, res) => {
//   try {
//     const newFruit = new Fruit(req.body);
//     await newFruit.save();
//     res.status(201).json(newFruit);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get all fruits
// router.get('/all', async (req, res) => {
//   try {
//     const fruits = await Fruit.find();
//     res.status(200).json(fruits);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Fruit = require('../Schema/Fruit');

// Add fruit
router.post('/add', async (req, res) => {
  try {
    const newFruit = new Fruit(req.body);
    await newFruit.save();
    res.status(201).json({
      success: true,
      message: 'Fruit added successfully',
      data: newFruit
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// Get all fruits
router.get('/all', async (req, res) => {
  try {
    const fruits = await Fruit.find();
    res.status(200).json({
      success: true,
      count: fruits.length,
      data: fruits
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// Get fruit by ID
router.get('/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.id);
    if (!fruit) {
      return res.status(404).json({
        success: false,
        message: 'Fruit not found'
      });
    }
    res.status(200).json({
      success: true,
      data: fruit
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// Update fruit
router.put('/update/:id', async (req, res) => {
  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedFruit) {
      return res.status(404).json({
        success: false,
        message: 'Fruit not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Fruit updated successfully',
      data: updatedFruit
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

// Delete fruit
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
    if (!deletedFruit) {
      return res.status(404).json({
        success: false,
        message: 'Fruit not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Fruit deleted successfully'
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      error: err.message 
    });
  }
});

module.exports = router;