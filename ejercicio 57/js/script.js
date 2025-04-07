const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdown');

function toggleDropdown() {
    dropdown.classList.toggle('dropdown');
}

dropdownBtn.addEventListener('click', toggleDropdown)

document.addEventListener('click', function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove('dropdown');
    }
   });