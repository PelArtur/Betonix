const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const filePath = "../data/CallRequests.json";

    fs.readFile(filePath, (err, data) => {
        let jsonData = [];
        if (!err) {
            jsonData = JSON.parse(data);
        }
        jsonData.push(formData);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.status(200).json({ message: 'Data saved successfully' });
        });
    });
});

app.get('/distance', async (req, res) => {
    const { destination } = req.query;
    const origin = 'Ukraine, Lviv';
    const apiKey = 'AIzaSyDwNxzDD8oPOqotA3jBOjHQk_3lwUxHpZI';
  
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${apiKey}`
      );
  
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching distance.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
