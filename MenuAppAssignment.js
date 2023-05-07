
//Created a Phonebook

class Contact {
    constructor (name, phoneNumber){
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    describe(){
        return `New contact ${this.name}, ${this.phoneNumber} has been added.`
    }
}


class Menu {
    constructor(){
        this.phonebook = []
        this.select = null;
    }
    start() {
        let select = this.showMenuOptions();
        while (select != 0){
            switch (select){
                case '1':
                    this.viewPhonebook();
                    break;
                case '2':
                    this.createContact();
                    break;
                case '3':
                    this.deleteContact();
                default:
                    select = 0;            
            }
            select = this.showMenuOptions();
        }
        alert('Finished');
    }

    showMenuOptions(){
        return prompt(`
        0) Done
        1) View Phonebook
        2) Create Contact
        3) Delete Contact
        `)
    }
    // I was not able to find a way to make the phone number be visible along with the name.
    viewPhonebook(){
        let contactString = ''
        for(let i = 0; i < this.phonebook.length; i++) {
            contactString += i + ')' + this.phonebook[i].name + ',' + '\n';
            ;
        }
        alert (contactString);
    }
    createContact() {
        let name = prompt (`Enter new contact name`);
        let phoneNumber = prompt (`Enter phone number`);
        this.phonebook.push(new Contact( name, phoneNumber));
    
    }
    deleteContact() {
        let index = prompt (`Enter the index of the contact you wish to delete.`);
        if (index > -1 && index < this.phonebook.length) {
            this.phonebook.splice(index, 1);
        }
    }
}
let menu = new Menu();
menu.start();
