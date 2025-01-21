<template>
  <q-page class="row justify-between">
    <aside class="t-w-[35.15%]" :class="{ 'border-debug': debug }">
      <slot name="sidebar" />
    </aside>

    <section class="t-w-[64.85%] bg-dark" :class="{ 'border-debug': debug }">
      <slot name="list" />
    </section>

    <slot name="editOrView" />
  </q-page>
</template>

<script setup lang="ts">
defineProps<{
  debug?: boolean;
}>();
</script>
