let btnGet = document.querySelector('button');
let myTables = document.querySelector('#table');


let mountain = [
    {names:"Kilimangaro ", height:5895 , place:"Tanzania "},
    {names:"Everest ", height:8848 , place:" Nepal"},
    {names:"Mount Fuji ", height: 3776, place:" Japan"},
    {names:" Vaalserberg", height:323 , place:"Netherlands "},
    {names:"Denali ", height:6168 , place:" United States"},
    {names:"Popocatepetl", height: 5465, place:"Mexico "},
    {names:" Mont Blanc", height: 4808, place:" Italy/France"}
]

let headers = ["names" ,"height", "place" ]



   let table = document.createElement('table');
   let headerRow = document.createElement('tr');

 headers.forEach(headerText =>{
     let header = document.createElement('th');
     let textNode = document.createTextNode(headerText);
     header.appendChild(textNode)
     headerRow.appendChild(header)
  
 });
    table.appendChild(headerRow)

    mountain.forEach(mtn =>{
       let row = document.createElement('tr');

       Object.values(mtn).forEach(text =>{
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode)
        row.appendChild(cell)
       });

       table.appendChild(row);
    });

    myTables.appendChild(table)

