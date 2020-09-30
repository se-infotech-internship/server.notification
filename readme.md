# Notification service API documantation

## In this API implemented logics of Email sending, which is based on nodemailer, and push-notifications, which based on Firebase cloud messaging.

# Email EndPoints

* [`POST` - Payment for app email](#POST-/api/email/oplata/toUser/)
* [`POST` - New fee email](#POST-/api/email/new-fee/toUser/)
* [`POST` - Changed status of fee email](#POST-/api/email/status-fee/toUser/)
* [`POST` - Email for confirmation in signup ](#POST-/api/email/confirm/toUser/)
* [`POST` - Email for change of password](#POST-/api/email/change/toUser/)

# Push-Notification EndPoints

* [`POST` - Notification "payment for app"](#POST-/api/push/oplata/toUser)
* [`POST` - Notification "New fee"](#POST-/api/push/new-fee/toUser/)
* [`POST` - Notification "Changed status of fee"](#POST-/api/push/status-fee/toUser/)
* [`POST` - Notification "camera in "xxx" metrs"](#POST-/api/push/camera/toUser/)

# POST /api/email/oplata/toUser/

### Payment for app email
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

# POST-/api/email/new-fee/toUser/
### new fee email
### -Request example:
 ` 
 body:{

    "email":"test@gmail.com",
    "name":"Tom Rofl",
    "fee":{
        "title":"Перевищення швидкості",
        "date":"10.09.20"
    }

}
`
### -Response example:
`{

    "message": "successed"

}`

# POST-/api/email/status-fee/toUser/
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
# POST-/api/email/confirm/toUser/
### signup email confirm
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
# POST-/api/email/change/toUser/
### change password email
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
# POST-/api/push/oplata/toUser
### Payment for app push-notification
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
# POST-/api/push/new-fee/toUser/
### push-Notification "new fee"
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
 # POST-/api/push/status-fee/toUser/
 ### push-Notification "changed status of your fee"
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
# POST-/api/push/camera/toUser/
 ### push-Notification camera in "xxx" metrs
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