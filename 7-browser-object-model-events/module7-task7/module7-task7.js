const listCountries = document.getElementById("country");
const listCities = document.getElementById("cities");
const selectedOutput = document.getElementById("selectedOutput");

const URL_API_COUNTRIES_AND_CITIES = "https://countriesnow.space/api/v0.1/countries";
const URL_CITIES_OF_SPECIFIED_COUNTRY = "https://countriesnow.space/api/v0.1/countries/cities";
getAllCountries();


listCountries.addEventListener("change", () => {
    selectedOutput.innerHTML = `${listCountries.options[listCountries.selectedIndex].value}`;
    clearOptionsForSelect(document.getElementById("cities"));
    getCitiesOfSpecifiedCountry(listCountries.options[listCountries.selectedIndex].value);
});

listCities.addEventListener("change", handleCityChange);

function handleCityChange() {
    const listCities = document.getElementById("cities");
    selectedOutput.innerHTML = `${listCountries.options[listCountries.selectedIndex].value}, ${listCities.options[listCities.selectedIndex].value}`;
}


function getAllCountries() {
    fetch(URL_API_COUNTRIES_AND_CITIES)
        .then(response => response.json())
        .then(countries => {
            for (const country in countries.data) {
                renderOptionsForSelect(countries.data[country].country, listCountries);
            }
            getCitiesOfSpecifiedCountry(countries.data[0].country);
        })
        .catch(error => console.error('Error:', error));
}

function getCitiesOfSpecifiedCountry(country) {
    fetch(URL_CITIES_OF_SPECIFIED_COUNTRY, {
        method: 'POST',
        body: JSON.stringify({
            country: country,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(cities => {
            for (const city in cities.data) {
                renderOptionsForSelect(cities.data[city], document.getElementById("cities"));
            }
            handleCityChange();
        })
        .catch(error => console.error('Error:', error));
}

function renderOptionsForSelect(data, containerSelect) {
    const option = [
        {
            element: "option",
            classList: "",
            value: data,
            text: data,
        }
    ];
    showFormElements(option, containerSelect);
}

function clearOptionsForSelect(select) {
    const selectObj = select;
    const selectParentNode = selectObj.parentNode;
    const newSelectObj = selectObj.cloneNode(false);            // Make a shallow copy
    selectParentNode.replaceChild(newSelectObj, selectObj);
    newSelectObj.addEventListener("change", handleCityChange);

    return newSelectObj;
}