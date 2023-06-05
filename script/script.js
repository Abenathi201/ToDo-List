let addedInput = document.getElementById("input");
let display = document.getElementById("display");
let button = document.getElementById("submit");
let sort = document.getElementById("sort")
 

let myArray = [];

button.addEventListener("click", function(event){
    event.preventDefault();
    let todo = localStorage.getItem("todo");
    if(todo == null){
        // myArray = [];
        alert("Enter your to do list")
    } else  {
        myArray = JSON.parse(todo);
    }

    myArray.push(addedInput.value)
    addedInput.value = "";
    localStorage.setItem("todo", JSON.stringify(myArray))
    displayTodo()
    



    // let text = document.createElement("p");
    // text.innerHTML = input.value;
    // display.appendChild(text);

    // text.addEventListener("click", function() {
    //     text.style.textDecoration = "line-through";
    })

    function displayTodo() {
        let todo = localStorage.getItem("todo");
        if(todo == null) {
            // myArray = [];
            alert("Enter your to do list")
        } else {
            myArray = JSON.parse(todo);
        }

        display.innerHTML = "";
        myArray.forEach((data, index) => {
            // container += `
            
            // Have to use getElemets by something
            display.innerHTML += `
                <p id="text">${data}</p>
                <button onclick="deleteItems(${index})" class="fa-sharp fa-solid fa-trash""></button>
            `
            p.addEventListener("click", function() {
                p.style.textDecoration = "line-through";
            })
        });
        
}

    function deleteItems(index) {
        let todo = localStorage.getItem("todo");
        myArray = JSON.parse(todo);
        myArray.pop(index, 1);
        localStorage.setItem("todo", JSON.stringify(myArray));
        displayTodo();
    }

    document.addEventListener('DOMContentLoaded', () => {
        let dom = localStorage.getItem("todo");
        if(dom) {
            todo = JSON.parse(dom);
            todo.forEach((d) => {
                displayTodo(d)
            });
        }
    })

    sort.addEventListener("click", function () {

        // myArray.sort((a, b) => {
        //     if(a.value > b.value) {
        //         return 1;
        //     } else if (a.value < b.value) {
        //         return -1;
        //     }
        // })

        // let sortArray = localStorage.getItem("todo");
        // if(sortArray) {
        //     todo = JSON.parse(sortArray);
        //     todo.sort((a, b) => {
        //         if (a.value > b.value) {
        //             return 1;
        //         }
        //         else if (a.value < b.value) {
        //             return -1;
        //         }
        //     })
        // }
        

    })




    // function storeData() {jna
    //     localStorage.setItem("data", text.innerHTML)
    // }
    // function showData() {
    //     text.innerHTML = localStorage.getItem("data")
    // }
    // showData()

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
//})