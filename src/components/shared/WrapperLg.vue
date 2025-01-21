<template>
  LG
  <q-page class="row justify-between">
    <section class="row justify-between t-w-[45%]">
      <aside class="t-w-[46.15%]" :class="{ 'border-debug': debug }">
        <slot name="sidebar" />
      </aside>
      <div class="t-w-[53.85%] bg-dark" :class="{ 'border-debug': debug }">
        <slot name="list" />
      </div>
    </section>
    <section class="t-w-[54.86%]" :class="{ 'border-debug': debug }">
      <slot name="editor" />
    </section>
  </q-page>
</template>

<script setup lang="ts">
defineProps<{
  debug?: boolean;
}>();
</script>
