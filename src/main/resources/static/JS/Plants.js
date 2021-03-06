let div = document.querySelector('.main');
function getData(url, callback) {
    let jsonData;
    fetch(url).then((response) => response.json())
        .then((data) => (jsonData = data))
        .then(() => callback(jsonData))
        .catch((error) => console.log(error));

}
getData("http://localhost:9002/read", useData)
function useData(arrOfObjs) {
    const plantContainer = document.createElement('table');
    div.appendChild(plantContainer);
    console.log(arrOfObjs);
    arrOfObjs.forEach((plant) => {
        const tableRow = document.createElement('tr');
        const pName = document.createElement('td');
        const pPrice = document.createElement('td');
        const pSize = document.createElement('td');
        const pVariegated = document.createElement('td');
        pName.innerText = plant.name;
        pPrice.innerText = plant.price;
        pSize.innerText = plant.size;
        pVariegated.innerText = plant.variegated;
        tableRow.appendChild(pName);
        tableRow.appendChild(pPrice);
        tableRow.appendChild(pSize);
        tableRow.appendChild(pVariegated);
        plantContainer.appendChild(tableRow);
    });
    div.appendChild(plantContainer);
}