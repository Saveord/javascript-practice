let isAdmin = prompt("Who are you?", "");

if (isAdmin === "Admin") {
    let password = prompt("Enter your password", "");
    if (password === "TheMaster") {
        alert("Welcome!");
    }
    else if (password === null) {
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (isAdmin === null) {
    alert("Canceled");
}
else {
    alert("I don't know you");
}