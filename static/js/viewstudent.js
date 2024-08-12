// scripts.js

// Filter table by name
function filterTable() {
    let searchInput = document.getElementById('search').value.toLowerCase();
    let table = document.getElementById('studentsTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toLowerCase().indexOf(searchInput) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

// Sort table by column
function sortTable(columnIndex) {
    let table = document.getElementById('studentsTable');
    let rows = table.getElementsByTagName('tr');
    let switching = true;
    let shouldSwitch, i;
    let direction = 'asc';
    let switchCount = 0;

    while (switching) {
        switching = false;
        let rowsArray = Array.from(rows).slice(1); // Skip the header row

        for (i = 0; i < rowsArray.length - 1; i++) {
            shouldSwitch = false;
            let x = rowsArray[i].getElementsByTagName('td')[columnIndex];
            let y = rowsArray[i + 1].getElementsByTagName('td')[columnIndex];

            if (direction === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && direction === 'asc') {
                direction = 'desc';
                switching = true;
            }
        }
    }
}
