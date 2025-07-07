# calendar-vue-component

This package is usefull to display one calendar like a table of data

## To install

```
npm install calendar-vue-component@latest
```

## In your App.vue

```
import '/node_modules/calendar-vue-component/src/style.css';
```

## On your file

```
import { Calendar } from 'calendar-vue-component';
```

## To use

![Usage of component](./src/assets/Capture%20d’écran%202025-07-07%20à%2019.59.43.png)

### Props

- displayDays
  - Boolean
  - Display or not the header with days
- rounded
  - Boolean
  - Rounded the day or not
- borderRadius
  - String
  - Add border radius to day
  - "50%" | "10px"
- width
  - String
  - Set width to days (the heigth is set with the same value of width)
  - "50%" | "10px"
- dayBgColor
  - String
  - Set background color to the days
  - "red" | "#fff"
- data
  - [Object]
  - Send your data to the calendar
  - ``` {
        start: "2025-07-01",
        end: "2025-07-04",
        events: ["Déjeuner avec Paul"],
        highlight: {
            color: "#3182ce7d",
            activeColor: "#3181ce",
        },
    }
    ```
  - The start | end | events | highlight they're required
    - color: is the color of all days
    - activeColor: color is the color of the start & end date
    - events: is your data, you can access to data on @dayclick or @mouseenter
    - start: start date of your event 
    - end: end date of your event

### Events

- @dayclick
  - add your method to the @dayclick events
  - the @dayclick $event return you the day when you clicked
- @mouseenter
  - add your method to the @dayclick events
  - the @dayclick $event return you the day when you clicked
