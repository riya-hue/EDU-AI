const express = require('express');
const cors = require('cors');
const queryRoute = require('./routes/query');
const enrollmentRoute = require('./routes/enrollment');
require('dotenv').config();
require('./utils/mongo'); // MongoDB connection

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/query', queryRoute);
app.use('/api/enroll', enrollmentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
