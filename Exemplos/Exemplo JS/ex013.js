var agora = new Date()
var diasem = agora.getDay()
/*
0 = Domindo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/

switch(diasem) {

    case 0:
        console.log('Domindo')
        break
    case 1:
        console.log('segunda')
       break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')        
        break
    case 5:
        console.log('Sexta')
        break
    case 6: 
        console.log('Sábado')

    default: 
        console.log('[ERRO] Dia inválido')
        break
}