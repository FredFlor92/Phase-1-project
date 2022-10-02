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

// RENDERS

const renderHomePage = () => {
    mainDiv().innerHTML = '';
    return renderLogNewEntryForm();
}

//Render meals page

const renderFoodsStepLogPage = async () => {
    await loadFoodsStepsFromDb();
    mainDiv().innerHTML = '';
    const h1 = document.createElement('h1');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thDate = document.createElement('th');
    const thBreakfast = document.createElement('th');
    const thLunch = document.createElement('th');
    const thDinner = document.createElement('th');
    const thSteps = document.createElement('th');
    const tbody = document.createElement('tbody');

    h1.innerText = 'Food & Steps logged';
    thDate.innerText = 'Date';
    thBreakfast.innerText = 'Breakfast';
    thLunch.innerText = 'Lunch';
    thDinner.innerText = 'Dinner';
    thSteps.innerText = 'Steps';

    table.classList.add('highlight');

    tr.appendChild(thDate);
    tr.appendChild(thBreakfast);
    tr.appendChild(thLunch);
    tr.appendChild(thDinner);
    tr.appendChild(thSteps);
    thead.appendChild(tr);
    table.appendChild(thead);
    foodStepsItems.forEach(item => tbody.appendChild(foodStepsItemsTemplate(item)))
    table.appendChild(tbody);
    mainDiv().appendChild(h1);
    mainDiv().appendChild(table);
}
