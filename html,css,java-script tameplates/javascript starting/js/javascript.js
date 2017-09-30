var numincrease = 1;

var myHeadline = document.getElementById("headline");

var myButton = document.getElementById("button");

var listitem = document.getElementById("list-item");

var listitems = document.getElementById("list-item").getElementsByTagName("li")

// create headline change
//for (i=0; i < listitems.length; i++) {
    //listitems[i].addEventListener("click", activateItem);
//}

// create headline change

listitem.addEventListener("click", activateItem)

function activateItem (e) {
    
    if (e.target.nodeName = "LI") {
        myHeadline.innerHTML = e.target.innerHTML;
    
    for (i=0; i < e.target.parentNode.children.length; i++) {
    e.target.parentNode.children[i].classList.remove("active");
        }
    
    e.target.classList.add("active");
}

    
    
}

//create new item 
myButton.addEventListener("click", createNewItem);

function createNewItem () {
    listitem.innerHTML += "<li>New Item " + numincrease + "</li>"
    numincrease++;
}
