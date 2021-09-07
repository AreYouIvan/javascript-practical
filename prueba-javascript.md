1. **Responde las siguientes preguntas en la sección de comentarios:**

- **¿Qué es una variable y para qué sirve?**
  Una variable es un espacio en memoria, al que le asignaremos un nombre y un valor. Lo podremos inicializar cuando sea necesario.
- **¿Cuál es la diferencia entre declarar e inicializar una variable?**
  Declarar es asignarle un nombre y reservarla, e inicializar es iniciarla con un valor.
- **¿Cuál es la diferencia entre sumar números y concatenar strings?**
  sumar numero es adicionar los valores a uno solo, y concatenar string es unicar una cadena de texto entre comillas.
- **¿Cuál operador me permite sumar o concatenar?**
  - y los template literal despues de +ECMA 6

2. **Determina el nombre y tipo de dato para almacenar en variables la siguiente información:**

Nombre: String
Apellido: String
Nombre de usuario en Platzi: String
Edad: Int number
Correo electrónico: String
Mayor de edad: Boolean
Dinero ahorrado: Real number
Deudas: Boolean || Real number

3. **Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.**

```
const name: "Name";
const lastName: "Lastname";
const username: "username1";
const age: 12;
const email: "email@gmail.com";
const isMajor: false;
const moneySaved: 12;
const debts: 344;
```

4️. **Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**

Nombre completo (nombre y apellido)

```
const fullName = () => {
  return name + lastname;
}

fullName();
```

Dinero real (dinero ahorrado menos deudas)

```
const realMoney = () => {
  return moneySaved - debts;
}
realMoney();
```

---

## Funciones

1️. **Responde las siguientes preguntas en la sección de comentarios:**

- **¿Qué es una función?**
  Un bloque de código que ejecuta una serie de instrucciones.
- **¿Cuándo me sirve usar una función en mi código?**
  Cuando quiero ejecutar toda una serie de pasos.
- **¿Cuál es la diferencia entre parámetros y argumentos de una función?**
  Parámetros: Variables que asignamos dentro de los parentesis al declarar la funcion.
  Argumentos: Los valores/instrucciones por los que reemplazamos las variables cuando llamamos la funcion.

```

      function hola(name, lastname) {
        console.log('hola' + name + lastname)
      }
      hola('ivan', 'garcia');
```

2️. **Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:**

```
const name = "Juan David ";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function makingPresentation(personName, personLastname, alias) {
  let fullName = personName + personLastname;
  console.log("Mi nombre es " + fullName + ", pero prefiero que me digas " + nickname + ".");
}

makingPresentation(name, lastname, completeName, nickname);

```

---

## Condicionales

1️. **Responde las siguientes preguntas en la sección de comentarios:**

- **¿Qué es una condicional?**
  Es un proceso que genera una validación y a partir de esa validación puede ejecutar diferentes calculos en respuesta de ello.
- **¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**
  Condicional, nos permite anidar varias opciones: if(){}else if(){}else{}
  Condicion ternaria es menos código: es true ? entonces haz esto : si no lo otro.
- **¿Puedo combinar funciones y condicionales?**
  Si se puede y es muy recomendable.

2️. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
  break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  break;
  case "ExpertPlus":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  break;
}
```

Ejecicio:

```

function choosingPlanType(plan) {
  let tipoDeSuscripcion = plan;

  if(tipoDeSuscripcion === 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
  }
  if(tipoDeSuscripcion === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }
  if(tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }
  if(tipoDeSuscripcion === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }

};

choosingPlanType('ExpertPlus');
```

3️. **Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

```
function recursiveFunction() {
  let question = prompt("Cuanto es 2 + 2?");
  const answerToInt = parseInt(question);
  if (answerToInt === 4) {
    alert("congrats! :D");
  } else {
    alert("you wrong :(");
    recursiveFunction();
  }
}
recursiveFunction();
```

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

## Ciclos

1️. **Responde las siguientes preguntas en la sección de comentarios:**

- ¿Qué es un ciclo?
  Es un bloque de código que bajo unos parámetros se ejecutará n cantidad de veces iterando en sus resultados.
- ¿Qué tipos de ciclos existen en JavaScript?
  For, For of, While y Do while
- ¿Qué es un ciclo infinito y por qué es un problema?
  Es un bloque de código cuya ejecución no se detiene, ocupa muchos recursos y termina por crashear la aplicación.
- ¿Puedo mezclar ciclos y condicionales?
  Si se pueden mezclar.

2. **Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:**

```for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
console.log("El valor de i es: " + i);

---

let i = 0;
while (i < 5) {
  i++;
  console.log("El valor de i es:" + i);
}

let i = 10;
while (i >= 2) {
  i--;
  console.log("El valor de i es: " + i);
}

}
```


3️. **Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

Pista: puedes usar la función prompt de JavaScript.

```
function recursiveFunction() {
  let question = prompt("Cuanto es 2 + 2?");
  const answerToInt = parseInt(question);
  if (answerToInt === 4) {
    alert("congrats! :D");
  } else {
    alert("you wrong :(");
    recursiveFunction();
  }
}
recursiveFunction();
```


## Listas
1️. **Responde las siguientes preguntas en la sección de comentarios:**

**¿Qué es un array?**
    Un array es un arreglo de varios elementos o datos en forma de cadena.
**¿Qué es un objeto?**
  Un objeto es un dato que dentro contiene atributos y propiedades.
**¿Cuándo es mejor usar objetos o arrays?**
  Cuando trabajamos con métodos, apis, o cualquier dato que dentro contenga más atributos e información.
**¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**
  Si se puede, y es muy común hacerlo.
2️. **Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.**

  ```
  personas = ["lalo", "moni", "juan", "jonas"];

  function printingFirstElement(arr) {
    return arr[0];
  }

  printingFirstElement(personas)


  ```

3️. **Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).**

   ```
  personas = ["lalo", "moni", "juan", "jonas"];

  function printingFirstElement(arr) {
    arr.forEach(e => {
      console.log(e);
    })
  }

  printingFirstElement(personas)


  ```

4️. **Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).**

  ```
  const personas = {
  lalo: 1,
  monica: 2,
  juan: 3,
  arnoldo: 4,
};

function printingFirstElement(obj) {
  arr = Object.getOwnPropertyNames(obj);

  arr.forEach((e) => {
    console.log(e);
  });
}

printingFirstElement(personas);


  ```