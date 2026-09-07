//PA0401 Retrieve data from an API

const apiUrl="https://randomuser.me/api/?results=6"

 fetch(apiUrl).
 then(function(response){
    return response.json()
 }).then(function(data){
    console.log(data)
 })

//PA0402

speakers = {
    name: "Tshepo",
    surname: "Louw",
    age: "23",
    province: "Northern_cape",
    attendanceType: "Physical",
    topic: "Web development"
}

console.log(speakers)

const convertObjectIntoJson = JSON .stringify(speakers)
console.log(convertObjectIntoJson)


speakers = {
    "name": "Tshepo",
    "surname": "Louw",
    "age": "23",
    "province": "Northern_cape",
    "attendanceType": "Physical",
    topic: "Web development"
}

//PA0403 Refactor code using JQuery 

$.ajax({
  url:"https://randomuser.me/api/?results=6",
  method: "Get",
  success: function(data){
  console.log(data)},
  error: function(error){
    console.log(error)
  } 
})


//PA0404
async function getSpeakers(){
  try{
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  }catch(error){

  }

}
//PA0405
const xhr = new XMLHttpRequest()
xhr.open(
"GET",  //GET = retrieve information
apiUrl,  //Where the request must be sent
true,   //true make the request asynchronus

);

//Handle the response
//Onload runs when the server has responded 
xhr.onload = function(){
//check whether the HTTP Request was successful

if (xhr.status === 200){
console.log(
  "Raw JSON",
  xhr.responseText
)
}
}
