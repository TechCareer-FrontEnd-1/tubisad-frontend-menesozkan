function adminFunction() {
    hak--;
    document.write("Kalan deneme hakkiniz:",hak);
}
var hak=1;
var dbUserEmail="user@gmail.com";
var dbUserPassword="admin";
var email=prompt("Email giriniz");
var password=prompt("Parola giriniz");
if(email==dbUserEmail && password==dbUserPassword) {
document.write("Admin Page");
} else{
    adminFunction();
}