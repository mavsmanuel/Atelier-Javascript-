// Fonction pour créer une matrice n*n remplie de zéros
function creerMatrice(n) {
    const matrice = [];
    for (let i = 0; i < n; i++) {
        matrice[i] = new Array(n).fill(0);
    }
    return matrice;
}

// Fonction pour afficher une matrice
function afficherMatrice(matrice) {
    for (let ligne of matrice) {
        console.log(ligne.join(" "));
    }
}

// Fonction pour additionner deux matrices
function additionMatrices(matrice1, matrice2) {
    const n = matrice1.length;
    const resultat = creerMatrice(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultat[i][j] = matrice1[i][j] + matrice2[i][j];
        }
    }
    return resultat;
}

// Fonction pour soustraire deux matrices
function soustractionMatrices(matrice1, matrice2) {
    const n = matrice1.length;
    const resultat = creerMatrice(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultat[i][j] = matrice1[i][j] - matrice2[i][j];
        }
    }
    return resultat;
}

// Fonction pour multiplier deux matrices
function multiplicationMatrices(matrice1, matrice2) {
    const n = matrice1.length;
    const resultat = creerMatrice(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                resultat[i][j] += matrice1[i][k] * matrice2[k][j];
            }
        }
    }
    return resultat;
}

// Fonction pour transposer une matrice
function transposerMatrice(matrice) {
    const n = matrice.length;
    const resultat = creerMatrice(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultat[j][i] = matrice[i][j];
        }
    }
    return resultat;
}

// Exemple d'utilisation
const n = 3; // Taille des matrices

// Créer deux matrices 3x3
const matriceA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matriceB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log("Matrice A :");
afficherMatrice(matriceA);

console.log("Matrice B :");
afficherMatrice(matriceB);

// Addition
console.log("Addition de A et B :");
const addition = additionMatrices(matriceA, matriceB);
afficherMatrice(addition);

// Soustraction
console.log("Soustraction de A et B :");
const soustraction = soustractionMatrices(matriceA, matriceB);
afficherMatrice(soustraction);

// Multiplication
console.log("Multiplication de A et B :");
const multiplication = multiplicationMatrices(matriceA, matriceB);
afficherMatrice(multiplication);

// Transposée de A
console.log("Transposée de A :");
const transposeeA = transposerMatrice(matriceA);
afficherMatrice(transposeeA);