<script setup>
import { ref } from "vue";
import { jsPDF } from "jspdf";
import FormEvalItem from "./FormEvalItem.vue";
import lessonData from "../../../data/lesson.json";
import studentData from "../../../data/student.json";
import teacherData from "../../../data/teacher.json";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const lessonArray = ref([]);

let { strengths, weakness, wayForward } = lessonData;
let { studentStrengths, studentWayForward, studentWeakness } = studentData;
let { teacherStrengths, teacherWeakness, teacherWayForward } = teacherData;

let _strength = strengths.map((strength) => ({
  ...strength,
  isSelected: false,
}));

const _weakness = weakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}));

const _wayForward = wayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}));

const _studentStrengths = studentStrengths.map((strength) => ({
  ...strength,
  isSelected: false,
}));

const _studentWeakness = studentWeakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}));

const _studentWayForward = studentWayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}));

const _teacherStrengths = teacherStrengths.map((strength) => ({
  ...strength,
  isSelected: false,
}));

const _teacherWeakness = teacherWeakness.map((weakness) => ({
  ...weakness,
  isSelected: false,
}));

const _teacherWayForward = teacherWayForward.map((wayForward) => ({
  ...wayForward,
  isSelected: false,
}));

const onStrengthChecked = (selectedIndex) => {
  console.log(selectedIndex);
  try {
    _strength[selectedIndex].isSelected = !_strength[selectedIndex].isSelected;

  } catch (e) {
    console.error('invalid selection using index: ', selectedIndex);
  }

};

const handleSubmit = () => {
  const formData = [];

  let selectedStrengths = _strength.fi

  console.log(formData);

  const doc = new jsPDF();

  doc.text(firstName.value, 10, 10);
  doc.text(lastName.value, 10, 10);
  doc.text(formData, 10, 10);
  doc.save(``);
};
</script>
<template>
  <div class="bg-gray-200 py-10">
    <form id="login" @submit.prevent>
      <div class="bg-white dark:bg-gray-800">
        <div class="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div
            class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800"
          >
            <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Profile
              </p>
              <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mx-auto">
            <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div class="rounded relative mt-8 h-48">
                <img
                  src="https://images.unsplash.com/photo-1596633608169-2ee5f4ed60e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  class="w-full h-full object-cover rounded absolute shadow"
                />
                <div
                  class="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"
                ></div>
                <div
                  class="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer"
                >
                  <p class="text-xs text-gray-100">Change Cover Photo</p>
                  <div class="ml-2 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-edit"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                      />
                      <path
                        d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                      />
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4"
        >
          <div
            class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5"
          >
            <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
              <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="mx-auto pt-4">
            <div class="container mx-auto">
              <form class="my-6 w-11/12 mx-auto xl:w-full xl:mx-0">
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="FirstName"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >First Name</label
                  >
                  <input
                    type="text"
                    v-model="firstName"
                    id="FirstName"
                    name="firstName"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="LastName"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    v-model="lastName"
                    id="LastName"
                    name="lastName"
                    required
                    class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    for="Email"
                    class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >Email</label
                  >
                  <div class="border border-green-400 shadow-sm rounded flex">
                    <div
                      class="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-mail"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="Email"
                      name="email"
                      v-model="email"
                      required
                      class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div
                    class="flex justify-between items-center pt-1 text-green-400 hidden"
                  >
                    <p class="text-xs">Email submission success!</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path
                        class="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                            0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                        stroke="currentColor"
                        stroke-width="0.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full"
        >
          <div class="xl:w-full py-5 px-8">
            <div class="flex items-center mx-auto">
              <div class="container mx-auto">
                <div class="mx-auto xl:w-full">
                  <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Evaulation Choices
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    Please select choices based on the categories involving
                    Lesson, Student, and Teacher. Categories highlights the
                    strength, weakness, and way forward your lesson.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto pb-6">
            <div
              class="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p
                class="text-xl font-bold ml-2 text-gray-800 dark:text-gray-100"
              >
                Lesson
              </p>
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-sm text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Lesson Strengths
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="(strength, index) in _strength"
                :key="strength"
                :strength="strength"
                @some-event="() => onStrengthChecked(index)"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Lesson Weakness
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="evaluate in weakness"
                :key="evaluate"
                :strength="evaluate"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Lesson Way Forward
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="evaluate in wayForward"
                :key="evaluate"
                :strength="evaluate"
              />
            </div>
          </div>
          <!-- Student Starts Here -->
          <div class="container mx-auto pb-6">
            <div
              class="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p
                class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100"
              >
                Student
              </p>
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Student Strengths
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="studentEval in studentStrengths"
                :key="studentEval"
                :strength="studentEval"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Student Weakness
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="studentEval in studentWeakness"
                :key="studentEval"
                :strength="studentEval"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Student WayForward
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="studentEval in studentWayForward"
                :key="studentEval"
                :strength="studentEval"
              />
            </div>
          </div>
          <!-- Student Ends Here -->
          <!-- Teacher Starts Here -->
          <div class="container mx-auto pb-6">
            <div
              class="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p
                class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100"
              >
                Teacher
              </p>
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Teacher Strengths
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="teacherEval in teacherStrengths"
                :key="teacherEval"
                :strength="teacherEval"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Teacher Weakness
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="teacherEval in teacherWeakness"
                :key="teacherEval"
                :strength="teacherEval"
              />
            </div>
            <div class="xl:w-full py-5 px-8">
              <div class="flex items-center mx-auto">
                <div class="container mx-auto">
                  <div class="mx-auto xl:w-full">
                    <p
                      class="text-lg text-gray-800 dark:text-gray-100 font-bold"
                    >
                      Teacher WayForward
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 pt-1">
                      Please select choices based on the categories involving
                      Lesson.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-8">
              <FormEvalItem
                v-for="teacherEval in teacherWayForward"
                :key="teacherEval"
                :strength="teacherEval"
              />
            </div>
          </div>
          <!-- Teacher Ends Here -->
        </div>
        <div class="container mx-auto w-11/12 xl:w-full">
          <div
            class="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end"
          >
            <button
              class="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4"
            >
              Cancel
            </button>
            <button
              class="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
              type="submit"
            >
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
.checkbox:checked + .toggle-label {
  /* Apply class bg-indigo-700 */
  background-color: #4c51bf;
}
</style>
