console.log("hello")
var aa = 10;
console.log(aa);




let fullName = "Agnisis Dutta";
console.log(fullName.length)
for (i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);
}

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

console.log(fullName.indexOf('y'))
console.log(fullName.replaceAll('a', 'h'))


let firstName = "Shilpi";
let secondName = "Sen";
let vedios = 100;
let subscribers = 45000;
let result = "youtube channel" + firstName + " " + secondName + "has" + vedios + "vedios and + subscriber" + subscribers;
console.log(result);

const hero = {
    name: "agni",
    idNo: 89,
    charecter: "Viper"
}

const game = (hero) => {
    return (
        console.log(hero.name)
    )
}
game(hero)







