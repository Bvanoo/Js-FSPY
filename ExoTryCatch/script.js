function sommeTableau(tableau) {
    if (tableau.length === 0) {
        throw new Error("Le tableau est vide");
    }

    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

function inverse(nombre) {
    if (nombre === 0) {
        throw new Error("Division par zéro");
    }

    try {
        console.log(sommeTableau([1, 2, 3, 4]));
    } catch (error) {
        console.error(error.message);
    }
    try {
        console.log(inverse(0));
    } catch (error) {
        console.error(error.message);
    }

    return 1 / nombre;
}
inverse(5);
