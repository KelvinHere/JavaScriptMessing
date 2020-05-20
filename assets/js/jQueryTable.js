//Create a table with jQuery & remove previous table if any
function jQueryCreateTable(rowsIn, colsIn, tableID, wrapperID){
    $(tableID).empty();
    rows = $(rowsIn).val();
    cols = $(colsIn).val();
    
    for (let r = rows-1; r > -1; r--) {
        $(tableID).append("<tr>");
        for (let c = 0; c < cols; c++) {
            $(tableID).children('tr').last().append(`<td class="table-cell row-${r} col-${c}">${r}:${c}</td>`);
        }
        $(tableID).append("</tr>");
    }
}
