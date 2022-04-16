import express from 'express';
import cors from 'cors'; //compartilhar recursos entre diferentes origens (spa - api)
import routes from './routes';

const app = express();

app.use(cors());//eu poderia especificar url's {}
app.use(routes);

app.listen(4444, () => {
    try{
        console.log("Sucesso!")
    }catch(err){
        console.log(err);
    }
});
