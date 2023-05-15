import Student from './students.js'
//  массив с данными студентов
const students = [
  new Student('Иван', 'Иванов', 'Иванович', new Date(1986, 4, 11), new Date(2020, 8, 1), 'Кулинарный'),
  new Student('Петр', 'Петров', 'Иванович', new Date(1996, 2, 21), new Date(2021, 8, 1), 'Автомобильный'),
  new Student('Николай', 'Смирнов', 'Артемович', new Date(1985, 6, 12), new Date(2020, 8, 1), 'Математический'),
  new Student('Сергей', 'Травнов', 'Алексеевич', new Date(1996, 7, 17), new Date(2021, 8, 1), 'Кулинарный'),
  new Student('Константин', 'Карманов', 'Кириллович', new Date(1976, 9, 21), new Date(2019, 8, 1), 'Автомобильный'),
  new Student('Алена', 'Степанова', 'Сергеевна', new Date(1992, 3, 18), new Date(2018, 8, 1), 'Кулинарный'),
  new Student('Светлана', 'Сергеевна', 'Непомнящая', new Date(1997, 1, 11), new Date(2021, 8, 1), 'Кулинарный'),
  new Student('Ангелина', 'Терепаева', 'Михайловна', new Date(1999, 9, 19), new Date(2019, 8, 1), 'Автомобильный'),
  new Student('Степан', 'Стукало', 'Максимович', new Date(1998, 3, 23), new Date(2018, 8, 1), 'Кулинарный'),
  new Student('Владимир', 'Скачалов', 'Всеволодович', new Date(1973, 11, 21), new Date(2021, 8, 1), 'Кулинарный'),
  new Student('Татьяна', 'Курчива', 'Ивановна', new Date(1991, 9, 21), new Date(2022, 8, 1), 'Автомобильный'),
  new Student('Ирина', 'Селезнева', 'Станиславовна', new Date(1986, 8, 16), new Date(2021, 8, 1), 'Кулинарный'),
  new Student('Даниил', 'Астахов', 'Антонович', new Date(1981, 8, 25), new Date(2019, 8, 1), 'Математический'),
  new Student('Александр', 'Селехов', 'Антипонович', new Date(1981, 8, 25), new Date(2001, 8, 1), 'Математический'),
  new Student('Семен', 'Астран', 'Анатонович', new Date(1981, 8, 25), new Date(2002, 8, 1), 'Математический'),
]
// глобальный атрибут куда мы будем вкладывать данные для таблицы
const $studentsList = document.getElementById('students-list')
const $studentsListTHALL = document.querySelectorAll('.stud__table th')
// переменные для сортировки
let column = 'fio'
let columnDir = true

// создаем новую строку для студента
function newStudentTR(student) {
  const $studentTR = document.createElement('tr')
  const $fioTD = document.createElement('td')
  const $facultyTD = document.createElement('td')
  const $birthDateTD = document.createElement('td')
  const $studyYearTD = document.createElement('td')
  // получаем данные для таблицы
  $fioTD.textContent = student.fio
  $facultyTD.textContent = student.getFaculty()
  $birthDateTD.textContent = student.dateAge()
  $studyYearTD.textContent = student.studyYears()
  // добавляем данные в таблицу
  $studentTR.append($fioTD)
  $studentTR.append($facultyTD)
  $studentTR.append($birthDateTD)
  $studentTR.append($studyYearTD)
  return $studentTR
}
//  Сортировка
function getSort(prop, dir) {
  const studentsCopy = [...students]
  return studentsCopy.sort(function (studentA, studentB) {
    if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
      return -1;
  })
}


// фильтрация
function filter(students, prop, value) {
  let studentsCopy = []
  for (const student of students) {
    if (String(student[prop]).toLowerCase().includes(value) == true || String(student[prop]).toUpperCase().includes(value) == true || String(student[prop]).includes(value) == true) studentsCopy.push(student)
  }
  return studentsCopy
}
// фильтрация по ФИО
document.getElementById('fio-filter').addEventListener('input', function () {
  let studentsCopy = [...students]
  let fioValue = document.getElementById('fio-filter').value
  $studentsList.innerHTML = ''
  if (fioValue !== '') {
    studentsCopy = filter(students, 'fio', fioValue)
    for (const student of studentsCopy) {
      $studentsList.append(newStudentTR(student))
    }
  }
  if (fioValue == '') render()
})
// фильтрация по Факультету
document.getElementById('faculty-filter').addEventListener('input', function () {
  let studentsCopy = [...students]
  let fioValue = document.getElementById('faculty-filter').value
  $studentsList.innerHTML = ''
  if (fioValue !== '') {
    studentsCopy = filter(students, 'faculty', fioValue)
    for (const student of studentsCopy) {
      $studentsList.append(newStudentTR(student))
    }
  }
  if (fioValue == '') render()
})
// фильтрация по году начала обучения
document.getElementById('start-study-filter').addEventListener('input', function () {
  let studentsCopy = [...students]
  let fioValue = document.getElementById('start-study-filter').value
  $studentsList.innerHTML = ''
  if (fioValue !== '') {
    studentsCopy = filter(students, 'startStude', fioValue)
    for (const student of studentsCopy) {
      $studentsList.append(newStudentTR(student))
    }
  }
  if (fioValue == '') render()
})
// фильтрация по году окончания обучения
document.getElementById('end-study-filter').addEventListener('input', function () {
  let studentsCopy = [...students]

  let fioValue = document.getElementById('end-study-filter').value
  $studentsList.innerHTML = ''
  if (fioValue !== '') {
    studentsCopy = filter(students, 'endStude', fioValue)
    for (const student of studentsCopy) {
      $studentsList.append(newStudentTR(student))
    }
  }
  if (fioValue == '') render()
})
// функция для создания копии массива студентов и обработки его
// для каждого нового студента добавляется новая строка
function render() {
  let studentsCopy = [...students]

  studentsCopy = getSort(column, columnDir)

  $studentsList.innerHTML = ''
  // обнуление строк ввода после нажатия на кнопкеу добавить
  document.getElementById('name-input').value = ('')
  document.getElementById('surName-input').value = ('')
  document.getElementById('middleName-input').value = ('')
  document.getElementById('birthDate-input').value = ('')
  document.getElementById('startStude-input').value = ('')
  document.getElementById('faculty-input').value = ('')

  for (const student of studentsCopy) {
    $studentsList.append(newStudentTR(student))
  }
}
// сортировка по нажатию на колонку
$studentsListTHALL.forEach(element => {
  element.addEventListener('click', function () {
    column = this.dataset.column;
    columnDir = !columnDir
    render()
  })
})
// по нажатию кнопки добавляем строку с данными из полей ввода
document.getElementById('forms').addEventListener('submit', function (e) {
  // убираем стандартные действия отправки формы
  e.preventDefault()
  // добавляем данные из инпута в нового студента
  students.push(new Student(
    document.getElementById('name-input').value,
    document.getElementById('surName-input').value,
    document.getElementById('middleName-input').value,
    new Date(document.getElementById('birthDate-input').value),
    new Date(document.getElementById('startStude-input').value),
    document.getElementById('faculty-input').value));

  render()
})

render()
