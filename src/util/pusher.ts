import admin from '../config/firebase-config';
import IpushMessage from '../types/IpushMessage';
import IpushOptions from '../types/IpushOptions';


const pusher = (registrationToken: string | string[], message: IpushMessage | any) => {
    
    const options: IpushOptions | any = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    }

    return admin.messaging().sendToDevice(registrationToken, message, options)
        .then(() => {
            console.log("Notification sent successfully");
        })
        .catch(err => {
            console.log(err);
        })


}

export default pusher;

