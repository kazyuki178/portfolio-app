import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Hello');
    res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
    console.log("test");
});
