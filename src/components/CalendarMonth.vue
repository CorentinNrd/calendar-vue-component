<!-- src/CalendarMonth.vue -->
<template>
  <div class="calendar-month">
    <div class="header">{{ monthLabel }}</div>
    <div v-if="displayDays" class="day-names">
      <div class="day-name" v-for="day in dayNames" :key="day">{{ day }}</div>
    </div>
    <div class="grid">
      <CalendarDay
        v-for="day in days"
        :key="day.date.toLocaleDateString()"
        :date="day.date"
        :data="day.data"
        :width="width"
        :isCurrentMonth="day.isCurrentMonth"
        :day-bg-color="dayBgColor"
        :rounded="rounded"
        :border-radius="borderRadius"
        @dayclick="emit('dayclick', $event)"
        @mouseenter="emit('mouseenter', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CalendarDay from "./CalendarDay.vue";
import { getDaysForMonthView } from "../utils/dateHelpers";

const emit = defineEmits<{
  (e: "dayclick", event: any): void;
  (e: "mouseenter", event: MouseEvent): void;
}>();

const props = defineProps<{
  date: Date;
  data?: any;
  dayBgColor?: string;
  width?: string;
  rounded?: boolean;
  borderRadius?: string;
  displayDays?: boolean;
}>();

const dayNames = ["L", "M", "M", "J", "V", "S", "D"];

const days = computed(() => {
  return getDaysForMonthView(props.date).map((date) => {
    const dataItems =
      props.data?.filter((d: { start: string; end: string }) => {
        const start = new Date(d.start);
        const end = new Date(d.end);
        // On compare les timestamps à minuit pour inclure toutes les dates entre start et end (incluses)
        return (
          date.setHours(0, 0, 0, 0) >= start.setHours(0, 0, 0, 0) &&
          date.setHours(0, 0, 0, 0) <= end.setHours(0, 0, 0, 0)
        );
      }) || [];

    return {
      date,
      data: dataItems.length === 1 ? dataItems[0] : dataItems,
      isCurrentMonth: date.getMonth() === props.date.getMonth(),
    };
  });
});

const monthLabel = computed(() =>
  props.date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
);
</script>
