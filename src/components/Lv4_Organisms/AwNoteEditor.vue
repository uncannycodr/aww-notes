<template>
  <div class="flex column justify-between t-p-12 t-gap-y-4">
    <div class="row justify-between items-center">
      <q-input v-model="form.title" style="width: 60%" />

      <div>
        <q-btn color="primary" icon="add" label="Save Note" no-caps />
      </div>
    </div>
    <AwNoteInfo />

    <q-editor
      v-model="form.content"
      min-height="10rem"
      max-height="30rem"
      toolbar-bg="dark-page"
      :style="{ backgroundColor: 'var(--dark-page)' }"
      class="t-border-0"
      :definitions="{}"
      :toolbar="[
        [
          {
            label: $q.lang.editor.paragraph,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          },

          {
            label: $q.lang.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7',
            ],
          },
          'bold',
          'italic',
          'underline',
          'link',
        ],
      ]"
    />
  </div>
</template>

<script setup lang="ts">
const $route = useRoute();

const note = computed(() => {
  return notes.find((note) => note.id === $route.params.noteId);
});

// form
const form = reactive({
  title: note.value?.title || '',
  content: note.value?.content || '',
  // folderId: note.value?.folderId || '',
});
</script>
<style lang="scss">
.q-editor__toolbar {
  background-color: var(--dark-page);
  padding-bottom: 10px;
}
.q-editor__content {
  padding-top: 30px;
}
.q-editor__toolbar-group {
  margin: 0 0px;
}
.q-editor__toolbar-group .q-btn {
  color: white;
}

.q-editor__toolbar-group .q-btn .q-btn__content {
  font-size: 14px;
}
</style>
