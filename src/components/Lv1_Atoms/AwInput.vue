<template>
  <q-input
    standout="bg-accent text-grey"
    v-model="text"
    placeholder="Search note"
    dense
    color="white"
    input-class="text-white"
    style="height: 44px"
  >
    <template #prepend>
      <q-icon name="search" color="grey" />
    </template>
  </q-input>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
