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



function fillDropdownDate(){
    d3.select("#selectedDate").append("option").text('-Select date-')
    for(x in tableData){
        d3.select("#selectedDate").append("option").text(tableData[x].datetime);
    }
};

function fillDropdownCity(){
    d3.select("#selectedCity").append("option").text('-Select City-')
    for(x in tableData){
        d3.select("#selectedCity").append("option").text(tableData[x].city);
    }
};

function fillDropdownState(){
    d3.select("#selectedState").append("option").text('-Select State-')
    for(x in tableData){
        d3.select("#selectedState").append("option").text(tableData[x].state);
    }
};

function fillDropdownCountry(){
    d3.select("#selectedCountry").append("option").text('-Select Country-')
    for(x in tableData){
        d3.select("#selectedCountry").append("option").text(tableData[x].country);
    }
};

function fillDropdownShape(){
    d3.select("#selectedShape").append("option").text('-Select Shape-')
    for(x in tableData){
        d3.select("#selectedShape").append("option").text(tableData[x].shape);
    }
};




function filterTable(){
    // Selected date from "Enter a Date" form-control
    let selectedDate = d3.select("#selectedDate").property("value")
    let selectedCity = d3.select("#selectedCity").property("value")
    let selectedState = d3.select("#selectedState").property("value")
    let selectedCountry = d3.select("#selectedCountry").property("value")
    let selectedShape = d3.select("#selectedShape").property("value")

    console.log(`Selected Date: ${selectedDate}`)
    console.log(`Selected Date: ${selectedDate}`)
    console.log(`Selected Date: ${selectedDate}`)
    console.log(`Selected Date: ${selectedDate}`)
    console.log(`Selected Date: ${selectedDate}`)
    console.log(`Selected Date: ${selectedDate}`)




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






function choosenDate(selectedDate){

    console.log(`Selected date: ${selectedDate}`)




    // d3.json(jsonData).then((data) => {
    //     let teams = data.data[0]; // para /api/v1.0/teams
    //     // let teams = data.data; // Para leer directo del Json
    //     // let teams = data; // Para leer directo del Json completo (ref 2)

    //     for(x in teams){
    //         if(selectedCoach==teams[x].HeadCoach){
    //             optionChanged(teams[x].FullName)
    //         }
    //     }
    // });
}