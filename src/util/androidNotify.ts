import gcm, {Sender}  from 'node-gcm';
import config from '../config/config';


const notify = (title: string, body: string, devices: Array<string>) =>{
    const sender: Sender = new gcm.Sender(config.gcmApi);

    const message = new gcm.Message();
    message.addNotification({
        title: title,
        body: body,
        icon: 'ic_launcher'
    });

    return sender.send( message, devices, (err, responce)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(responce);
        }
    })
}

export default notify;


