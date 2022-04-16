//req e res
import {Request, Response} from 'express';

//também chamado de model
import EmailService from '../services/EmailService';

const users = [
    { name: 'Erica', email: 'ericadeveloper@outlook.com' },
];

export default {
    //listagem de usuários
    async index(req: Request, res: Response){ //route home
        return res.json(users);
    },

    async create(req: Request, res: Response){ //post - enviar novo email
        const emailService = new EmailService();

        //body email
        emailService.sendMail({ //classe e metodo
            to: { 
                name: 'Erica', 
                email: 'ericadeveloper@outlook.com'
              },
              message: { 
                subject: 'Bem-vinda ao sistema', 
                body: 'bem-vinda'
              }
        });
        return res.send();
    }
}