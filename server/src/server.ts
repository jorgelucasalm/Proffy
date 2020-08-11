import express from 'express'
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response)=>{
    return response.json({ message: 'hello world'})
})

app.listen(3333);