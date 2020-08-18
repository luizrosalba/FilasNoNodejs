import Mail from '../config/mail'

export default {
    key : 'RegistrationMail',
    options: {
        delay:5000,
        priority:3
    },

    async handle({data}){ ///desestruturacao evita data.data
        const {user} = data; 

        await  Mail.sendMail({
            from:'DIO <contato@batata.com.br>',
            to: `${user.name}<${user.email}>`,
            subject : "Cadastro de usuário",
            html: `Olá, ${user.name}, bem vindo a DIO.`
        })
    }
}