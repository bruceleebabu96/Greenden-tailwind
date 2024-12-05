var sidenav = document.getElementById("sidenav")
var navClose = document.getElementById("navClose")
var menuIcon = document.getElementById("menuIcon")


menuIcon.addEventListener("click", function () {
    sidenav.style.right = "0px"
    console.log(sidenav)
})

navClose.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var search = document.getElementById("search")
var productContainer = document.getElementById("product-container")
var productList = productContainer.querySelectorAll("div")



search.addEventListener("keyup", function () {


    var enteredValue = event.target.value.toUpperCase()



    for (count = 0; count < productList.length; count = count + 1) {

        var productname = productList[count].querySelector("h1").textContent
        // if (productname.toUpperCase().indexOf(enteredValue) < 0) {
        if (productname.toUpperCase().includes(enteredValue) == true) {
            productList[count].style.display = "block"
            // productList[count].style.display = "none"


        }
        else {
            productList[count].style.display = "none"
            // productList[count].style.display = "block"
        }
    }
})

