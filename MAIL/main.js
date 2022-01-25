const fakeMail = ["qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

let mail = prompt("Inserisci la tua mail:");

let result = false;

for (let i = 0; i < fakeMail.length; i++) {
    if (mail == fakeMail[i]) {
        result = true;
    }
}

if (result == true){
    alert("Access granted");
} else {
    alert("Access denied");
}
