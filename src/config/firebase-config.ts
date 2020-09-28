import admin from "firebase-admin";

const serviceAccount = require("../way-without-problems-firebase-adminsdk-v760q-b4f8032f57.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-project-e1a84.firebaseio.com"
})

export default admin;