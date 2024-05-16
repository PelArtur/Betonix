const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
