// Defina una función que calcule el cuadrado de un número
export function cuadrado(n: number): number {
  return n * n;
}

// Defina una función que calcule la enésima potencia positiva de un número
export function potencia(base: number, exponente: number): number {
  if (exponente === 0) return 1;
  return base * potencia(base, exponente - 1);
}

// Defina una función que calcule el factorial de un número
export function factorial(n: number): number {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
}

// Defina una función que calcule el n-ésimo número de la serie de Fibonacci
export function fibonacci(n: number, a: number = 0, b: number = 1): number {
  if (n === 0) return a;
  return fibonacci(n - 1, b, a + b);
}

// Realice una funcion que dado el numero de fila y columna,
// calcule el valor del numero que se encuentre el la piramide de Pascal
export function pascal(fila: number, columna: number): number {
  if (columna === 0 || columna === fila) return 1;
  return pascal(fila - 1, columna - 1) + pascal(fila - 1, columna);
}

// Defina una función que calcule el máximo común divisor de dos números
export function mcd(a: number, b: number): number {
  if (b === 0) return a;
  return mcd(b, a % b);
}

/**
 * Realice una función que permita saber si un texto tiene los parentesis balanceados, por ejemplo:
 * () => OK
 * ((()))() => OK
 * (()()) => OK
 * (()())) => no OK
 * (()(()) => no OK
 * )( => no OK
 */
type Parentesis = "(" | ")";
export function balance(
  chars: Parentesis[],
  index: number = 0,
  count: number = 0
): boolean {
  if (count < 0) return false;
  if (index === chars.length) return count === 0;
  if (chars[index] === "(") return balance(chars, index + 1, count + 1);
  else return balance(chars, index + 1, count - 1);
}

/**
 * Realice una función que cuente cuantas combinaciones pueden existir con monedas para un valor determinado, por ejemplo:
 * monedas (1,2) y valor es 4 , podemos llegar con las siguientes convinaciones (1,1,1,1) (1,1,2) (2,2)
 * por lo que la función debería retornar 3.
 */
export function contarCambio(monedas: number[], valor: number): number {
  function contar(monedaIndex: number, valorRestante: number): number {
    if (valorRestante === 0) return 1;
    if (valorRestante < 0 || monedaIndex < 0) return 0;
    return (
      contar(monedaIndex, valorRestante - monedas[monedaIndex]) +
      contar(monedaIndex - 1, valorRestante)
    );
  }
  return contar(monedas.length - 1, valor);
}

/**
 * Realice una función que indique si una lista de letras es palindromo
 * () -> true
 * ('a','l','a') -> true
 * ('a','l','l','a') -> true
 * ('h','a','l','l','a') -> false
 */
export function palindromo(chars: string[]): boolean {
  function esPalindromo(start: number, end: number): boolean {
    if (start >= end) return true;
    if (chars[start] !== chars[end]) return false;
    return esPalindromo(start + 1, end - 1);
  }
  return esPalindromo(0, chars.length - 1);
}
