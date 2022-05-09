import dayjs from "dayjs";
import "./styles.css";
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

document.getElementById("app").innerHTML = `
<div class="month">
  <section class="month-header">
    <div 
      id="previous-month-selector"
      class="previous-month"
    >
      <  
    </div>
    
    <div
      class = "fork_image"
    >
      <img src="../month_images/fork_1.png" alt="Fork" style="width:40px;height:110px;"></img>
    </div>

    <div
      id="selected-month"
      class="selected-month-header"
    ></div>

    <div
    class = "spoon_image"
    >
      <img src="../month_images/spoon.png" alt="Spoon" style="width:40px;height:110px;"></img>
    </div>

    <div 
      id="next-month-selector"
      class="next-month"
    >
      >
    </div>
  </section>

  <ol
    id="days-of-week"
    class="day-of-week"
  >
  </ol>

  <ol
    <div 
      id="calendar-days" 
      class="days-grid" 
    >
    </div>
  </ol>
</div>

<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Set Meal Plan for the Day</h2>
    </div>

    <div class="modal-body">
      <form name='popup_food' onsubmit="return false">
        <br> <b>Input Meal: </b><br><input type="text" id="food" placeholder="Fish Tacos" value=""> <br>
        <a href="../meal_options/index.html">Don't know what to eat? Click here!</a> <br>
        <a href="../map/index.html"> Have an address? Put it in our map!</a>

        <br><br> <b>Set Meal Time: </b><br> 
        Hour: 
        <select name="hours" id="hours">
          <option value="Hour: 0">0</option>
          <option value="Hour: 1">1</option>
          <option value="Hour: 2">2</option>
          <option value="Hour: 3">3</option>
          <option value="Hour: 4">4</option>
          <option value="Hour: 5">5</option>
          <option value="Hour: 6">6</option>
          <option value="Hour: 7">7</option>
          <option value="Hour: 8">8</option>
          <option value="Hour: 9">9</option>
          <option value="Hour: 10">10</option>
          <option value="Hour: 11">11</option>
          <option value="Hour: 12">12</option>
        </select><br>

        Minutes:
        <select name="minutes" id="minutes">
          <option value="Minutes: 00">00</option>
          <option value="Minutes: 05">05</option>
          <option value="Minutes: 10">10</option>
          <option value="Minutes: 15">15</option>
          <option value="Minutes: 20">20</option>
          <option value="Minutes: 25">25</option>
          <option value="Minutes: 30">30</option>
          <option value="Minutes: 35">35</option>
          <option value="Minutes: 40">40</option>
          <option value="Minutes: 45">45</option>
          <option value="Minutes: 50">50</option>
          <option value="Minutes: 55">55</option>
        </select><br>

        AM/PM:
        <select name="tod" id="tod">
          <option value="Time of Day: AM">AM</option>
          <option value="Time of Day: PM">PM</option>
        </select><br><br>

        <b>Be notified (🔔): </b>
        <select name="notification_time" id="notification_time">
          <option value="Notification Time: None"> 0 minutes</option>
          <option value="Notification Time: 5 minutes before"> 5 minutes</option>
          <option value="Notification Time: 10 minutes before"> 10 minutes</option>
          <option value="Notification Time: 15 minutes before"> 15 minutes</option>
          <option value="Notification Time: 20 minutes before"> 20 minutes</option>
          <option value="Notification Time: 25 minutes before"> 25 minutes</option>
          <option value="Notification Time: 30 minutes before"> 30 minutes</option>
          <option value="Notification Time: 35 minutes before"> 35 minutes</option>
          <option value="Notification Time: 40 minutes before"> 40 minutes</option>
          <option value="Notification Time: 45 minutes before"> 45 minutes</option>
          <option value="Notification Time: 50 minutes before"> 50 minutes</option>
          <option value="Notification Time: 55 minutes before"> 55 minutes</option>
          <option value="Notification Time: 1 hour before"> 1 hour</option>
        </select> <br> <br>

        <button type="reset" value="Reset" class="button1">Reset</button>
        <input type="submit" id="submit" class="button2" onclick='check();'>

      </form>

    </div>
  </div>

</div> <br><br>

<div class="meal-display"> <b>Meal Plan for the Day:</b></div>
<div class="meal-display-content">
  <p id='f1'></p>
  <div id='f2'></div>
  <div id='f3'></div>
  <div id='f4'></div>
  <p id='f5'></p>
</div>

<div
  class = "logo_image"
>
<img src="../month_images/HH-logo.svg" alt="Logo" style="width:100px;height:100px;"></img>
</div>
`;

openModal();
function openModal(){
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  document
    .getElementById("calendar-days")
    .addEventListener("click", function () {
        modal.style.display = "block";
    });

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

check();
function check(){
  document.getElementById('f1').innerHTML =  $(document).ready(function(){
    $('#submit').click(function(){
      var databack = $('#myModal #food').val();
      $('#f1').html(databack);
    }); 
  });

  document.getElementById('f2').innerHTML =  $(document).ready(function(){
    $('#submit').click(function(){
      var databack = $('#myModal #hours').val();
      $('#f2').html(databack);
    }); 
  });

  document.getElementById('f3').innerHTML =  $(document).ready(function(){
    $('#submit').click(function(){
      var databack = $('#myModal #minutes').val();
      $('#f3').html(databack);
    }); 
  });
  
  document.getElementById('f4').innerHTML =  $(document).ready(function(){
    $('#submit').click(function(){
      var databack = $('#myModal #tod').val();
      $('#f4').html(databack);
    }); 
  });

  document.getElementById('f5').innerHTML =  $(document).ready(function(){
    $('#submit').click(function(){
      var databack = $('#myModal #notification_time').val();
      $('#f5').html(databack);
    }); 
  });
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const TODAY = dayjs().format("YYYY-MM-DD");

const INITIAL_YEAR = dayjs().format("YYYY");
const INITIAL_MONTH = dayjs().format("M");

let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
let currentMonthDays;
let previousMonthDays;
let nextMonthDays;

const daysOfWeekElement = document.getElementById("days-of-week");

WEEKDAYS.forEach((weekday) => {
  const weekDayElement = document.createElement("li");
  daysOfWeekElement.appendChild(weekDayElement);
  weekDayElement.innerText = weekday;
});

createCalendar();
initMonthSelectors();

function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH) {
  const calendarDaysElement = document.getElementById("calendar-days");

  document.getElementById("selected-month").innerText = dayjs(
    new Date(year, month - 1)
  ).format("MMMM YYYY");

  removeAllDayElements(calendarDaysElement);

  currentMonthDays = createDaysForCurrentMonth(
    year,
    month,
    dayjs(`${year}-${month}-01`).daysInMonth()
  );

  previousMonthDays = createDaysForPreviousMonth(year, month);

  nextMonthDays = createDaysForNextMonth(year, month);

  const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

  days.forEach((day) => {
    appendDay(day, calendarDaysElement);
  });
}

function appendDay(day, calendarDaysElement) {
  const dayElement = document.createElement("li");
  const dayElementClassList = dayElement.classList;
  dayElementClassList.add("calendar-day");
  const dayOfMonthElement = document.createElement("span");
  dayOfMonthElement.innerText = day.dayOfMonth;
  dayElement.appendChild(dayOfMonthElement);
  calendarDaysElement.appendChild(dayElement);

  if (!day.isCurrentMonth) {
    dayElementClassList.add("calendar-day--not-current");
  }

  if (day.date === TODAY) {
    dayElementClassList.add("calendar-day--today");
  }
}

function removeAllDayElements(calendarDaysElement) {
  let first = calendarDaysElement.firstElementChild;

  while (first) {
    first.remove();
    first = calendarDaysElement.firstElementChild;
  }
}

function getNumberOfDaysInMonth(year, month) {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}

function createDaysForCurrentMonth(year, month) {
  return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
    return {
      date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: true
    };
  });
}

function createDaysForPreviousMonth(year, month) {
  const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[1].date); //initially 0

  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

  // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6;

  const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
    .date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
      ).format("YYYY-MM-DD"),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false
    };
  });
}

function createDaysForNextMonth(year, month) {
  const lastDayOfTheMonthWeekday = getWeekday(
    `${year}-${month}-${currentMonthDays.length+1}` //added+1
  );

  const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");

  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;

  return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: false
    };
  });
}

function getWeekday(date) {
  return dayjs(date).weekday();
}

function initMonthSelectors() {
  document
    .getElementById("previous-month-selector")
    .addEventListener("click", function () {
      selectedMonth = dayjs(selectedMonth).subtract(1, "month");
      createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
    });

  // document
  //   .getElementById("present-month-selector")
  //   .addEventListener("click", function () {
  //     selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
  //     createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
  //   });

  document
    .getElementById("next-month-selector")
    .addEventListener("click", function () {
      selectedMonth = dayjs(selectedMonth).add(1, "month");
      createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
    });
}