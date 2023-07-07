const totalCountCities = document.getElementById("totalCountCities");
const listDeletedCities = document.getElementById("textarea-module7-task4");
const btnDeleteCity = document.getElementById("btnChooseDeleteCity");

renderSelectElement();
const selectElement = document.getElementById("listCitiesUS");
renderOptionsForSelect(selectElement);

totalCountCities.textContent = `Total number of cities: ${selectElement.length}`;
listDeletedCities.style.visibility = 'hidden';

btnDeleteCity.onclick = () => {
    listDeletedCities.style.visibility = 'visible';
    listDeletedCities.innerHTML += `\n ${selectElement.options[selectElement.selectedIndex].value}`;
    selectElement.remove(selectElement.selectedIndex);
    totalCountCities.textContent = `Total number of cities: ${selectElement.length}`;
}

function renderSelectElement() {
    const tagSelect = [
        {
            element: "select",
            id: "listCitiesUS",
            classList: "select-module7-task4",
        },
    ];
    showFormElements(tagSelect, document.getElementById("list-us-cities-module7-task4"));
}

function renderOptionsForSelect(containerSelect) {
    const listCities = [];
    for (const city of us_cities) {
        listCities.push({
            element: "option",
            classList: "",
            value: city,
            text: city,
        });
    }
    showFormElements(listCities, containerSelect);
}