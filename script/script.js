let input = document.getElementById("input");
let display = document.getElementById("display");
let button = document.getElementById("submit");

button.addEventListener("click", function(){
    let text = document.createElement("p");
    text.innerHTML = input.value;
    display.appendChild(text);
    storeData();

    text.addEventListener("click", function() {
        text.style.textDecoration = "line-through";
        storeData();
    })
    function storeData() {
        localStorage.setItem("data", text.innerHTML)
    }
    function showData() {
        text.innerHTML = localStorage.getItem("data")
    }
    showData()

    // function getValues() {
    //     let storedData = window.localStorage.items;
    //     if(!storedData) {
    //         text.innerHTML = "<p>Make a to list</p>"+
    //                          "<p>Make sure to complete your to do list</p>"+
    //                          "<p>After completion make sure to reward yourself</p>"
    //     }
    //     else {
    //         text.innerHTML = storedData
    //     }
    // }
    // getValues();
})