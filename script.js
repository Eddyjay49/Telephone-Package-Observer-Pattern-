
// TELEPHONE CLASS (SUBJECT)
class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  // Add a phone number
  AddPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      this.phoneNumbers.push(number);
    }
  }

  // Remove a phone number
  RemovePhoneNumber(number) {
    this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
  }

  // Dial a phone number
  DialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      console.log(`Dialling ${number}...`);
      this.NotifyObservers(number);
    } else {
      console.log("Number not found!");
    }
  }

  
  // OBSERVER METHODS
  

  AddObserver(observer) {
    this.observers.push(observer);
  }

  RemoveObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  NotifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}


// OBSERVER 1
// Prints the phone number


class PrintNumberObserver {
  update(number) {
    console.log(number);
  }
}


// OBSERVER 2
// Prints "Now Dialling"


class DialMessageObserver {
  update(number) {
    console.log("Now Dialling");
  }
}



// USAGE / TESTING

const phone = new Telephone();

// Create observers
const observer1 = new PrintNumberObserver();
const observer2 = new DialMessageObserver();

// Register observers
phone.AddObserver(observer1);
phone.AddObserver(observer2);

// Add phone numbers
phone.AddPhoneNumber("08062574649");
phone.AddPhoneNumber("09155726950");

// Dial a number
phone.DialPhoneNumber("08062574649");