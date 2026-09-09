
let valor = Number(prompt("Digite o valor: "));

if (valor <=100) {
    alert("Não tem desconto!")
} else if (valor <=299.99) {
   let desconto = valor * 0.1
   let valorfinal = valor - desconto
   alert('10% de desconto: $({valor_total}')
} else if (valor <=499.99) {
    let valorfinal = valor * 0.8 
    alert('20% de desconto $(valor_total)')
} else {
    let valorfinal = valor * 0.7 
    alert('30% de desconto: ($valor_total)')}