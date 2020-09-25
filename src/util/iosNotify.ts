import config from '../config/config';
import apn from 'apn';


const notify = (title: string, body: string, device: string) => {
    const note = new apn.Notification();
    const options = {
        token: {
            key: "path/to/APNsAuthKey_XXXXXXXXXX.p8",
            keyId: "key-id",
            teamId: "developer-team-id"
        },
        production: false
    };

    const apnProvider = new apn.Provider(options);
    note.alert = body;
    note.topic = title;

    apnProvider.send(note, device)
        .then((result) => {
            console.log;
        })

    apnProvider.shutdown();
}

export default notify;

