const high = (base, lado1, lado2) => {
  try {
    if (lado1 === lado2) {
      lado1 = lado1 **= 2;
      base = base / 2;
      base = base **= 2;
      return Math.floor(Math.sqrt(lado1 - base));
    } else {
      throw new Error("Este no es un triángulo isosceles");
    }
  } catch (err) {
    console.error(err.name + ': ' + err.message);
  }
};

function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error("Los lados a y b no son iguales");
  } else {
    let trianguloPequenoLadoA; // PENDIENTE
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    // ...

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}
