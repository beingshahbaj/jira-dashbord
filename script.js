const creatBtn = document.getElementById("btn");
const creatInput = document.querySelector(".creatInput");
const firstBox = document.querySelector(".first-box")
const box = document.querySelectorAll(".box");


const dragCard = {
    card: null,
}

for (let b of box) {
    b.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.target.classList.add("dotted")
        // event.target.style.width="100%"
    });


    b.addEventListener("dragleave", (event) => {

        event.target.classList.remove("dotted")
    });



    b.addEventListener("drop", (event) => {

        const itemCard = dragCard.card;
        event.currentTarget.appendChild(itemCard);
        event.target.classList.remove("dotted")

    });
}




console.log(box)

console.log(creatBtn);

const deletCard = (event) => {
    const item = event.target.
        parentNode;
    item.remove();

}


function addCard(p) {
    const div = document.createElement("div");
    div.setAttribute("draggable", "true")
    div.addEventListener("dragstart", dragItem)
    div.addEventListener("dragend", dragend)

    const para = document.createElement("span");
    const delet = document.createElement("span")
    delet.classList.add("material-symbols-outlined")
    delet.classList.add("delete")
    delet.textContent = "close";
    div.appendChild(delet)
    // pBox = div;




    // const h = document.createElement{}


    delet.addEventListener("click", deletCard);

    para.textContent = p;
    para.style.color="white"
    para.classList.add("box-heading");
    div.classList.add("item-card");
    div.appendChild(para)
    div.style.backgroundColor = getRandomColor();
    firstBox.appendChild(div);

    creatInput.classList.add("hide");
    creatBtn.classList.remove("hide")
}

creatInput.addEventListener("keyup", (event) => {
    const value = creatInput.value;
    if (event.keyCode == 13) {
        if (value.length > 0) {

            addCard(value);
        }
        creatInput.value = "";
    }

})


document.addEventListener("click", (e) => {

    const value = creatInput.value;
    if (value.length <= 0) {
        creatInput.classList.add("hide");
        creatBtn.classList.remove("hide");
    } else if (value.length > 0) {

        creatInput.classList.add("shake");
    }
    if (addPeopleBox.value.length != 0) {
    
        addPeopleBox.classList.toggle("shake")
}

})

creatBtn.addEventListener("click", (event) => {
    creatInput.classList.remove("hide");
    creatBtn.classList.add("hide");
    creatInput.focus();
    event.stopPropagation()

})






const dragItem = (event) => {

    setTimeout(() => {
        event.target.classList.add("hide")
    }, 0);

    dragCard.card = event.target;
}

const dragend = (event) => {
    event.target.classList.remove("hide");
}


const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const menu = document.querySelectorAll(".sidebar ul li a")




function sidebarbtn(diraction) {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (diraction === "left") {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'inline-block';

        sidebar.style.width = "64px";
        for (let x of menu) {
            x.classList.add("hide");
            x.parentNode.parentNode.style.padding = "0px"


        };
        main.style.width = "100%";
        sidebar.style.transition = ".3s"





    } else if (diraction === "right") {
        rightBtn.style.display = 'none';
        leftBtn.style.display = 'inline-block';
        for (let x of menu) {
            x.classList.remove("hide")
        };
        sidebar.style.width = "300px";
        sidebar.style.transition = ".3s"
    }
}







const addBtn = document.getElementById("addpeoplebtn");
const addPeopleBox = document.getElementById("addpeople")


const peopleBox = document.getElementById("peopleBox");

const peopleList = [];

addPeopleBox.addEventListener("click", (event) => {
    event.stopPropagation()

})
addPeopleBox.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        if (addPeopleBox.value.length != 0) {
            showPeople();
    event.stopPropagation()
            
        }
        
    } else {
        return;
    }
})
addBtn.addEventListener("click", (event) => {

    if (addPeopleBox.value.length != 0) {
        event.stopPropagation()
        showPeople();
     
    } else if (addPeopleBox.value.length ==0) { 
        addPeopleBox.focus();
        event.stopPropagation()

    } else{
        return;
 }


});

function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function showPeople() {

    const list = document.createElement("li")
    list
    list.innerText = addPeopleBox.value.charAt(0);
    list.style.backgroundColor = getRandomColor();
    peopleBox.appendChild(list);
    addPeopleBox.value = "";

    peopleList.push(list);

}
