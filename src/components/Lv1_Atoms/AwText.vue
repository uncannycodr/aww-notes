<script setup lang="ts">
import { colors } from 'src/css/quasar.variables';
import { computed } from 'vue';

type TextColor = keyof typeof colors;
type TextLeading = 'sm' | 'md' | 'lg' | 'xl';
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '2rem'; // 14, 16, 18, 20, 24, 28, 2rem
type FluidSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

interface Props {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'sup' | 'sub';
  color: TextColor;
  leading?: TextLeading; // line height 18, 20, 28, 40
  size?: Size;
  weight?: keyof typeof fontWeightVariants;
  textClass?: HTMLElement['className'] | string;
  fluid?: FluidSize;
}

const props = defineProps<Props>();
const sizeVariants: Record<Size, string> = {
  xs: 't-text-xs',
  sm: 't-text-sm',
  base: 't-text-base',
  lg: 't-text-lg',
  xl: 't-text-xl',
  '2xl': 't-text-2xl',
  '2rem': 't-text-[2rem]',
};
const fluidVariants: Record<FluidSize, string> = {
  xs: 'font-xs',
  sm: 'font-sm',
  base: 'font-base',
  lg: 'font-lg',
  xl: 'font-xl',
  '2xl': 'font-2xl',
  '3xl': 'font-3xl',
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
  white: 'text-white',
  grey: 'text-grey',
};

const leadVariants: Record<TextLeading, string> = {
  sm: 't-leading-[1.125rem]',
  md: 't-leading-5',
  lg: 't-leading-7',
  xl: 't-leading-10',
};

const fontWeightVariants: Record<string, string> = {
  thin: 't-font-thin',
  extralight: 't-font-extralight',
  light: 't-font-light',
  normal: 't-font-normal',
  medium: 't-font-medium',
  semibold: 't-font-semibold',
  bold: 't-font-bold',
  extrabold: 't-font-extrabold',
  black: 't-font-black',
};

const classes = computed(() => [
  sizeVariants[props.size as Size],
  fluidVariants[props.fluid as FluidSize],
  colorVariants[props.color],
  props.leading ? leadVariants[props.leading] : '',
  props.weight ? fontWeightVariants[props.weight] : '',
]);

// console.log(classes);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped></style>
