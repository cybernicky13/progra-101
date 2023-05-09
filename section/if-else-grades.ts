console.log('Bienvenido a su prueba');

export let score: number = 13;
let scoreLetter: string = '';

if (score >= 90) {
    scoreLetter = 'A';
} else if (score >= 80) {
    scoreLetter = 'B';
} else if (score >= 70) {
    scoreLetter = 'C';
} else if (score >= 60) {
    scoreLetter = 'D';
} else if (score < 60) {
    scoreLetter = 'F';
}

console.log('La nota del alumno es:', scoreLetter);