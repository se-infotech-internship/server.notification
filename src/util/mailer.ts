import nodemailer from 'nodemailer';
import config from '../config/config';

const main = async (text: string, subject: string, mail:string) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.mailer.user,
            pass: config.mailer.password
        }
    });

    const mailOptions = {
        from: config.mailer.user,
        to: mail,
        subject: subject,
        html: text
      };

    return await transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}

export default main;