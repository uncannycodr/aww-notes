<template>
  <div class="flex flex-row justify-between items-center">
    <AwLogo to="/" />
    <q-icon name="search" size="2em" @click="toggleSearch" color="grey" />
  </div>
</template>

<script setup lang="ts">
// import { defineEmits } from 'vue';
const emit = defineEmits(['toggleSearch']);

function toggleSearch() {
  emit('toggleSearch');
}
</script>
