const subscription_form = document.querySelector('.subscription-form');

// Add on focus listener to the select dropdown
// to be able to animate the dropdown arrow on select.
const dropdown = document.querySelector('select');
const arrow = document.querySelector('.select-arrow');
dropdown.addEventListener('focus', () => {
    arrow.classList.toggle('flip');
})
dropdown.addEventListener('blur', () => {
    arrow.classList.toggle('flip');
})

// Add an event listener to the dropdown arrow
// so that when user clicks on that instead of the select
// text, then the select dropdown opens up anyway.
arrow.addEventListener('click', openDropdown)

function openDropdown() {
    // Define a mouseclick event
    let click_event = document.createEvent('MouseEvents')
    click_event.initMouseEvent('click', true, true, window)

    // Fire this event on to the dropdown menu
    dropdown.dispatchEvent(click_event)
}