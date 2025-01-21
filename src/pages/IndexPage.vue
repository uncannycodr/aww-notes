<template>
  <WrapperLg v-if="wrapperType === 'Lg'">
    <template #sidebar>
      <AwSidebar :tags="tagsData" />
    </template>

    <template #list>
      <!-- <NotesList :notes="notesData" /> -->
      <NotesList :notes="notesData" />
    </template>

    <template #editor>
      <template v-if="!!$route.query.mode">
        <AwNoteEditor v-if="$route.query.mode === 'edit'" :notes="notesData" />
        <AwNoteView v-if="$route.query.mode === 'view'" :notes="notesData" />
      </template>
      <div v-else>
        <AwSelectNote />
      </div>
    </template>
  </WrapperLg>

  <WrapperMd v-if="wrapperType === 'Md'">
    <template #sidebar>
      {{ drawer }}
      <AwSidebar :tags="tagsData" />
    </template>

    <template #list>
      <!-- <NotesList :notes="notesData" /> -->
      <NotesList :notes="notesData" />
    </template>

    <template #editOrView>
      <q-drawer
        v-model="drawer"
        side="right"
        :width="800"
        behavior="mobile"
        overlay
        bordered
        no-swipe-backdrop
        @hide="
          () =>
            $router.push(
              $route.fullPath.split('notes')[0].trim().replace(/\s+/g, '/'),
            )
        "
      >
        {{ $route.fullPath }}

        <q-scroll-area class="fit">
          <AwNoteEditor
            v-if="$route.query.mode === 'edit'"
            :notes="notesData"
          />
          <AwNoteView v-if="$route.query.mode === 'view'" :notes="notesData" />
        </q-scroll-area>
      </q-drawer>
    </template>
  </WrapperMd>

  <WrapperSm v-if="wrapperType === 'Sm'">
    <template #sidebar>
      <AwSidebar :tags="tagsData" />
    </template>

    <template #list>
      <!-- <NotesList :notes="notesData" /> -->
      <NotesList :notes="notesData" />
    </template>

    <template #editor>
      <template v-if="!!$route.query.mode">
        <AwNoteEditor v-if="$route.query.mode === 'edit'" :notes="notesData" />
        <AwNoteView v-if="$route.query.mode === 'view'" :notes="notesData" />
      </template>
      <div v-else>
        <AwSelectNote />
      </div>
    </template>
  </WrapperSm>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import WrapperLg from 'src/components/shared/WrapperLg.vue';
import WrapperMd from 'src/components/shared/WrapperMd.vue';
import WrapperSm from 'src/components/shared/WrapperSm.vue';

// types
type WrapperType = 'Sm' | 'Md' | 'Lg';

const tagsData = tags;
const notesData = notes;

const $q = useQuasar();
const $route = useRoute();
const wrapperType = ref<WrapperType>('Lg');

// check the screen size
watchEffect(() => {
  switch (true) {
    case $q.screen.width > 1280:
      wrapperType.value = 'Lg';
      break;
    case $q.screen.width <= 1280 && $q.screen.width > 786:
      wrapperType.value = 'Md';
      break;
    default:
      wrapperType.value = 'Sm';
  }
}, {});

const drawer = ref(false);
const noteId = computed(() => $route.params.noteId);
const noteMode = computed(() => $route.query.mode as string);

watch(
  noteId,
  () => {
    if (noteMode.value?.includes('view') || noteMode.value?.includes('edit')) {
      drawer.value = true;
    }
  },
  { immediate: true },
);

/* watch(
  noteId,
  () => {
    drawer.value = noteMode.value?.includes('edit');
  },
  { immediate: true },
); */

console.log(
  noteMode.value?.includes('view') || noteMode.value?.includes('edit'),
);
onMounted(() => {
  // console.log(noteMode.value?.includes('edit'), typeof noteMode.value);
  console.log('mounted');
});
</script>

<style scoped lang="scss"></style>
