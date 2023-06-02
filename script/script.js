let input = document.getElementById("input");
let display = document.getElementById("display");
let button = document.getElementById("submit");

button.addEventListener("click", function(){
    let para = document.createElement("p");
    para.innerHTML = input.value;
    display.appendChild(para);
    storeData();

    text.addEventListener("click", function() {
        para.style.textDecoration = "line-through";
        storeData();
    })
    function storeData() {
        localStorage.setItem("data", para.innerHTML)
    }
    function showData() {
        para.innerHTML = localStorage.getItem("data")
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