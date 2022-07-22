import express from 'express';

const PORT = 9090;
const app = express();

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
