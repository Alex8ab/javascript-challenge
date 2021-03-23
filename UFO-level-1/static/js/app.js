// console.log("oki doki");
// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);
function init(){
    d3.select("tbody").html("");
    createTable(tableData);
}

d3.select("#filter-btn").on("click", filterTable)

// code that appends a table in index.html web page and then adds new rows of data for each UFO sighting.
function createTable(tableData){
    d3.select("tbody").html("")
    d3.select("#smgDate").text("")
    tableData.forEach(ufoSight =>{
        // Append a new table row for each row in tableData
        let row = d3.select("tbody").append("tr")
        // Append a new column in each row in tableData
        Object.keys(ufoSight).forEach(column => row.append("td").text(ufoSight[column]))
    })
}

function filterTable(){
    // Selected date from "Enter a Date" form-control
    let selectedDate = d3.select("#datetime").property("value")
    // If is not empty and data exist for choosen date then fill the table
    if (selectedDate){
        filteredData = tableData.filter(data => data.datetime == selectedDate)
        // console.log(filteredData)
        if (Object.keys(filteredData).length === 0 ){
            d3.select("tbody").html("")
            d3.select("#smgDate").text("There is not data for the selected date.")
        }
        else{
            createTable(filteredData)
        }
    }
}

init();