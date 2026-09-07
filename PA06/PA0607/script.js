//Literal objects

speaker = {
    name : "Tshepo",
    age : 22 ,
    gender : "Male"

}

document.getElementById("name").innerHTML = speaker.name
class person {
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender
    }

    walk(){
        console.log(walking)
    }
}

const person1 = new person("Tshepo", 23, "Male")
const person2 = new person("Zandi", 22, "Female")

document.getElementById("age").innerHTML = person1.age
document.getElementById("gender").innerHTML = person1.gender
document.getElementById("name1").innerHTML = person2.name
document.getElementById("age1").innerHTML = person2.age
document.getElementById("gender1").innerHTML = person2.gender
