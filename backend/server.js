const express = require('express');
const axios = require('axios');
const cors = require('cors'); // To handle CORS
const app = express();

// Enable CORS for all origins (you can change this for more restrictive access)
app.use(cors());

// Proxy route to fetch data from Yahoo Finance
app.get('/crypto-price', async (req, res) => {
    const symbols = req.query.symbols;
    
    if (!symbols) {
        return res.status(400).json({ error: 'Symbols query parameter is required.' });
    }

    try {
        // Use a CORS proxy service to bypass Yahoo's CORS issue
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const yahooFinanceUrl = `https://query1.finance.yahoo.com/v7/finance/quote`;

        const response = await axios.get(proxyUrl + yahooFinanceUrl, {
            params: { symbols: symbols },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        });

        res.json(response.data); // Return the data fetched from Yahoo Finance
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        res.status(500).json({ error: error.message });
    }
});

// Start the Express server
app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
