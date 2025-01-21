<template>
  <q-item
    clickable
    v-ripple
    class="t-mb-5 t-p-4"
    :class="['bg-secondary', 'rounded-borders', { 'active-note': active }]"
    :to="to"
  >
    <q-item-section>
      <q-item-label class="q-mb-sm">
        <AwText tag="p" color="white" weight="bold" class="label">
          {{ label }}
        </AwText>
      </q-item-label>

      <q-item-label caption>
        <AwText
          tag="p"
          color="grey"
          size="base"
          weight="normal"
          class="t-block t-truncate"
        >
          <span class="t-mr-2.5 t-text-white t-opacity-40">{{
            $date.formatDate(date, 'YYYY-MM-DD')
          }}</span>
          <span>{{ labelCaption }}</span>
        </AwText>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { date as $date, QItemProps } from 'quasar';

interface Props {
  label: string;
  labelCaption: string;
  date: string;
  to?: QItemProps['to'];
  active?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.active-note {
  background-color: var(--q-accent) !important;
}

.label {
  font-size: clamp(0.75rem, 2vw, 1rem);
  line-height: 120%;
}
</style>
