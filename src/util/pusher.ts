import admin from '../config/firebase-config';
import IpushMessage from '../types/IpushMessage';

const pusher = (registrationToken: string | string[], message: IpushMessage | any) => {


    return admin.messaging().sendToDevice(registrationToken, message)
        .then((responce) => {
            console.log("Notification sent successfully: ", responce);
        })
        .catch(err => {
            console.log(err);
        })

}

export default pusher;

