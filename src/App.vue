<template>
  <div class="font-Poppins text-primary-gray">
    <router-view />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #94a3b8;
  border-radius: 6px;
}
::-webkit-scrollbar-track:hover {
  background-color: #ffffff;
}
* {
  box-sizing: border-box;
}
.container-wider {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1250px;
}
.container-tighter {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1100px;
}
.dim {
  opacity: 80%;
}
.docs-container {
  margin: 0 auto;
  max-width: 1320px;
}
</style>
