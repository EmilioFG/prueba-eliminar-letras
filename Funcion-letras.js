function EliminarCaracteres (Cadena, Numero) {
    //obtener alfabeto
    let alfabeto = {}
    let caracter = Cadena.split("");
    for (let i=0, l=caracter.length; i<l; i++) {
        if (!alfabeto[caracter[i]]) {
            alfabeto[caracter[i]] = caracter[i];
        }
    }

    let Salida = "";
    for (letra in alfabeto) {
        let cantidad = caracter.filter(c => c === alfabeto[letra]).length;
        // verifica cantidad de repeticiones
        for (let i=0, l=cantidad; i<l; i++) {
            if (i < Numero) {
                Salida += alfabeto[letra];
            }
        }
    }

    console.log('alfabeto', alfabeto)
    console.log("Entrada\n");
    console.log("Cadena: ", Cadena);
    console.log("Numero: ", Numero);
    console.log("Salida", Salida);
}

//this.EliminarCaracteres("aaabbbbcd", 2);
//this.EliminarCaracteres("aabb", 1);
// this.EliminarCaracteres("aabbaaccddeeddfe", 1);