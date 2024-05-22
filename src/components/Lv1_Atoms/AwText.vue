<script setup lang="ts">
import { colors } from 'src/css/quasar.variables';
import { cn } from 'src/lib';

type TextColor = keyof typeof colors;
type TextLeading = 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'sup' | 'sub';
  color?: TextColor;
  leading?: TextLeading; // line height 18, 20, 28, 40
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '2rem'; // 14, 16, 18, 20, 24, 28, 2rem
  bold?: boolean;
  textClass?: HTMLElement['className'] | string;
}

const props = defineProps<Props>();

const sizeVariants: Record<Props['size'], string> = {
  xs: 't-text-xs',
  sm: 't-text-sm',
  base: 't-text-base',
  lg: 't-text-lg',
  xl: 't-text-xl',
  '2xl': 't-text-2xl',
  '2rem': 't-text-[2rem]',
};

const colorVariants: Record<TextColor, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  dark: 'text-dark',
  'dark-page': 'text-dark-page',
  positive: 'text-positive',
  negative: 'text-negative',
  info: 'text-info',
  warning: 'text-warning',
};

const leadVariants: Record<TextLeading, string> = {
  sm: 't-leading-[1.125rem]',
  md: 't-leading-5',
  lg: 't-leading-7',
  xl: 't-leading-10',
};

const classes = cn(
  sizeVariants[props.size],
  colorVariants[props.color as TextColor],
  leadVariants[props.leading as TextLeading],
  't-font-semibold',
);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped></style>
