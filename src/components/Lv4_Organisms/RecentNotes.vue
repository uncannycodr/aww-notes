<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label>
          <AwText tag="h2" color="grey" size="sm" weight="bold">Recent</AwText>
        </q-item-label>
      </q-item-section>
    </q-item>
    <AwItemSm
      v-for="(note, index) in notes"
      :key="index"
      :icon="note.icon"
      :label="note.label"
      :active="activeIndex === index"
      :activeIcon="'description'"
      :activeBackgroundColor="bgColor"
      @click="setActive(index)"
      labelClass="t-line-clamp-1"
    />
  </q-list>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const notes = ref([
  { label: 'Reflection on the Month of June', icon: 'description' },
  { label: 'Project Proposal', icon: 'description' },
  { label: 'Travel itinerary', icon: 'description' },
]);

const activeIndex = ref(-1);

const setActive = (index: number) => {
  activeIndex.value = index;
};
const bgColor = computed(() => 'var(--q-primary)');
</script>

<style scoped></style>
