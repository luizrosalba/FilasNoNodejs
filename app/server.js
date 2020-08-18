import 'dotenv/config';
import express from 'express'; 
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserControllers'
import Queue from './app/lib/Queue'

const app = express();
BullBoard.setQueues(Queue.queues.map(queue=>queue.bull));/// para cada fila , adiconar no bull 


app.use(express.json());
app.use('/admin/queues',BullBoard.UI);///adicionando o bull em uma rota

app.post('/users',UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});