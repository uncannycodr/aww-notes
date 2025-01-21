<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label>
          <AwText tag="h2" color="grey" size="sm" weight="bold"
            >More</AwText
          ></q-item-label
        >
      </q-item-section>
    </q-item>
    <AwItemSm
      v-for="(note, index) in notes"
      :key="index"
      :icon="note.icon"
      :label="note.label"
    />
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const notes = ref([
  { label: 'Favorites', icon: 'star' },
  { label: 'Trash', icon: 'delete' },
  { label: 'Archived Notes', icon: 'archive' },
  // Add more items as needed
]);
</script>

<style scoped></style>
