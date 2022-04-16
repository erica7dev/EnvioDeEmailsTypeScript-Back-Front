"use strict";
//classes definem objeto e seu comportamento; interfaces auxiliam na definição das classes (contrato)
Object.defineProperty(exports, "__esModule", { value: true });
//implement interface
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
