
function showMessage() {
    let name = prompt("Enter your name");

    if (name == null || name == "") {
        alert("Welcome to Rang India!");
    } else {
        alert("Welcome to Rang India, " + name + "!");
    }
}
