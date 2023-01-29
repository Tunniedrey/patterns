class telephone {
    constructor(){
        this.phoneNumbers = [];
    }
    addPhoneNumber(observer) {
        this.phoneNumbers.push(observer);
    }
    removePhoneNumber(observer) {
        const index =
        this.phoneNumbers.indexOf(observer);
        if (index > -1){
            this.phoneNumbers.splice(index,1);
        }
    }
    dialPhoneNumber(observer) {
        const index =
        this.phoneNumbers.indexOf(observer);
        if (index > 1) {
            const phoneNumber =
        this.phoneNumbers[index];
            phoneNumber.print();
            phoneNumber.notify();
        } else {
            console.log("Phone number doesn't exist");
        }
    }
}

class observer {
    constructor(observer) {
        this.observer = observer;
    }
    print() {
        console.log(this.observer);
    }
    notify() {
        console.log("Now Dialling" + this.observer);
    }
}

const caller = new telephone();
const phoneNumber1 = new
observer ("112233");

caller.addPhoneNumber(phoneNumber1);
caller.addPhoneNumber(phoneNumber2);
caller.removePhoneNumber(phoneNumber2);

caller.dialPhoneNumber(phoneNumber1);
caller.dialPhoneNumber(phoneNumber2);
