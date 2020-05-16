/*Create table by size of input fields*/
function createTable(row,col,inputTable,inputTableWrapper) {
    //Get rows and cols from html form input elements
    let rows = document.getElementById(row).value;
    let cols = document.getElementById(col).value;
    rows = parseInt(rows);
    cols = parseInt(cols);
    let oldTable = document.getElementById(inputTable);
    
    //Check for existing table and delete it
    if (oldTable != null) {
        oldTable.remove();
    }

    //Create table in wrapper
    let table = document.createElement("TABLE");
    let wrapper = document.getElementById(inputTableWrapper);
    wrapper.appendChild(table);
    table.classList.add("table-class");
    table.setAttribute("id", "table-to-size");
    
    //Outer loop to create rows
    for (let r = 0; r < rows; r++) {
        var row = table.insertRow(0);
        //inner loop to create cols
        for (let c = 0; c < cols; c++) {
            var cell = row.insertCell(c);
            cell.innerHTML = `R${r}:C${c}`;      //cell text
            cell.classList.add(`row-${r}`);      //cell row
            cell.classList.add(`col-${c}`);      //cell col
            cell.classList.add(`table-cell`);    //group
        }
    }
}