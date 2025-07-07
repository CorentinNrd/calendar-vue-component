<template>
  <Calendar
    :columns="4"
    :spaces-columns="1"
    :rows="3"
    :spaces-rows="0"
    :start-date="start"
    :data="calendarDataTest"
    display-days
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Calendar from "./components/Calendar.vue";

const start = ref(new Date());

const calendarDataTest = [
  {
    start: "2025-07-01",
    end: "2025-07-04",
    events: ["Déjeuner avec Paul"],
    highlight: {
      color: "#3182ce7d",
      activeColor: "#3181ce",
      textColor: "white",
      text: "Important",
    },
    typeID: 0,
  },
    {
    start: "2025-07-04",
    end: "2025-07-04",
    events: ["Déjeuner avec Paul"],
    highlight: {
      color: "#e3d91871",
      activeColor: "#e3d918",
      textColor: "white",
      text: "Important",
    },
    typeID: 0,
  },
  {
    start: "2025-07-04",
    end: "2025-07-04",
    events: ["Déjeuner avec Paul"],
    highlight: {
      color: "#dd6c206b",
      activeColor: "#dd6b20",
      textColor: "white",
      text: "Important",
    },
    typeID: 0,
  },
  {
    start: "2025-07-04",
    end: "2025-07-14",
    events: ["Réunion d’équipe"],
    highlight: {
      color: "#e53e3e6e",
      activeColor: "#e53e3e",
      textColor: "white",
      text: "Important",
    },
    typeID: 1,
  },
  {
    start: "2025-08-12",
    end: "2025-08-29",
    events: ["Vacances !"],
    highlight: {
      color: "#815ad55f",
      activeColor: "#805ad5",
      textColor: "white",
      text: "Important",
    },
    typeID: 3,
  },
  {
    start: "2025-09-15",
    end: "2026-01-15",
    events: ["KIA MORTE !"],
    highlight: {
      color: "#71809654",
      activeColor: "#718096",
      textColor: "white",
      text: "Important",
    },
    typeID: 2,
  },
];
</script>
