<script setup></script>
<template>
  <div
    class="border-r border-gray-100 sm:relative bg-gray-100 z-20 p-4"
  >
    <div class="flex w-full">
      <div class="w-1/4 flex justify-center flex-col w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-1"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#718096"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          @click="sidebarHandler()"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <ul aria-orientation="vertical" class="rounded py-8 mt-4">
          <li
            class="cursor-pointer text-indigo-700 text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
          >
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-grid"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
              </svg>
            </div>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
          >
            <span class="text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-puzzle"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                ></path>
              </svg>
            </span>
          </li>
        </ul>
      </div>
      <div
        class="hidden w-3/4 flex justify-start flex-col pr-12 transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M315.459 400H364.349C358.031 356.705 343.509 316.045 322.33 279.662L281.228 304.322C298.05 333.387 309.589 365.738 315.459 400ZM208.859 221.906C229.439 238.043 248.078 256.498 263.623 277.566L304.931 252.781C284.498 224.297 259.513 199.48 231.38 178.602L208.859 221.906ZM424 432.002H63.527L253.295 67.094C259.404 55.328 254.826 40.846 243.076 34.721C231.279 28.596 216.826 33.158 210.701 44.938L2.699 444.938C-1.161 452.375 -0.864 461.281 3.48 468.469C7.839 475.625 15.605 480 23.996 480H424C437.25 480 448 469.25 448 456S437.25 432.002 424 432.002Z"
          />
        </svg>
        <ul aria-orientation="vertical" class="rounded py-8">
          <li
            class="cursor-pointer text-indigo-700 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
          >
            <span class="ml-2">Dashboard</span>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
          >
            <span class="ml-2">Products</span>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
          >
            <span class="ml-2">Performance</span>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
          >
            <span class="ml-2">Deliverables</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
