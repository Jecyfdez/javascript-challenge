// from data.js
var tableData = data;

// YOUR CODE HERE!

//Create a table with a column for each object in data
//`date/time`, `city`, `state`, `country`, `shape`, `duration`, and `comment`
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// d3.select to create a variable for HTML reference 
var tBody = d3.select("tbody");
var dateTime = d3.select("#datetime")
var btnSearch = d3.select("#filter-btn")


// Building the data table 
var loadData = (data) => { 
    
    // Erasing all previous rows 
    tBody.html("");
    
    // adding all "data" to the table 
	data.map(row => { 
        
        // Adding a table row
		let tableRow = tBody.append("tr");  
        
        // Adding values in the table row
		columns.map(field => tableRow.append("td").text(row[field]))
	});
}

// Display the html table with all the rows
loadData(tableData);



//On button change 
// Creating the search button and adding filter
btnSearch.on("click", () => {

    // Create event handler
    d3.event.preventDefault();

    // Give the input value a variable 
    var searchDateTime = dateTime.property("value");

    // Filter the tableData to only return data equal to the input variable 
    var filterDate = tableData.filter(tableData => tableData.datetime === searchDateTime);

    // If the length of filterDate is longer than one row then the loadData function begins
    if(filterDate.length !== 0 ){
        loadData(filterDate)
    }

    // If the lenth of filterDate is equal 0 then they delete the table and display the text 
    else{
        tBody.html("")

        tBody.append("tr").append("td").text(`Sorry! There were no sightings on ${searchDateTime}`)
    }
})

