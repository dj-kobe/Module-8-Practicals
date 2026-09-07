//PA0801 and PA0804


function SaveDataLocally(){
    const userName = document.getElementById("Username").value
    localStorage.setItem('userName', userName)


}

function getDataLocally (){
    const getUserName = localStorage.getItem('userName')
    console.log(getUserName)
}


getDataLocally()

function removeDataLocally (){
    const removeUserName = localStorage.removeItem('userName')
    console.log(removeUserName)
}


removeDataLocally()

//PA0805
const registration = {
    name: "Mojalefa",
    email: "mojalefamaarman20@gmail.com"
}

const convertJavascriptToJSON = JSON.stringify(registration)
localStorage.setItem("registration", convertJavascriptToJSON)

const saveData = localStorage.getItem(registration

    const registrationData = JSON.parse
    console.log(registrationData)
)