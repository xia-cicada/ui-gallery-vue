<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number
  }>(),
  { width: 400 }
)
</script>

<template>
  <div
    :style="{ width: `${width}px` }"
    class="rounded-[30px] p-4 overflow-hidden bg-white shadow-3xl font-[Comfortaa]"
  >
    <div class="rounded-[23px] relative mask-dark z-0 shadow-xl">
      <img
        src="/imgs/image.png"
        alt="ocean girl"
        class="block w-full object-fill"
      />
      <div
        class="absolute z-1 bottom-1rem left-1rem right-1rem text-neutral-200 flex font-[Playfair]"
      >
        <div>
          <div>OCEAN LIGHT</div>
          <div class="text-neutral text-sm">Something beautiful</div>
        </div>
        <div
          class="self-stretch bg-[#505050aa] all-center flex-1 py-3 rounded-xl ml-3rem"
        >
          JUST GO
        </div>
      </div>
    </div>
    <div class="mt-6 mb-2 flex gap-6">
      <div>
        <div class="font-bold text-#d44f44">BEACH</div>
        <div class="text-xs text-gray-500">sun of beach & light to dark</div>
        <div class="h-1px border-b-(dashed 1 gray) mt-1"></div>
        <div class="grid flex gap-3 text-sm mt-2">
          <div>
            <div>165km</div>
            <div class="text-xs text-gray-500">far</div>
          </div>
          <div>
            <div>16h</div>
            <div class="text-xs text-gray-500">sleep</div>
          </div>
          <div>
            <div>¥982</div>
            <div class="text-xs text-gray-500">poor</div>
          </div>
        </div>
      </div>
      <div
        style="container-type: inline-size"
        class="flex-1 font-light self-stretch all-center rounded-[20px] bg-gray-200 border-b-(5 solid #d44f44) pt-2"
      >
        <span class="text-[25cqw] font-light">SEA</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask-dark {
  --at-apply: overflow-hidden;
  &::after {
    content: '';
    --at-apply: absolute inset-0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
  }
}
</style>
