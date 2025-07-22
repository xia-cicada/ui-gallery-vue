<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number
  }>(),
  { width: 350 }
)
</script>

<template>
  <div
    :style="{ width: `${width}px`, height: `${width * 1.7}px` }"
    class="relative rounded-[30px] overflow-hidden bg-white shadow-3xl"
  >
    <div class="absolute inset-0 mask-dark">
      <img
        src="/imgs/image02.png"
        alt="ocean girl"
        class="block h-full block object-fill"
      />
    </div>
    <div
      class="absolute z-1 bottom-0 left-0 right-0 text-neutral-200 flex flex-col gap-3 items-stretch font-[Comfortaa]"
    >
      <div class="flex items-center font-[Playfair] p-4 pb-0">
        <div>
          <div>OCEAN LIGHT</div>
          <div class="text-neutral-300 text-sm">Something beautiful</div>
        </div>
        <div class="ml-auto text-2rem">☀</div>
      </div>
      <div class="mask-blur p-4 border-t-(1 solid gray-300)">
        <div class="text-center text-#eee text-lg">
          <div class="grid flex gap-3 justify-around mt-2">
            <div>
              <div>165km</div>
              <div class="text-xs text-gray-300">far</div>
            </div>
            <div>
              <div>16h</div>
              <div class="text-xs text-gray-300">sleep</div>
            </div>
            <div>
              <div>¥982</div>
              <div class="text-xs text-gray-300">poor</div>
            </div>
          </div>
        </div>
        <div
          class="bg-[#aaaaaaee] text-#fce537 font-bold all-center flex-1 py-3 mt-6 rounded-27px shadow-2xl"
        >
          JUST GO
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask-blur {
  --at-apply: z-1 relative;
  &::after {
    content: '';
    --at-apply: absolute inset-0 z-[-1];
    background: linear-gradient(to bottom, #9898981a 50%, #9898981a 100%);
    backdrop-filter: blur(6px);
    pointer-events: none;
  }
}
.mask-dark {
  --at-apply: z-1;
  &::after {
    content: '';
    --at-apply: absolute inset-0 z-[0];
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    pointer-events: none;
  }
}
</style>
