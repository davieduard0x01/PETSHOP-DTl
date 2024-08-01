

// Definindo preços e distâncias
const petShops = {
  "Meu Canino Feliz": {
    distance: 2, // distância em km
    weekdays: { small: 20, large: 40 },
    weekends: { small: 20 * 1.20, large: 40 * 1.20 } // 20% de aumento
  },
  "Vai Rex": {
    distance: 1.7, // distância em km
    weekdays: { small: 15, large: 50 },
    weekends: { small: 20, large: 55 }
  },
  "ChowChawgas": {
    distance: 0.8, // distância em km
    weekdays: { small: 30, large: 45 },
    weekends: { small: 30, large: 45 } // mesmo preço durante a semana e fins de semana
  }
};

// Função para calcular o custo total
export function calcularCusto(petShop, diaDaSemana, pequenos, grandes) {
  const precos = diaDaSemana === 'fim_de_semana' ? petShop.weekends : petShop.weekdays;
  const custoTotal = (pequenos * precos.small) + (grandes * precos.large);
  return custoTotal;
}

// Função para encontrar o melhor petshop
export function encontrarMelhorPetShop(pequenos, grandes, diaDaSemana) {
  let melhorPetShop = null;
  let melhorCusto = Infinity;

  for (const [nome, petShop] of Object.entries(petShops)) {
    const custo = calcularCusto(petShop, diaDaSemana, pequenos, grandes);

    if (custo < melhorCusto || (custo === melhorCusto && petShop.distance < petShops[melhorPetShop].distance)) {
      melhorCusto = custo;
      melhorPetShop = nome;
    }
  }

  return {
    petShop: melhorPetShop,
    custo: melhorCusto
  };
}
