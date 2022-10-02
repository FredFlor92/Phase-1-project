let foodStepsItems = [];

//ID Get

const mainDiv = () => document.getElementById"main");
const homePageLink = () => document.getElementById("home-page-lnk");
const loggedFoodStepsLink = () => document.getElementById("logged-food-steps-link");
const newEntryFormLink = () => document.getElementById("new-entry-form-link");
const dateInput = () => document.getElementById('date');
const breakfastInput = () => document.getElementById('breakfast');
const lunchInput = () => document.getElementById('lunch');
const dinnerInput = () => document.getElementById('dinner');
const stepsInput = () => document.getElementById('steps');

//Meals

const foodStepsItemsTemplate = ({date, breakfast, lunch, dinner, steps}) => {

    const tr = document.createElement('tr');
    const tdDate = document.createElement('td');
    const tdBreakfast = document.createElement('td');
    const tdLunch = document.createElement('td');
    const tdDinner = document.createElement('td');
    const tdSteps = document.createElement('td');

    tdDate.innerText = date;
    tdBreakfast.innerText = breakfast;
    tdLunch.innerText = lunch;
    tdDinner.innerText = dinner;
    tdSteps.innerText = steps;

    tr.appendChild(tdDate);
    tr.appendChild(tdBreakfast);
    tr.appendChild(tdLunch);
    tr.appendChild(tdDinner);
    tr.appendChild(tdSteps);

    return tr;
}
