function AboutStudent(name, surname, year, marks) {
  this.name = name;
  this.surname = surname;
  this.year = year;
  this.marks = marks;
  this.attendance = [];

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };

  this.setPresent = function () {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    }
  };
  this.setAbsent = function () {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    }
  };
  this.getAverageMarks = function () {
    let marksSum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      marksSum += this.marks[i];
    }
    return marksSum / this.marks.length;
  };
this.getAverageAttendance = function () {
  if (this.attendance.length === 0) return 0;
  return this.attendance.filter(Boolean).length / this.attendance.length;
}

this.getSummary = function () {
  const avgMark = this.getAverageMarks();
    const avgAttend = this.getAverageAttendance();

    if (avgMark > 90 && avgAttend > 0.9) {
      return "Молодець!";
    } else if (avgMark >= 90 || avgAttend >= 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}


const student1 = new AboutStudent(
  "dima",
  "pavlov",
  1997,
  [100, 80, 100, 70, 60, 100, 100, 60, 100,100, 80, 100, 70, 60, 100, 100, 60, 100,100,100,100,100,100,100,100,100]
);
const student2 = new AboutStudent(
  "anton",
  "ivanov",
  1990,
  [100, 80, 100, 100, 100, 100, 100, 60, 100,100, 80, 100, 70, 100, 100, 100, 60, 100]
);
const student3 = new AboutStudent(
  "vlad",
  "sidorov",
  2000,
  [10, 80, 100, 100, 10, 100, 100, 60, 100,100, 80, 100, 70, 10, 100, 100, 60, 100]
);
const testVisitStudent2 = 10;
for (let i=0; i< testVisitStudent2; i++) {student2.setPresent();}

console.log(`
  student name: ${student1.name}
  student surname: ${student1.surname}
  student age: ${student1.getAge()}
  marks average: ${student1.getAverageMarks()}
  summary: ${student1.getSummary()}
  `);

  console.log(`
  student name: ${student2.name}
  student surname: ${student2.surname}
  student age: ${student2.getAge()}
  marks average: ${student2.getAverageMarks()}
  summary: ${student2.getSummary()}
  `);

    console.log(`
  student name: ${student3.name}
  student surname: ${student3.surname}
  student age: ${student3.getAge()}
  marks average: ${student3.getAverageMarks()}
  summary: ${student3.getSummary()}
  `);
