// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.


interface Country {
  country: string,
  abbreviation: string,
  city: string,
  currency_name: string,
  population: number
}

const countries: Country[] = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959

  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050
  }
]

function func() {

}

function getCountryString(countries: Country[]) : string {
  return countries.map((countryItem) => countryItem.country).join(", ")
}

const countryString = getCountryString(countries);
console.log(str);


function getCountryPopulation(countries: Country[]) : number {
  return countries.reduce((acc, countryPopulation) => {return acc + countryPopulation.population}, 0)
}

const countryPopulation = getCountryPopulation(countries)
console.log(population);

function sortCountryArray(countries: Country[]) : string[] {
  const sortArr =  countries.sort((a, b) => a.country > b.country ? 1 : -1)
  return sortArr.map((el) => el.country);
}

console.log(sortCountryArray(countries));


