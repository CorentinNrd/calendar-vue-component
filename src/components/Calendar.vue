<!-- src/Calendar.vue -->
<template>
  <div
    class="calendar"
    :style="{
      gridTemplateColumns: `repeat(${props.columns ?? 1}, 
      ${props.spacesColumns ?? 1}fr)`,
      gridTemplateRows: `repeat(${props.rows ?? 1}, ${
        props.spacesRows ?? 1
      }fr)`,
    }"
  >
    <CalendarMonth
      v-for="(date, i) in monthList"
      :key="i"
      :date="date"
      :data="data"
      :width="width"
      :day-bg-color="dayBgColor"
      :rounded="rounded"
      :border-radius="borderRadius"
      :display-days="displayDays"
      @dayclick="emit('dayclick', $event)"
      @mouseenter="emit('mouseenter', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CalendarMonth from "./CalendarMonth.vue";

const emit = defineEmits<{
  (e: "dayclick", event: any): void;
  (e: "mouseenter", event: MouseEvent): void;
}>();

const props = defineProps<{
  startDate?: Date;
  data?: any;
  rows?: number;
  columns?: number;
  spacesColumns?: number;
  spacesRows?: number;
  dayBgColor?: string;
  width?: string;
  rounded?: boolean;
  borderRadius?: string;
  displayDays?: boolean
}>();

const baseDate = computed(() => props.startDate ?? new Date());
const rows = computed(() => props.rows ?? 1);
const columns = computed(() => props.columns ?? 1);
const count = computed(() => rows.value * columns.value);

const monthList = computed(() => {
  const months: Date[] = [];
  for (let i = 0; i < count.value; i++) {
    const copy = new Date(baseDate.value);
    const targetMonth = copy.getMonth() + i;
    const targetYear = copy.getFullYear() + Math.floor(targetMonth / 12);
    const normalizedMonth = targetMonth % 12;
    
    copy.setFullYear(targetYear, normalizedMonth, 1);
    months.push(copy);
  }
  return months;
});
</script>
