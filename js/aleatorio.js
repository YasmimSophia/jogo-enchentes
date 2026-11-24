const nomes = ["Ana", "Fernanda", "Marcelo", "Amanda", "Gabriel"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
