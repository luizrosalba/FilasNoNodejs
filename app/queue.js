///criamos outro arquivo para processar em threads diferentes a fila 
import 'dotenv/config'; /// preciso chamar de novo pois esá em outra thread senão dá erro 
import Queue from './app/lib/Queue';
Queue.process();