export function highlightLine(line) {

  const keywords = [
    "const",
    "class",
    "public",
    "function",
    "return",
    "import",
    "from"
  ];

  const words = line.split(/(\s+)/);

  return words
    .map(word => {

      // keyword
      if (keywords.includes(word)) {
        return `<span class="text-blue-400">${word}</span>`;
      }

      // string
      if (/^["'].*["']$/.test(word)) {
        return `<span class="text-green-400">${word}</span>`;
      }

      // number
      if (/^\d+$/.test(word)) {
        return `<span class="text-orange-400">${word}</span>`;
      }

      return word;

    })
    .join("");

}