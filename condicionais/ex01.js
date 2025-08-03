// salario >= 10000: 3% de bonus
// salario >= 7000: 5% de bonus
// salario >= 5000: 7% de bonus
// salario < 3000: 10% de bonus
const salario = 2300

if (salario >= 10000) {
    console.log("Salário com acréscimo de 3%: " + (salario + (salario * 0.03)))
} else if (salario >= 7000) {
    console.log("Salário com acréscimo de 5%: " + (salario + (salario * 0.05)))
} else if (salario >= 5000) {
    console.log("Salário com acréscimo de 7%: " + (salario + (salario * 0.07)))
} else if (salario < 3000) {
    console.log("Salário com acréscimo de 10%: " + (salario + (salario * 0.10)))
} else {
    console.log("Salário não se enquadra em nenhuma faixa de bônus")
}

