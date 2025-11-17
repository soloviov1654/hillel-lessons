class Coach {
 constructor (name, work, rate) {
  this.name = name
  this.work= work
  this.rate = rate
 }


  displayInfo() {
    return `Coach: ${this.name} Specialization: ${this.work} Rating: ${this.rate}`;
  }
}


const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);
coach1.displayInfo();
coach2.displayInfo();
