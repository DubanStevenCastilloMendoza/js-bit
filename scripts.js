


function saber_si_es_primo() {
    

    let valor = prompt("ingrese el número");
    let contador = 0;

    if (valor !==1) {
        if (primo(valor)) {
            console.log(valor + " es primo")
            siguiente_primo(valor)
        }
        else{
            console.log("El número no es primo")
            siguiente_primo(valor)
        }
    }else{
        console.log("El número es primo")
        siguiente_primo(valor)
    }

  

    function primo(valor) {
        if (valor == 0 || valor== 1 || valor == 4) {
            return false;
        }

        for(let i = 2; i < valor/2; i++){
            if (valor % i == 0) {
                return false;
            }
        }
     return valor !== 1;
    }
 


    function siguiente_primo(num_siguiente) {
        contador = num_siguiente
        contador++

        while(primo(contador) == false){
            contador++
        }
        console.log("el siguiente número es: " + contador)
    }


}