// console.log("oki doki");
// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);
function init(){
    d3.select("tbody").html("");
    createTable(tableData);
    fillDropdownDate();
    fillDropdownCity();
    fillDropdownState();
    fillDropdownCountry();
    fillDropdownShape();
}

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

// Fill dropdown menus
function fillDropdownDate(){
    d3.select("#selectedDate").append("option").text('-Select-')
    for(x in tableData){
        d3.select("#selectedDate").append("option").text(tableData[x].datetime);
    }
};

function fillDropdownCity(){
    d3.select("#selectedCity").append("option").text('-Select-')
    for(x in tableData){
        d3.select("#selectedCity").append("option").text(tableData[x].city);
    }
};

function fillDropdownState(){
    d3.select("#selectedState").append("option").text('-Select-')
    for(x in tableData){
        d3.select("#selectedState").append("option").text(tableData[x].state);
    }
};

function fillDropdownCountry(){
    d3.select("#selectedCountry").append("option").text('-Select-')
    for(x in tableData){
        d3.select("#selectedCountry").append("option").text(tableData[x].country);
    }
};

function fillDropdownShape(){
    d3.select("#selectedShape").append("option").text('-Select-')
    for(x in tableData){
        d3.select("#selectedShape").append("option").text(tableData[x].shape);
    }
};

// Filter table button 
d3.select("#filter-btn").on("click", filterTable)

// Filter Table function --> gets the actual values of dropdowns buttons and filter data by each value
// If data doesn't match with filters it returns a mesage
function filterTable(){
    // Selected date from "Enter a Date" form-control
    let selectedDate = d3.select("#selectedDate").property("value")
    let selectedCity = d3.select("#selectedCity").property("value")
    let selectedState = d3.select("#selectedState").property("value")
    let selectedCountry = d3.select("#selectedCountry").property("value")
    let selectedShape = d3.select("#selectedShape").property("value")

    // console.log(`SelectedDate: ${selectedDate}`)
    // console.log(`selectedCity: ${selectedCity}`)
    // console.log(`selectedState: ${selectedState}`)
    // console.log(`selectedCountry: ${selectedCountry}`)
    // console.log(`selectedShape: ${selectedShape}`)
    
    // If is not empty and data exist for choosen date then fill the table
    filteredData = tableData
    if (selectedDate !== '-Select-'){
        filteredData = filteredData.filter(data => data.datetime == selectedDate)
    }
    if (selectedCity !== '-Select-'){
        filteredData = filteredData.filter(data => data.city == selectedCity)
    }
    if (selectedState !== '-Select-'){
        filteredData = filteredData.filter(data => data.state == selectedState)
    }
    if (selectedCountry !== '-Select-'){
        filteredData = filteredData.filter(data => data.country == selectedCountry)
    }
    if (selectedShape !== '-Select-'){
        filteredData = filteredData.filter(data => data.shape == selectedShape)
    }
    // If there is no data for the selected values it returns a mesage to the html web page
    if (Object.keys(filteredData).length === 0 ){
        d3.select("tbody").html("")
        d3.select("#smgDate").text("There is not data for the selected values.")
    }
    else{
        createTable(filteredData)
    }
};

init();