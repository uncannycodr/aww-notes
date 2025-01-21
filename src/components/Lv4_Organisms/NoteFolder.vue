<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label>
          <div class="row items-center justify-between">
            <AwText tag="h2" color="grey" size="sm" weight="bold">
              Folders
            </AwText>
            <q-icon
              name="folder_open"
              class="t-mr-2"
              size="20px"
              color="grey"
            />
          </div>
        </q-item-label>
      </q-item-section>
    </q-item>

    <AwItemSm
      v-for="(folder, index) in folders"
      :key="index"
      icon="folder"
      :label="folder.name"
      :active="folder.slug === $route.params.folderSlug"
      :activeIcon="'folder_open'"
      :activeBackgroundColor="bgColor"
      @click="setActive(index)"
      :to="`/folders/${folder.slug}`"
    />
  </q-list>
</template>

<script setup lang="ts">
interface Props {
  folders: Tag[];
}
// props
defineProps<Props>();

// set active index
const activeIndex = ref(-1);
const setActive = (index: number) => {
  activeIndex.value = index;
};

// set bg color
const bgColor = computed(() => 'var(--q-accent)');
</script>
