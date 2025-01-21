<template>
  <div class="flex column justify-between t-py-0 t-px-5 t-gap-y-5">
    <AwNavbar @toggleSearch="toggleSearch" />
    <AwButton v-if="!showInput" />
    <AwInput v-if="showInput" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showInput = ref(false);

function toggleSearch() {
  showInput.value = !showInput.value;
}
</script>

<style scoped></style>
