const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Project = mongoose.model('Project', {
    title: String,
    description: String,
    createdBy: String,
  });

// Create a User model
const User = mongoose.model('User', {
  username: String,
  password: String,
});

app.use(bodyParser.json());

// Handle user registration
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.json({ success: false, message: 'Error registering user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/api/submit-project', async (req, res) => {
    const { title, description, createdBy } = req.body;
  
    const newProject = new Project({ title, description, createdBy });
    await newProject.save();
  
    res.json({ success: true, message: 'Project submitted successfully' });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
