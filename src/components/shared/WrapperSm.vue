<template>
  SM
  <q-page class="row justify-between">
    <section class="row justify-between t-w-[45%] note-list">
      <div
        class="responsive-section t-w-[53.85%] bg-dark list"
        :class="{ 'border-debug': debug }"
        @click="toggleDrawer"
      >
        <slot name="list" />
      </div>
      <q-drawer
        v-model="drawer"
        side="right"
        :width="800"
        behavior="mobile"
        overlay
        bordered
        no-swipe-backdrop
      >
        <q-scroll-area class="fit">
          <slot name="editor" />
        </q-scroll-area>
      </q-drawer>
    </section>
    <section class="t-w-[54.86%] note-view" :class="{ 'border-debug': debug }">
      <slot name="editor" />
    </section>
  </q-page>
</template>

<script setup lang="ts">
defineProps<{
  debug?: boolean;
}>();

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped lang="scss">
@media (min-width: 1280px) {
  .responsive-section {
    display: none;
  }
}

@media (max-width: 1280px) {
  .q-drawer {
    display: block;
  }
  .note-view {
    display: none;
  }
  .note-list {
    width: 100%;
  }
  .side {
    width: 35.15%;
    flex-shrink: 0;
  }
  .list {
    width: 100%;
  }
}
</style>
