<template>
  <div class="flex column">
    <!-- Date Info -->
    <div class="flex row justify-between items-center t-w-52 t-mb-5">
      <div class="flex row">
        <q-icon name="calendar_month" color="grey" />
        <AwText tag="p" color="grey" size="xs" class="t-ml-2">Date</AwText>
      </div>
      <div>
        <AwText tag="p" color="white" size="xs">21/06/2022</AwText>
      </div>
    </div>

    <q-separator />

    <!-- Folder Info -->
    <div class="flex row justify-between items-center t-w-52 t-my-4">
      <div class="flex row">
        <q-icon name="folder" color="grey" />
        <AwText tag="p" color="grey" size="xs" class="t-ml-2">Folder</AwText>
      </div>
      <div>
        <AwText tag="p" color="white" size="xs">Personal</AwText>
      </div>
    </div>

    <q-separator />
  </div>
</template>

<style scoped lang="scss"></style>
