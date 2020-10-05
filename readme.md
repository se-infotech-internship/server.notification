# Notification service API documantation

## In this API implemented logics of Email sending, which is based on nodemailer, and push-notifications, which based on Firebase cloud messaging.

# Email EndPoints

* [`POST` - Payment for app email - `/api/email/oplata/toUser/`](#email-payment-for-app)
* [`POST` - New fee email - `/api/email/new-fee/toUser/`](#email-new-fee)
* [`POST` - Changed status of fee email - `/api/email/status-fee/toUser/`](#email-status-fee)
* [`POST` - Email for confirmation in signup - `/api/email/confirm/toUser/`](#email-signup-confirm)
* [`POST` - Email for change of password - `/api/email/change/toUser/`](#email-change-password)

# Push-Notification EndPoints

* [`POST` - Notification "payment for app" - `/api/push/oplata/toUser`](#notification-payment-for-app)
* [`POST` - Notification "New fee" - `/api/push/new-fee/toUser/`](#notification-new-fee)
* [`POST` - Notification "Changed status of fee" - `/api/push/status-fee/toUser/`](#notification-changed-status)
* [`POST` - Notification "camera in "xxx" metrs" - `/api/push/camera/toUser/`](#notification-camera)

# Email payment for app

## POST /api/email/oplata/toUser/
### - Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom Rofl"
}
`
### - Response example:
`{

    "message": "successed"

}`

# Email new fee
## POST-/api/email/new-fee/toUser/
### -Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom Rofl",
    "fee":"https://google.com"
}
`
### -Response example:
`{

    "message": "successed"

}`

# Email status fee
## POST-/api/email/status-fee/toUser/
### change status of fee email
### Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom Rofland",
    "fee":{
        "title":"Перевищення швидкості",
        "date":"10.09.20",
        "status":"Оплачений"
    }

}
`
### Response example:
`{

    "message": "successed"

}`
# Email signup confirm
## POST-/api/email/confirm/toUser/
### Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom rofland",
    "link": "google.com"

}
`
### Response example:
`{

    "message": "successed"

}`
# Email change password
## POST-/api/email/change/toUser/
### Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom rofland",
    "link": "google.com"

}
`
### Response example:
`{

    "message": "successed"
    
}`
# Notification payment for app
## POST-/api/push/oplata/toUser
### Request example:
 ` 
 body:
 {

    "registrationToken": "asdxzgsq12ras",
    "name":"Tom Rofland"

}
`
### Response example:
`{

    "message": "successed"

}`
# Notification new fee
## POST-/api/push/new-fee/toUser/
### Request example:
 `
 body:{
     
    "registrationToken": "asdxzgsq12ras",
    "name":"Yevhen Kovalenko",
    "fee":{
        "title":"Перевищення швидкості",
        "date":"10.09.20"
    }

 }
 `
 ### Responce example:
 `
 {

     message:"success"
 }
 `
 # Notification changed status
 ## POST-/api/push/status-fee/toUser/
 ### Request example:
 `
 body:{
     
    "registrationToken": "asdxzgsq12ras",
    "name":"Tom Rofland",
    "fee":{
        "title":"Перевищення швидкості",
        "date":"10.09.20",
        "status":"Оплачений"
    }

 }
 `
 ### Responce example:
 `
 {

     message:"success"
 }
 `
# Notification camera
 ## POST-/api/push/camera/toUser/
 ### Request example:
 `
 body:{
     
    "registrationToken": "zxcadjk3as23u1he7d",
    "range":"700"
}

 
 `
 ### Responce example:
 `
 {

     message:"success"
 }
 `