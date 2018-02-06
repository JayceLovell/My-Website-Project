var before;
function start() {
	var table = document.getElementById("TheTable");
	var userrows = document.getElementById("rows").value;
	var usercolumns = document.getElementById("columns").value;
	

	for (i=0;i<before;i++){
	table.deleteRow(0);
	}

	for (i = 0; i < userrows; i++) {
		var row = table.insertRow(i);
		for (x = 0; x < usercolumns; x++){
			var cell = row.insertCell(x);
			cell.innerHTML = (i+1)+","+(x+1);
			}
    }
	before = userrows;

	table.style.border = '1px solid #FFFFFF';

	if (userrows == 0 || usercolumns == 0)
	    table.style.border = '';
}