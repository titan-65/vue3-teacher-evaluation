<script setup>
    import { ref } from 'vue'
import { jsPDF } from 'jspdf'
import FormEvalItem from './FormEvalItem.vue'
import lessonData from '../../../data/lesson.json'
import studentData from '../../../data/student.json'
import teacherData from '../../../data/teacher.json'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const className = ref('')
const schoolName = ref('')
const topicName = ref('')
const feedbackInput = ref('')

let { strengths, weakness, wayForward } = lessonData
let { studentStrengths, studentWayForward, studentWeakness } = studentData
let { teacherStrengths, teacherWeakness, teacherWayForward } = teacherData

let _strength = strengths.map((strength) => ({
  ...strength,
  isSelected: false,
}))

const _weakness = weakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}))

const _wayForward = wayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}))

const _studentStrengths = studentStrengths.map((strength) => ({
  ...strength,
  isSelected: false,
}))

const _studentWeakness = studentWeakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}))

const _studentWayForward = studentWayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}))

const _teacherStrengths = teacherStrengths.map((strength) => ({
  ...strength,
  isSelected: false,
}))

const _teacherWeakness = teacherWeakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}))

const _teacherWayForward = teacherWayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}))

const onStrengthChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _strength[selectedIndex].isSelected = !_strength[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onWeaknessChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _weakness[selectedIndex].isSelected = !_weakness[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onWayForwardChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _wayForward[selectedIndex].isSelected = !_wayForward[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onStudentStrengthChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _studentStrengths[selectedIndex].isSelected =
      !_studentStrengths[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onStudentWeaknessChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _studentWeakness[selectedIndex].isSelected =
      !_studentWeakness[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onStudentWayForwardChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _studentWayForward[selectedIndex].isSelected =
      !_studentWayForward[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onTeacherStrengthChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _teacherStrengths[selectedIndex].isSelected =
      !_teacherStrengths[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onTeacherWeaknessChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _teacherWeakness[selectedIndex].isSelected =
      !_teacherWeakness[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

const onTeacherWayForwardChecked = (selectedIndex) => {
  console.log(selectedIndex)
  try {
    _teacherWayForward[selectedIndex].isSelected =
      !_teacherWayForward[selectedIndex].isSelected
  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex)
  }
}

// const checkAllData = () => {
//   let newArray = []
//   let selectedStr = _strength.filter((strength) => strength.isSelected === true)
//   newArray.push(selectedStr)
//   console.log(newArray)
// }

// checkAllData()
const showTooltip = (flag) => {
  switch (flag) {
    case 1:
      document.getElementById('tooltip1').classList.remove('opacity-0')
      break
    case 2:
      document.getElementById('tooltip2').classList.remove('opacity-0')
      break
    case 3:
      document.getElementById('tooltip3').classList.remove('opacity-0')
      break
  }
}

const hideTooltip = (flag) => {
  switch (flag) {
    case 1:
      document.getElementById('tooltip1').classList.add('opacity-0')
      break
    case 2:
      document.getElementById('tooltip2').classList.add('opacity-0')
      break
    case 3:
      document.getElementById('tooltip3').classList.add('opacity-0')
      break
  }
}

const handleSubmit = () => {
  const personalData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  }

  const lessonData = []
  const studentData = []
  const teacherData = []

  let selectedStrengths = _strength.filter((strength) => strength.isSelected === true)
  let selectedWeakness = _weakness.filter((weakness) => weakness.isSelected === true)
  let selectedWayForward = _wayForward.filter(
    (wayForward) => wayForward.isSelected === true
  )
  let selectedStudentStrengths = _studentStrengths.filter(
    (strength) => strength.isSelected === true
  )
  let selectedStudentWeakness = _studentWeakness.filter(
    (weakness) => weakness.isSelected === true
  )
  let selectedStudentWayForward = _studentWayForward.filter(
    (wayForward) => wayForward.isSelected === true
  )
  let selectedTeacherStrengths = _teacherStrengths.filter(
    (strength) => strength.isSelected === true
  )
  let selectedTeacherWeakness = _teacherWeakness.filter(
    (weakness) => weakness.isSelected === true
  )
  let selectedTeacherWayForward = _teacherWayForward.filter(
    (wayForward) => wayForward.isSelected === true
  )

  for (let i = 0; i < selectedStrengths.length; i++) {
    lessonData.push(selectedStrengths[i].content)
  }

  for (let i = 0; i < selectedWeakness.length; i++) {
    lessonData.push(selectedWeakness[i].content)
  }

  for (let i = 0; i < selectedWayForward.length; i++) {
    lessonData.push(selectedWayForward[i].content)
  }

  for (let i = 0; i < selectedStudentStrengths.length; i++) {
    studentData.push(selectedStudentStrengths[i].content)
  }

  for (let i = 0; i < selectedStudentWeakness.length; i++) {
    studentData.push(selectedStudentWeakness[i].content)
  }

  for (let i = 0; i < selectedStudentWayForward.length; i++) {
    studentData.push(selectedStudentWayForward[i].content)
  }

  for (let i = 0; i < selectedTeacherStrengths.length; i++) {
    teacherData.push(selectedTeacherStrengths[i].content)
  }

  for (let i = 0; i < selectedTeacherWeakness.length; i++) {
    teacherData.push(selectedTeacherWeakness[i].content)
  }

  for (let i = 0; i < selectedTeacherWayForward.length; i++) {
    teacherData.push(selectedTeacherWayForward[i].content)
  }

  // console.log(selectedStrengths)
  console.log(lessonData)
  console.log(studentData)
  console.log(teacherData)

  const date = new Date()

  const today = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()

  if (!firstName.value || !lastName.value || !schoolName.value) {
    alert('Please fill in all fields in the school information section')
    return
  }

  const doc = new jsPDF()

  doc.setFontSize(22)
  doc.text(schoolName.value, 105, 10, null, null, 'center')

  doc.setFontSize(12)
  doc.text(`Name: ${firstName.value} ${lastName.value}`, 10, 20)
  doc.text(`Email: ${email.value}`, 10, 30)
  doc.text(`Class: ${className.value}`, 10, 40)
  doc.text(`Lesson Title/Topic: ${className.value}`, 10, 50)

  doc.setLineWidth(0.5)
  doc.line(10, 55, 200, 55)

  doc.setFontSize(12)
  doc.text(
    'Lesson plan reflection and evaluation is a powerful tool that will help you become a better teacher.',
    10,
    60
  )

  // for loop lessonData
  doc.setFontSize(16)
  doc.text('Lesson Evaluation', 10, 70)

  lessonData.forEach((data, index) => {
    doc.setFontSize(12)
    doc.text(data, 15, 80 + index * 10)
  })

  doc.addPage()
  doc.setFontSize(22)
  doc.text(schoolName.value, 105, 10, null, null, 'center')

  doc.setFontSize(12)
  doc.text(`Name: ${firstName.value} ${lastName.value}`, 10, 20)
  doc.text(`Email: ${email.value}`, 10, 30)
  doc.text(`Class: ${className.value}`, 10, 40)
  doc.text(`Lesson Title/Topic: ${className.value}`, 10, 50)
  doc.text(`Date: ${today}`, 10, 60)

  doc.setLineWidth(0.5)
  doc.line(10, 55, 200, 65)

  doc.setFontSize(16)
  doc.text('Student Evaluation', 10, 70)

  studentData.forEach((data, index) => {
    doc.setFontSize(12)
    doc.text(data, 15, 80 + index * 10)
  })

  doc.addPage()
  doc.setFontSize(22)
  doc.text(schoolName.value, 105, 10, null, null, 'center')

  doc.setFontSize(12)
  doc.text(`Name: ${firstName.value} ${lastName.value}`, 10, 20)
  doc.text(`Email: ${email.value}`, 10, 30)
  doc.text(`Class: ${className.value}`, 10, 40)
  doc.text(`Lesson Title/Topic: ${className.value}`, 10, 50)

  doc.setLineWidth(0.5)
  doc.line(10, 55, 200, 55)

  doc.setFontSize(16)
  doc.text('Teacher Evaluation', 10, 60)

  teacherData.forEach((data, index) => {
    doc.setFontSize(12)
    doc.text(data, 15, 70 + index * 10)
  })

  doc.addPage()
  doc.setFontSize(22)
  doc.text(schoolName.value, 105, 10, null, null, 'center')

  doc.setFontSize(12)
  doc.text(`Name: ${firstName.value} ${lastName.value}`, 10, 20)
  doc.text(`Email: ${email.value}`, 10, 30)
  doc.text(`Class: ${className.value}`, 10, 40)
  doc.text(`Lesson Title/Topic: ${className.value}`, 10, 50)

  doc.setLineWidth(0.5)
  doc.line(10, 55, 200, 55)

  doc.setFontSize(16)
  doc.text('Additional Evaluation', 10, 60)

  doc.setFontSize(12)
  doc.text(`${feedbackInput.value}`, 10, 70)

  doc.save(`${className.value} -${firstName.value} ${lastName.value} - Evaluation.pdf`)
}
</script>
<template>
    <div class="bg-gray-200">
        <form id="login" @submit.prevent="handleSubmit">
            <div class="bg-white dark:bg-gray-800">
                <div class="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                Teacher Evaluation
                            </p>
                            <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                            <div class="rounded relative mt-8 h-48">
                                <img src="https://images.unsplash.com/photo-1596633608169-2ee5f4ed60e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="w-full h-full object-cover rounded absolute shadow" />
                                <div class="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"></div>
                                <div class="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                    <p class="text-xs text-gray-100">Change Cover Photo</p>
                                    <div class="ml-2 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1="16" y1="5" x2="19" y2="8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                    <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                Teacher and Class Information
                            </p>
                            <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mx-auto pt-4">
                        <div class="container mx-auto">
                            <form class="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label for="FirstName" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">First Name</label>
                                    <input type="text" v-model="firstName" id="FirstName" name="firstName" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Enter First Name" />
                                </div>
                                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label for="LastName" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Last Name</label>
                                    <input type="text" v-model="lastName" id="LastName" name="lastName" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Enter Last Name" />
                                </div>
                                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label for="Email" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Email</label>
                                    <div class="border border-green-400 shadow-sm rounded flex">
                                        <div class="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                                <polyline points="3 7 12 13 21 7" />
                                            </svg>
                                        </div>
                                        <input type="text" id="Email" name="email" v-model="email" required class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" placeholder="example@gmail.com" />
                                    </div>
                                    <div class="flex justify-between items-center pt-1 text-green-400 hidden">
                                        <p class="text-xs">Email submission success!</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                            <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                            0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" stroke="currentColor" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-row">
                                    <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                        <label for="FirstName" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">School</label>
                                        <input type="text" v-model="schoolName" id="schoolName" name="schoolName" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Enter Name of School" />
                                    </div>
                                    <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-5">
                                        <label for="FirstName" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Class</label>
                                        <input type="text" v-model="className" id="className" name="className" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Enter Name of Class" />
                                    </div>
                                </div>
                                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label for="FirstName" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Topic/Plan Title</label>
                                    <input type="text" v-model="topicName" id="topicName" name="topicName" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Enter Title of Topic Here" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
                    <div class="xl:w-full py-5 px-8 bg-orange-600">
                        <div class="flex items-center mx-auto">
                            <div class="container mx-auto">
                                <div class="mx-auto xl:w-full">
                                    <p class="text-lg text-white dark:text-gray-100 font-bold">
                                        Evaulation Choices
                                    </p>
                                    <p class="text-lg text-white dark:text-gray-400 pt-1">
                                        Please select choices based on the categories involving Lesson,
                                        Student and Teacher. Categories highlights the strength, weakness, and
                                        way forward for your lesson.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto pb-6">
                        <div class="flex items-center pb-4 border-b bg-sky-500 border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <p class="text-xl font-bold ml-2 text-gray-800 dark:text-gray-100">
                                Lesson
                            </p>
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-sm text-gray-800 dark:text-gray-100 font-bold">
                                            Lesson Strengths
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Lesson.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(strength, index) in _strength" :key="strength" :strength="strength" @some-event="() => onStrengthChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8 bg-white">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Lesson Weakness
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Lesson.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(evaluate, index) in _weakness" :key="evaluate" :strength="evaluate" @some-event="() => onWeaknessChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8 bg-white">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Lesson Way Forward
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Lesson.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(evaluate, index) in _wayForward" :key="evaluate" :strength="evaluate" @some-event="() => onWayForwardChecked(index)" />
                        </div>
                    </div>
                    <!-- Student Starts Here -->
                    <div class="container mx-auto pb-6">
                        <div class="flex items-center pb-4 bg-sky-500 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <p class="text-lg font-bold ml-2 text-gray-800 dark:text-gray-100">
                                Student
                            </p>
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Student Strengths
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Student
                                            Strengths.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(studentEval, index) in _studentStrengths" :key="studentEval" :strength="studentEval" @some-event="() => onStudentStrengthChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Student Weakness
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Student
                                            Weakness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(studentEval, index) in _studentWeakness" :key="studentEval" :strength="studentEval" @some-event="() => onStudentWeaknessChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Student WayForward
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Student Way
                                            Forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(studentEval, index) in _studentWayForward" :key="studentEval" :strength="studentEval" @some-event="() => onStudentWayForwardChecked(index)" />
                        </div>
                    </div>
                    <!-- Student Ends Here -->
                    <!-- Teacher Starts Here -->
                    <div class="container mx-auto pb-6">
                        <div class="flex items-center pb-4 border-b bg-sky-500 border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <p class="text-lg font-bold ml-2 text-gray-800 dark:text-gray-100">
                                Teacher
                            </p>
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Teacher Strengths
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Teacher
                                            Strengths.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(teacherEval, index) in _teacherStrengths" :key="teacherEval" :strength="teacherEval" @some-event="() => onTeacherStrengthChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Teacher Weakness
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Teacher
                                            Weakness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(teacherEval, index) in _teacherWeakness" :key="teacherEval" :strength="teacherEval" @some-event="() => onTeacherWeaknessChecked(index)" />
                        </div>
                        <div class="xl:w-full py-5 px-8">
                            <div class="flex items-center mx-auto">
                                <div class="container mx-auto">
                                    <div class="mx-auto xl:w-full">
                                        <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                                            Teacher Way Forward
                                        </p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            Please select choices based on the categories involving Teacher Way
                                            Forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8">
                            <FormEvalItem v-for="(teacherEval, index) in _teacherWayForward" :key="teacherEval" :strength="teacherEval" @some-event="() => onTeacherWayForwardChecked(index)" />
                        </div>
                    </div>
                    <!-- Teacher Ends Here -->
                </div>
                <div class="mt-8 flex flex-col xl:w-full lg:w-1/2 md:w-1/2 w-full">
                    <label for="about" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Additional Evaluation</label>
                    <textarea id="about" v-model="feedbackInput" name="about" class="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Additional comments or necessary information" rows="5"></textarea>
                    <p class="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 1000</p>
                </div>
                <div class="container mx-auto w-11/12 xl:w-full">
                    <div class="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                        <button class="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
                            Cancel
                        </button>
                        <button class="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style>
.checkbox:checked {
    /* Apply class right-0*/
    right: 0;
}

.checkbox:checked+.toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>