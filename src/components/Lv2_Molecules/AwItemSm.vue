<template>
  <q-item
    clickable
    v-ripple
    :style="{
      backgroundColor: active ? activeBackgroundColor : '',
    }"
    @click="$emit('click')"
    :to="to"
  >
    <q-item-section avatar style="min-width: 16px">
      <q-icon
        :color="active ? 'white' : 'grey'"
        :name="active ? activeIcon : icon"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label>
        <AwText
          tag="p"
          :color="active ? 'white' : 'grey'"
          size="base"
          weight="semibold"
          :class="labelClass"
        >
          {{ label }}
        </AwText>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { QItemProps } from 'quasar';

interface Props {
  label: string;
  icon: string;
  active?: boolean;
  activeIcon?: string;
  activeBackgroundColor?: string;
  to?: QItemProps['to'];
  labelClass?: HTMLElement['className'];
}

defineProps<Props>();
</script>
