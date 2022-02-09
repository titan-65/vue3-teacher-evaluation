<template>
  <div class="2xl:container 2xl:mx-auto sticky">
    <div class="bg-white rounded shadow-lg py-5 px-7">
      <nav class="flex justify-between">
        <div class="flex items-center space-x-3 lg:pr-16 pr-6">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M315.459 400H364.349C358.031 356.705 343.509 316.045 322.33 279.662L281.228 304.322C298.05 333.387 309.589 365.738 315.459 400ZM208.859 221.906C229.439 238.043 248.078 256.498 263.623 277.566L304.931 252.781C284.498 224.297 259.513 199.48 231.38 178.602L208.859 221.906ZM424 432.002H63.527L253.295 67.094C259.404 55.328 254.826 40.846 243.076 34.721C231.279 28.596 216.826 33.158 210.701 44.938L2.699 444.938C-1.161 452.375 -0.864 461.281 3.48 468.469C7.839 475.625 15.605 480 23.996 480H424C437.25 480 448 469.25 448 456S437.25 432.002 424 432.002Z"
            />
          </svg> -->
          <h2 class="font-normal text-1xl leading-6 text-gray-800">E-Val&Teach</h2>
        </div>

        <!-- For medium and plus sized devices -->
        <ul class="hidden md:flex flex-auto space-x-2">
          <li
            onclick="selected()"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded"
          >
            Evaluations
          </li>
        </ul>
        <!-- <div class="flex space-x-5 justify-center items-center pl-2">
          <div
            class="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg2.svg"
              alt="chat"
            />
            <div
              class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"
            ></div>
            <div
              class="w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"
            ></div>
          </div>

          <img
            class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg3.svg"
            alt="bell"
          />
        </div> -->
        <!-- <div
          class="hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4"
        >
          
          <button
            class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 duration-150 justify-center items-center"
          >
            <p>Save</p>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-2-svg6.svg"
              alt="save"
            />
          </button>
        </div> -->
      </nav>
      <!-- for smaller devcies -->

      <div class="block md:hidden w-full mt-5">
        <div
          onclick="selectNew()"
          class="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full"
        >
          <div class="flex space-x-2">
            <span id="s1" class="font-semibold text-sm leading-3 hidden">Selected: </span>
            <p
              id="textClicked"
              class="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer"
            >
              Collections
            </p>
          </div>
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-1-svg4.svg"
            alt="down arrow"
          />
        </div>
        <div class="relative">
          <ul
            id="list"
            class="hidden font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md"
          >
            <li
              onclick="selectedSmall()"
              class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
            >
              Evaluations
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
