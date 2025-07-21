<script setup lang="ts"></script>

<template>
  <div class="rounded-[30px] p-4 w-[400px] overflow-hidden bg-white shadow-2xl">
    <div class="rounded-[23px] relative mask-dark z-0 shadow-xl">
      <img
        src="/imgs/image.png"
        alt="ocean girl"
        class="block w-full object-fill"
      />
      <div
        class="absolute z-1 bottom-1rem left-1rem right-1rem text-neutral-200 flex"
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
        <div>BEACH</div>
        <div class="text-xs text-gray-500">sun of beach & light to dark</div>
        <div class="h-1px bg-gray mt-1"></div>
        <div class="grid grid-cols-3 gap-2 text-sm">
          <div>
            <div>165KM</div>
            <div class="text-xs text-gray-500">far away</div>
          </div>
          <div>
            <div>165KM</div>
            <div class="text-xs text-gray-500">far away</div>
          </div>
          <div>
            <div>165KM</div>
            <div class="text-xs text-gray-500">far away</div>
          </div>
        </div>
      </div>
      <div class="flex-1 self-stretch all-center rounded-xl bg-gray-200">
        HAHAH
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
