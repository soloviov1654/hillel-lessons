const supermarket = {
  owners: [
    { name: "andrey", salary: 10000 },
    { name: "dima", salary: 10000 },
  ],
  managers: {
    macro: [
      { name: "nastya", salary: 1000 },
      { name: "vlad", salary: 1000 },
    ],
    finance: [
      { name: "gena", salary: 500 },
      { name: "artur", salary: 500 },
      { name: "vadim", salary: 500 },
    ],
  },
  cashiers: [
    { name: "varya", salary: 100 },
    { name: "alex", salary: 100 },
  ],
};

function getSumSalary(supermarket) {
  let sum = 0;
  if (Array.isArray(supermarket)) {
    for (let i = 0; i < supermarket.length; i++) {
      sum += supermarket[i].salary;
    }
  } else if (typeof supermarket === "object" && supermarket !== null) {
    for (let key in supermarket) {
      sum += getSumSalary(supermarket[key]);
    }
  }

  return sum;
}

const salarySum = getSumSalary(supermarket);
console.log(salarySum);
