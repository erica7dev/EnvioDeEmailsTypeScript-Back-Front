//classes definem objeto e seu comportamento; interfaces auxiliam na definição das classes (contrato)

interface IMailTo {
    name: String,
    email: String
}

interface IMailMessage {
    subject: string; //assunto
    body: string;
    attachment?: string[]; //anexo
  }

interface IMessageDTO { //data transfer objects
    to: IMailTo;
    message: IMailMessage;
  }

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

//implement interface
class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
      console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
  }
  
export default EmailService;
  
