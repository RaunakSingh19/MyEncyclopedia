const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const fruitRoutes = require('./Routes/fruitRoutes');
app.use('/api/fruits', fruitRoutes);
// -------------------
const blogRoutes = require('./Routes/blogRoutes');
app.use('/api/blogs', blogRoutes);

// -----------------------------
// const foodUploadRoute = require('./Routes/foodUpload');
// app.use('/api/patanahi', foodUploadRoute);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Futras API is running!' });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});