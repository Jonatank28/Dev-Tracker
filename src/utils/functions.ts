/**
 * Função para truncar um texto caso o seu comprimento exceda um valor máximo.
 * Adiciona "..." ao final do texto truncado.
 *
 * @param {string} text - O texto a ser truncado.
 * @param {number} [maxLength=200] - O comprimento máximo permitido para o texto. O valor padrão é 200.
 * @returns {string} - O texto truncado ou o texto original se não ultrapassar o comprimento máximo.
 *
 * @example
 * const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
 * const truncatedText = truncateText(longText, 20); // "Lorem ipsum dolor..."
 */
const truncateText = (text: string, maxLength: number = 200): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export { truncateText };
