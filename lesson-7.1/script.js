const userInfo = {
  name: "dima",
  age: 22,
  city: "kharkiv",

  getInfo() {
    console.log(`Name: ${userInfo.name}
Age: ${userInfo.age}
City: ${userInfo.city}`);
  },
};

userInfo.getInfo();
