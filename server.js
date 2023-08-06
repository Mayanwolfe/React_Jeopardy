import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/test', (req, res) => {
  res.send('CORS-enabled server is running!');
});

// New route to handle requests to the jservice API
app.use('/api', async (req, res) => {
  console.log(`http://jservice.io/api${req.url}`)
  try {
    // Forward the request to the jservice API
    const apiResponse = await fetch(`http://jservice.io/api${req.url}`);
    const data = await apiResponse.json();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data from the jservice API.');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});