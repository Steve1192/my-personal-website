const h2 = document.createElement("h2");
h2.textContent = "Mark Sanchez did his best";
document.querySelector("body").appendChild(h2);
addEventListener("click", function() {this.alert("Pats suck!");});