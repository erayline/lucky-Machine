let hersey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890";
hersey = (hersey.split(''));




function generate(){
    arkaplanyazisi = " "
    for (let i=0; i<6000; i++){
        let rastgele = Math.random()
        rastgele = rastgele*100
        rastgele = rastgele.toFixed(0)
        arkaplanyazisi += hersey[rastgele]
    }
    console.log(arkaplanyazisi)
    return arkaplanyazisi
}

function arkplancevir(){
    document.getElementById("arkaplanimiz").innerText = generate()
}
document.getElementById("arkaplanimiz").innerText = generate()



document.addEventListener("mousemove", function(event) {
    arkplancevir()
});



setInterval(arkplancevir,10000)
