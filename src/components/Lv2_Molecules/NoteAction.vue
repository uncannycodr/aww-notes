<template>
  <q-btn round icon="more_horiz" outline unelevated dense>
    <q-menu
      auto-close
      anchor="bottom left"
      self="top right"
      :offset="[-30, 20]"
      class="no-shadow"
    >
      <q-list class="bg-grey-9 text-white no-shadow flat">
        <template v-for="(item, index) in items" :key="item.label">
          <q-item clickable @click="handleItemClick(item.label)">
            <q-item-section avatar style="min-width: 16px">
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <AwText tag="p" size="sm" color="white">
                  {{ item.label }}
                </AwText>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator
            inset
            v-if="item.label === 'Archived' && index < items.length - 1"
          />
        </template>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { MD, SM } from 'src/constants/screen-size';

defineProps<{
  editMode?: boolean;
}>();

const items = ref([
  {
    icon: 'edit',
    label: 'Edit',
  },
  {
    icon: 'star',
    label: 'Add to favorites',
  },
  {
    icon: 'archive',
    label: 'Archived',
  },
  {
    icon: 'delete',
    label: 'Delete',
  },
]);

const $router = useRouter();
const $route = useRoute();
const $q = useQuasar();

const handleItemClick = (label: string) => {
  if (label === 'Edit') {
    const noteId = $route.params.noteId;
    const folderSlug = $route.params.folderSlug as string;

    if ($q.screen.width <= MD && $q.screen.width > SM) {
    } else {
      $router.push({
        path: $route.path.includes(folderSlug)
          ? `/folders/${folderSlug}/notes/${noteId}`
          : `/notes/${noteId}`,
        query: { mode: 'edit' },
      });
    }
  }
};
</script>

<style scoped></style>
