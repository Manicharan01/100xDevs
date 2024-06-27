var num = 1;
function myFunction() {
    console.clear();
    console.log(num);
    num = num + 1;
}

for (let i = 0; i <= 30; i++){
    setTimeout(myFunction, 1 * 1000);
}
