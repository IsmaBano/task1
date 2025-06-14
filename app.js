const express = require('express');
const app = express();
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('School API is running!');
});


app.use('/api', schoolRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
