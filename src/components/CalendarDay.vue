<template>
  <div
    :class="{
      day: isCurrentMonth,
      faded: !isCurrentMonth,
      hoverday: !Array.isArray(data) || (data.length === 0 && isCurrentMonth),
      principale:
        date.toLocaleDateString() ===
          new Date(data?.start)?.toLocaleDateString() ||
        date.toLocaleDateString() === new Date(data?.end)?.toLocaleDateString(),
    }"
    :style="{
      backgroundColor:
        date.toLocaleDateString() ===
          new Date(data?.start)?.toLocaleDateString() ||
        date.toLocaleDateString() === new Date(data?.end)?.toLocaleDateString()
          ? data.highlight?.activeColor
          : data.highlight?.color,
      height: height,
      width: width ? width : 'auto',
      borderRadius: rounded ? '50%' : borderRadius,
    }"
    @click="
      !isCurrentMonth || (Array.isArray(data) && data.length >= 1)
        ? null
        : emit('dayclick', { Date: date, data: data })
    "
    @mouseenter="!isCurrentMonth ? null : emit('mouseenter', $event)"
  >
    <div
      class="date"
      :class="{
        fadedDate: !isCurrentMonth,
      }"
      :style="{
        color: data.length >= 0 ? 'black' : 'white',
        zIndex: 10,
      }"
    >
      {{ date.getDate() }}
    </div>
    <div class="content-day" v-if="Array.isArray(data) || data.length > 1">
      <ul class="ul-day">
        <li
          class="li-day"
          v-for="(e, i) in data"
          :key="i"
          :style="{
            backgroundColor:
              date.toLocaleDateString() ===
                new Date(e?.start)?.toLocaleDateString() ||
              date.toLocaleDateString() ===
                new Date(e?.end)?.toLocaleDateString()
                ? e?.highlight?.activeColor
                : e?.highlight?.color,
            height: height,
          }"
          @click="
            !isCurrentMonth ? null : emit('dayclick', { Date: date, data: e })
          "
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits<{
  (e: "dayclick", event: any): void;
  (e: "mouseenter", event: MouseEvent): void;
}>();

const height = ref<string>("");

defineProps<{
  date: Date;
  data?: any;
  width?: string;
  isCurrentMonth: boolean;
  dayBgColor?: string;
  rounded?: boolean;
  borderRadius?: string;
}>();

onMounted(() => {
  const days = document.querySelector(".day")?.clientWidth;
  height.value = days ? `${days}px` : "50px"; // Default height if not found
});
</script>
