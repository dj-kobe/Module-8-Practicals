class speaker {
    constructor(name, age, topic, gender, company){
            this.name = name,
            this.age = age,
            this.topic = topic,
            this.gender = gender,
            this.company = company
    }
    async getSpeakers(){
  try{
    const response = await fetch("https://randomuser.me/api/?results=6")
    const data = await response.json()
    console.log(data)
  }catch(error){

  }

}
}

const speaker1 = new Speaker ("Kabelo", 22, "Web Development", "Male", "mLab")
const speaker2 = new Speaker ("Zandile", 23, "Product lead", "Female","Zandi Labs")


//PA0603
class keynoteSpeaker extends Speaker {
    constructor(name, age, topic, gender, company, sessionTime){
    super(name, age, topic, gender,);
    this.sessionTime = sessionTime
    }

    displayBio(){
        return this.name + "Is the keynote speaker" + this.sessionTime
    }

}

const keynote1 = new keynoteSpeaker("Kaybee", 22, "Web Development", "Male", "mLab", "30 min")