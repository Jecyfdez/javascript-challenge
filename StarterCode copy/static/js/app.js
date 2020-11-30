// from data.js
var tableData = data;

// YOUR CODE HERE!

//create a table with a column for 
//`date/time`, `city`, `state`, `country`, `shape`, `duration`, and `comment`
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comment"]


// d3.select to create a variable for HTML reference 
var tBody = d3.select("tbody");

// Building the data table 
let loadData = (data) => { 
    
    // Erasing all previous rows 
    tBody.html("");
    
    // adding all "data" to the table 
	data.forEach(row => { 
        
        // Adding a table row
		let tableRow = tBody.append("tr");  
        
        // Adding values in the table row
		columns.forEach(field => tableRow.append("td").text(row[field]))
	});
}

// Display the html table with all the rows
loadData(tableData);



//on button change the following should happen
//search through Date/time data based on input


//if input is in tableData.datetime
    
//show