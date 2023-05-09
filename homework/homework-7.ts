export function max(a:number, b:number, c:number) {
    if (a > b && a > c){
        return a;
    }
    if (b > a && b > c){
        return b;
    }
    if (c > a && c > b){
        return c;
    }
}


let maxValue = max( 5, 2, 6); 
console.log( maxValue ); // 6