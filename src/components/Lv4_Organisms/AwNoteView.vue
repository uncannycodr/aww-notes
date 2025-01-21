<template>
  <div class="flex column justify-between t-p-12 t-gap-y-8">
    <div class="flex row justify-between">
      <AwText tag="h1" color="white" size="2rem" weight="bold" leading="sm">
        {{ note?.title }}
      </AwText>
      <NoteAction />
    </div>
    <AwNoteInfo />
    <AwText tag="p" color="white" size="base" leading="lg">
      {{ note?.content }}
    </AwText>
  </div>
</template>
<script setup lang="ts">
// props
interface Props {
  notes: Note[];
}
const props = defineProps<Props>();

// get param
const $route = useRoute();

// fetch data
const note = computed(() => {
  return props.notes.find((note) => note.id === $route.params.noteId);
});
</script>

<style scoped lang="scss"></style>
