interface Users {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: Users[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1. Создать строку из имен пользователей через запятую
const getUserNames: string = users.map((user) => user.name).join(", ");

// 2. Посчитать общее количнство машин у пользователей
const carsTotal: number = users.reduce((acc, user) => {
  if (user.cars) {
    acc += user.cars.length;
  }
  return acc;
}, 0);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function sortEducated(users: Users[]): Users[] {
  return users.filter((user) => {
    return user.hasEducation;
  });
}

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function sortAnimals(users: Users[]): Users[] {
  return users.filter((user) => {
    return user.animals;
  });
}

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
// const getCarNames: string = users.map((user) => user.cars).join(",");

function getCarNames2(arr): string {
  return arr.map((user) => user.cars).join(",");
}

console.log(getCarNames2(users));
