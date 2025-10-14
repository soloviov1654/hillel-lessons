const users = {
  contacts: [
    {
      name: "dima",
      phone: "0958455963",
      email: "dima@example.com",
    },
    {
      name: "vlad",
      phone: "0958455967",
      email: "vlad@example.com",
    },
    {
      name: "stas",
      phone: "0958455966",
      email: "stas@example.com",
    },
  ],

  addContact() {
    const name = prompt("Enter name of new user:");
    const phone = prompt("Enter phone of new user:");
    const email = prompt("Enter name of email user:");
    users.contacts.push({ name, phone, email });
    console.log(users.contacts[users.contacts.length - 1]);
  },

  findContact() {
    const nameFromUser = prompt("Enter name of user:");
    const searchResult = users.contacts.filter(function (item) {
      return item.name === nameFromUser;
    });

    if (searchResult.length > 0) {
      console.log("Found contact:", searchResult[0]);
    } else {
      console.log("Contact not found");
    }
  },
};

const func = +prompt(`Select method:
1- add user 
2- find user`);

if (func === 1) {
  users.addContact();
} else if (func === 2) {
  users.findContact();
} else {
  console.log("invalid value, enter 1 or 2");
}
