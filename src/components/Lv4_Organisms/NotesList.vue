<template>
  <div class="note-list-container">
    <q-item-label header class="label">
      <AwText tag="h1" size="xl" color="white" weight="bold">
        {{ folderName }}
      </AwText>
    </q-item-label>
    <q-list class="note-list">
      <AwItemLg
        v-for="(note, index) in filteredNotes"
        :key="index"
        :label="note.title"
        :labelCaption="note.content"
        :date="note.updatedAt!"
        :to="
          $route.path.includes(folderSlug)
            ? `/folders/${folderSlug}/notes/${note.id}?mode=view`
            : `/notes/${note.id}?mode=view`
        "
        :active="$route.params.noteId === note.id"
      />
    </q-list>
  </div>
</template>

<script setup lang="ts">
// get router
const $route = useRoute();
const folderSlug = computed(() => $route.params.folderSlug as string);

// props
interface Props {
  notes: Note[];
}
defineProps<Props>();

// filter notes
const filteredNotes = computed(() => {
  if (folderSlug.value) {
    return notes.filter((note) => note.tag === folderSlug.value);
  }
  return notes;
});

const folderName = computed(() => {
  const tag = tags.find((tag) => tag.slug === folderSlug.value);
  return tag ? tag.name : 'All';
});
</script>

<style scoped lang="scss">
.note-list-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 74px);
  padding: 20px;

  .note-list {
    flex: 1;
    overflow-y: auto;
    scroll-behavior: smooth;

    .label {
      padding: 16px 0px 20px 0px;
    }
  }
  ::-webkit-scrollbar {
    width: 0.15px;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
}
</style>
