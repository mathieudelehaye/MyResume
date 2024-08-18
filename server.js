const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, etc.)
app.use(express.static(__dirname + '/public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
