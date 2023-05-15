// создаем шаблон для каждого студента
export default class Student {
  constructor(name, surName, middleName, birthDate, startStude, faculty) {
    this.name = name
    this.middleName = middleName
    this.surName = surName
    this.birthDate = birthDate
    this.startStude = startStude
    this.faculty = faculty
  }
  //  функция для получения ФИО в нужном формате
  get fio() {
    return `${this.surName} ${this.name} ${this.middleName}`
  }
  //  функция для полученя даты рождения
  getBirthDateString() {
    let dd = this.birthDate.getDate();
    let mm = this.birthDate.getMonth() + 1;
    let yyyy = this.birthDate.getFullYear();

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    return dd + '.' + mm + '.' + yyyy;
  }
  //  функция для получения возраста
  getAge() {
    let today = new Date();
    let birthDate = this.birthDate;
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    let birthYear = birthDate.getFullYear();
    let startStudyYear = this.startStude.getFullYear();

    let startStudeAge = startStudyYear - birthYear;

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    //  выводим возраст с правильным синтаксисом
    if (startStudeAge < 16) return `Тебе ${startStudeAge} лет! Ты слишком молод!`
    if (age >= 16 && age < 21) return `(${age} лет)`
    if (age == 21) return `(${age} год)`
    if (age >= 25 && age < 31) return `(${age} лет)`
    if (age == 31) return `(${age} год)`
    if (age >= 35 && age < 41) return `(${age} лет)`
    if (age == 41) return `(${age} год)`
    if (age >= 45 && age < 51) return `(${age} лет)`
    if (age == 51) return `(${age} год)`
    if (age >= 55 && age < 61) return `(${age} лет)`
    if (age == 61) return `(${age} год)`
    if (age >= 65 && age < 71) return `(${age} лет)`
    if (age == 71) return `(${age} год)`
    if (age >= 75 && age < 81) return `(${age} лет)`
    if (age == 81) return `(${age} год)`
    if (age >= 85 && age < 91) return `(${age} лет)`
    if (age == 91) return `(${age} год)`
    if (age >= 95 && age < 101) return `(${age} лет)`
    if (age == 101) return `(${age} год)`
    if (age >= 105 && age < 121) return `(${age} лет)`
    if (age == 121) return `(${age} год)`

    return '(' + age + ' ' + 'года' + ')';
  }
  //  соеденяем дату рождения и возраст в одну переменную и выводим ее в нужном формате
  dateAge() {
    return this.getBirthDateString() + ' ' + this.getAge()
  }
  // функция для полученя периода обучения
  studyYears() {
    let yyyy = this.startStude.getFullYear();
    let today = new Date();
    let year = today.getFullYear()
    let mounth = today.getMonth()
    let m = this.startStude.getMonth();
    let level = year - yyyy;

    if (level >= 4 || m <= mounth) return `${yyyy} - ${yyyy + 4} (Закончил) `

    return `${yyyy} - ${year} (${level + 1} курс) `
  }

  get endStude() {
    let yyyy = this.startStude.getFullYear();
    let endStude = yyyy + 4;
    return endStude
  }

  // функция для названия факультета
  getFaculty() {
    return `${this.faculty}`
  }
}
