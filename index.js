console.log("Olá heroi!");
console.log("Como devo te chamar?");
let nome = prompt("Digite seu nome: ");
console.log("Seja bem-vindo," + nome +".");
console.log("Agora vamos analisar seu nivel de poder.");
let exp = prompt("Digite seu nivel de experiencia: ");

//Análise de poder 
switch (exp) 
{
    case exp < 1000: 
        console.log ("O Herói de nome " + nome + " está no nível Ferro")
        break

    case exp >= 1001 || exp <= 2000:
        console.log ("O Herói de nome " + nome + " está no nível Bronze")
        break
    case exp >= 2001 || exp <= 5000: 
        console.log ("O Herói de nome " + nome + " está no nível Prata")
        break
    case exp >= 5001 || exp <= 7000:
        console.log ("O Herói de nome " + nome + " está no nível Ouro")
        break
    case exp >= 7001 || exp <= 8000:
        console.log ("O Herói de nome " + nome + " está no nível Platina")
        break
    case exp >= 8001 || exp <= 9000:
        console.log ("O Herói de nome " + nome + " está no nível Ascendente")
        break
    case  exp >= 9001 || exp <= 10000:
        console.log ("O Herói de nome " + nome + " está no nível Imortal")
        break
    case exp >= 10001:
        console.log ("O Herói de nome " + nome + " está no nível Radiante")
        break
    
}