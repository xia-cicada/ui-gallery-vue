<script setup lang="ts"></script>

<template>
  <div class="step-loading">
    <div class="step"></div>
    <div class="step"></div>
    <div class="ball"></div>
  </div>
</template>

<style lang="scss">
.step-loading {
  --at-apply: w-[100px] h-[100px] relative;
  > .step {
    --at-apply: w-[100%] h-[20%] mt-[10%] bg-dark rounded-xl;
  }
}
</style>
