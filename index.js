import express from 'express';
import morgan from 'morgan';

const PORT = 3000;

const app = express();

app.use(express.json());

morgan('tiny')

app.get('/', (request, response) => {
    console.log(request.url)
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});