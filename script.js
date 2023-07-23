// select items
let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let list = document.querySelectorAll(".list");
let box = document.querySelectorAll(".box");
let drag = null;

btn.addEventListener("click" ,function() {
    if(inp.value != "") {
        box[0].innerHTML += `
        <p class="item" draggable="true">${inp.value} </p>
        `
        inp.value = "";

        dragItem()
    }
})

function dragItem() {

    let item = document.querySelectorAll(".item");

    item.forEach(function(item) {
        item.addEventListener("dragstart", function() {
            item.style.opacity = "0.5"
            drag = item;
        })

        item.addEventListener("dragend", function() {
            item.style.opacity = "1"
            drag = null;
        })

        box.forEach(function(box) {
            box.addEventListener("dragover" ,function(e) {
                e.preventDefault()
                this.style.backgroundColor = "Green"
            })
            box.addEventListener("dragleave" ,function() {
                box.style.backgroundColor = "#222"
            })

            box.addEventListener("drop" , function() {
                this.append(drag)
            })
        })
    })

}