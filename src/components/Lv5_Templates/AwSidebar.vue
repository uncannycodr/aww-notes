<template>
  <div class="t-px-0 t-py-8 t-space-y-6">
    <AwHeader />
    <RecentNotes />
    <NoteFolder :folders="tags" />
    <MoreActions />
  </div>
</template>

<script setup lang="ts">
interface Props {
  tags: Tag[];
}

defineProps<Props>();
</script>
