import express from 'express';
import bodyParser from 'body-parser'
const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})
app.post('/api/objects', (req, res) => {
    const object = req.body;
    console.log('Received object:', object);
    res.status(200).json({ message: 'Object received successfully' });
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));