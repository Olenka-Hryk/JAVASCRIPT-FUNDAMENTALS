const NUMBER_OF_CHECKBOXES = 6;
const MAX_ACTIVE_CHECKBOXES = 3;

renderCheckboxes(NUMBER_OF_CHECKBOXES);

function renderCheckboxes(count) {
    for (let index = 0; index < count; index++) {
        const checkboxElement = [
            {
                element: "input",
                id: `checkbox${index + 1}-module9-task4`,
                classList: "form__input-checkbox",
                type: "checkbox",
            },
            {
                element: "label",
                for: `checkbox${index + 1}-module9-task4`,
                classList: "form__label-checkbox",
                text: `checkbox${index + 1}`,
            },
        ];
        showFormElements(checkboxElement, $("#checkboxContainer").get(0));
    }
}

const $listCheckboxes = $('input[type="checkbox"]');

$listCheckboxes.on('change', function () {
    const $listCheckedBoxes = $("input[type='checkbox']:checked");

    if ($listCheckedBoxes.length === MAX_ACTIVE_CHECKBOXES) {
        // do non active all checkboxes
        $listCheckedBoxes.each(function (index, element) {
            $(element).prop('checked', false);
        });

        // do disabled non-active checkboxes
        // $listCheckboxes.each(function (index, element) {
        //     if (!$(element).is(':checked'))
        //         $(element).prop("disabled", true);
        // });
    }
});