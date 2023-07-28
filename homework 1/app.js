let bg = prompt("Siz rang kiritishiz kerak va kiritgan rangingizga web sitening orqa foni moslashadi misol uchun: qizil,sariq,yashil")

if (bg === "qizil") {
    document.body.style.backgroundColor = "red"
}

else if (bg === "sariq") {
    document.body.style.backgroundColor = "yellow"
}

else if (bg === "yashil") {
    document.body.style.backgroundColor = "green"
}

else if (bg != "yashil" && bg != "sariq" && bg != "qizil"){
    document.querySelector(".h1_class").innerHTML = "ERROR!";
}