const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// 1. Создать строку из названий предметов написаных через запятую
const getSubjectName = () => Object.keys(subjects).join(", ");

console.log(getSubjectName(subjects).length);

// 2. Посчитать общее количнство студентов и учителей на всех предметах
const calcPeopleTotal = () => {
  return Object.values(subjects).reduce((total, subject) => {
    return total + subject.students + subject.teachers;
  }, 0);
};

console.log(calcPeopleTotal(subjects));

// 3. Получить среднее количество студентов на всех пердметах
const calcAveragePeople = () => {
  const arrLength = Object.keys(subjects).length;
  return Object.values(subjects).reduce((total, subject) => {
    return total + subject.students / arrLength;
  }, 0);
};

console.log(calcAveragePeople(subjects));

// 4. Создать массив из объектов предметов

const objArray = () => Object.keys(subjects);

console.log(objArray(subjects));

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const sortArray = () => {
  let arr = Object.values(subjects);
  return arr.sort((a, b) => b.students - a.students);
};

console.log(sortArray(subjects));
