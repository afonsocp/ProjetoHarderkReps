// Função para calcular o frete TYG
function calcularFreteTYG(peso) {
  const primeiraFaixa = 100;
  const precoBase = 50;
  const precoPor100g = 9.5;
  let frete;
  if (peso <= primeiraFaixa) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - primeiraFaixa;
    const blocosAdicionais = Math.ceil(pesoExcedente / 100);
    frete = precoBase + blocosAdicionais * precoPor100g;
  }
  return frete;
}
// Disponibiliza para uso global
window.calcularFreteTYG = calcularFreteTYG;

// Função para calcular o frete HZ-EMS
function calcularFreteHZEMS(peso) {
  if (peso > 30000) {
    return 'Peso máximo permitido é 30.000g (30 kg).';
  }
  const precoBase = 170; // até 500g
  const precoPor500g = 55;
  let frete;
  if (peso <= 500) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - 500;
    const blocosAdicionais = Math.ceil(pesoExcedente / 500);
    frete = precoBase + blocosAdicionais * precoPor500g;
  }
  return frete;
}
window.calcularFreteHZEMS = calcularFreteHZEMS;

// Função para calcular o frete FJ-BR-EXP-F
function calcularFreteFJBR(peso) {
  if (isNaN(peso) || peso <= 0) {
    return 'Por favor, insira um peso válido.';
  }
  if (peso > 20000) {
    return 'Peso máximo permitido é 20.000g (20 kg).';
  }
  const precoBase = 50; // até 100g
  const precoPor100g = 11;
  let frete;
  if (peso <= 100) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - 100;
    const blocosAdicionais = Math.ceil(pesoExcedente / 100);
    frete = precoBase + blocosAdicionais * precoPor100g;
  }
  return frete;
}
window.calcularFreteFJBR = calcularFreteFJBR;

// Função para calcular o frete JD-EXP-EF :0-3kg
function calcularFreteJDEXPEF(peso) {
  if (isNaN(peso) || peso <= 0) {
    return 'Por favor, insira um peso válido.';
  }
  if (peso > 3000) {
    return 'Peso máximo permitido é 3.000g (3 kg).';
  }
  const precoBase = 55; // até 100g
  const precoPor100g = 10.5;
  let frete;
  if (peso <= 100) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - 100;
    const blocosAdicionais = Math.ceil(pesoExcedente / 100);
    frete = precoBase + blocosAdicionais * precoPor100g;
  }
  return frete;
}
window.calcularFreteJDEXPEF = calcularFreteJDEXPEF;

// Função para calcular o frete JD-EXP-EF Battery-line
function calcularFreteJDBattery(peso) {
  if (isNaN(peso) || peso <= 0) {
    return 'Por favor, insira um peso válido.';
  }
  if (peso > 10000) {
    return 'Peso máximo permitido é 10.000g (10 kg).';
  }
  const precoBase = 80; // até 100g
  const precoPor100g = 15;
  let frete;
  if (peso <= 100) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - 100;
    const blocosAdicionais = Math.ceil(pesoExcedente / 100);
    frete = precoBase + blocosAdicionais * precoPor100g;
  }
  return frete;
}
window.calcularFreteJDBattery = calcularFreteJDBattery;

// Função para calcular o frete China Post SAL
function calcularFreteChinaPostSAL(peso) {
  if (isNaN(peso) || peso <= 0) {
    return 'Por favor, insira um peso válido.';
  }
  if (peso > 30000) {
    return 'Peso máximo permitido é 30.000g (30 kg).';
  }
  const precoBase = 168; // até 1000g
  const precoPor1000g = 63;
  let frete;
  if (peso <= 1000) {
    frete = precoBase;
  } else {
    const pesoExcedente = peso - 1000;
    const blocosAdicionais = Math.ceil(pesoExcedente / 1000);
    frete = precoBase + blocosAdicionais * precoPor1000g;
  }
  return frete;
}
window.calcularFreteChinaPostSAL = calcularFreteChinaPostSAL;
