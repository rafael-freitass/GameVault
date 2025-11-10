export function mascaraCep(valor) {
  const digits = valor.replace(/\D/g, "").slice(0, 8);
  const p1 = digits.slice(0, 5);
  const p2 = digits.slice(5, 8);
  return p2 ? `${p1}-${p2}` : p1;
}

export function validaCep(valor) {
  return /^\d{5}-?\d{3}$/.test(valor);
}