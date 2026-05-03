//act1
console.log("_Guía JavaScript iniciada_");
console.log("_actividad 1_");
const nombre = "juan";
let edad = 18977734;
let vida = -777;
let puntaje = 0;
let estaActivo = true;
console.log(nombre, "edad:" ,edad, "vida:" ,vida, "puntaje:" ,puntaje, "activo:" ,estaActivo);

//act2
console.log("_actividad 2_");
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let actividad2 = puntosBase + bonus - penalizacion;
console.log("Puntos totales: " + actividad2);

//act3
console.log("_actividad 3_");
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    const valor = input.value;

    // Convertir valor a número
    const numero = Number(valor);

    // Sumar 10
    const resultado = numero + 10;

    input.value = resultado;
});
console.log("cuando preciona el boton sumar se le suman 10 a la lo que escriba en Ingresá un dato");

//act4
console.log("_actividad 4_");
if (edad >= 13) {
    console.log("segun su edad, Puedes jugar");
} else {
    console.log("segun su edad, No puedes jugar");
}

//act5
console.log("_actividad 5_");
if (vida > 70) {console.log("jugador bien");} else if (vida >= 30) {console.log("jugador herido");} else if (vida > 0) {console.log("jugador en peligro");} else if (vida == 0) {console.log("jugador muerto");} else {console.log("vida no valida");}

//act6
console.log("_actividad 6_");
let opcion = "iniciar";
switch (opcion) {
    case "iniciar":
        console.log("Opción seleccionada: Iniciar");
        break;
    case "pausar":
        console.log("Opción seleccionada: Pausar");
        break;
    case "reanudar":
        console.log("Opción seleccionada: Reanudar");
        break;
    default:
        console.log("Opción no válida");
}

//act7
console.log("_actividad 7_");
for (let i = 10; i >= 1; i--) {
    console.log("Número: " + i);
}

//act8
console.log("_actividad 8_");
let puntajeTotal = 0;
for (let ronda = 1; ronda <= 5; ronda++) {
    let puntosRonda = ronda * 10;
    puntajeTotal = puntosRonda;
}
console.log(puntajeTotal);

//act9
console.log("_actividad 9_");
const inventario = ["death note", "foto de una piña", "fierro", "sans", "milanguche de sanwinwza"];

for (let i = 0; i < inventario.length; i++) {
    let p = i-inventario.length;
    if (p == -1 || i == 0){console.log("Ítem " + (i + 1) + ": " + inventario[i])};
}
console.log("items en el inventario: " + inventario.length);

//act10
console.log("_actividad 10_");
for (let i = 0; i < inventario.length; i++) {
    console.log("Ítem " + (i + 1) + ": " + inventario[i]);
}

//act11
console.log("_actividad 11_");
var mochila = [];

mochila.push("flecha stand");
mochila.push("diccionario en chino");
mochila.push("arco sin flecha");
mochila.push("aspiradora");
mochila.push("un traje de buseo");

console.log("Mochila inicial:");
for (let i = 0; i < mochila.length; i++) {
    console.log("Ítem " + (i + 1) + ": " +mochila[i]);
}

console.log("Mochila después de eliminar el último ítem:");
mochila.pop();
for (let i = 0; i < mochila.length; i++) {
    console.log("Ítem " + (i + 1) + ": " +mochila[i]);
}

//act12
console.log("_actividad 12_");
var inventario2 = ["pan duro"];
inventario2.includes("llave") ? console.log("La puerta se habre") : console.log("La puerta no se habre");
console.log("el inventario tiene:" + inventario2[0]);

//act13
console.log("_actividad 13_");
function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludarUsuario("esteban dido");

//act14
console.log("_actividad 14_");
function calcularVidaRestante(vida1, dario) {
    let vidaRestante = vida1 - dario;
    return vidaRestante;
}
let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

//act15
console.log("_actividad 15_");
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(10, 5));

//act16
console.log("_actividad 16_");
const jugador = {
    nombre: "juan",
    vida: 1,
    energia: 1,
    nivel: 9999999999999999,
    inventario: ["varias flechas", "una flor"]
};
console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);

//act17
console.log("_actividad 17_");

const jugador2 = {
    nombre: "ramon",
    nivel: 42,
    monedas: -750
};

// 1. Aumentar el nivel en 1
jugador2.nivel = jugador2.nivel + 1;

// 2. Sumar 50 monedas
jugador2.monedas = jugador2.monedas + 50;

// 3. Mostrar el objeto actualizado
console.log(jugador2);

//act18
console.log("_actividad 18_");

const personajes1 = [
    { nombre: "juan", vida: 1, tipo: "caballo naval tactico", nivel: 9999999999999999 },
    { nombre: "araki", vida: 9999999999999, tipo: "mangaka", nivel: 9999999999999 },
    { nombre: "cilantro", vida: 900, tipo: "araña", nivel: 1 }
];

// Recorrer el array
for (let i = 0; i < personajes1.length; i++) {
    let personaje = personajes1[i];

    console.log(personaje.nombre + " es un " + personaje.tipo + " y está en nivel " + personaje.nivel);
}

//act19
console.log("_actividad 19_");

const personajesFuertes = personajes1.filter((personaje1) => {
    return personaje1.nivel >= 3;
});

// Mostrar resultado
console.log(personajesFuertes);

//act20
console.log("_actividad 20_");

const nombres = personajes1.map((personaje1) => {
    return personaje1.nombre;
});

console.log(nombres);

//act21
console.log("_actividad 21_");

const personajeEncontrado = personajes1.find((personaje1) => {
    return personaje1.nombre === "araki";
});

console.log(personajeEncontrado);

//act22
console.log("_actividad 22_");

const vidaTotal = personajes1.reduce((acumulador, personaje1) => {
    return acumulador + personaje1.vida;
}, 0);

console.log(vidaTotal);

//act23
console.log("_actividad 23_");

// Cambiar texto
mensaje.textContent = "Bienvenido a la guía de JavaScript";

// Desafío extra: cambiar color
mensaje.style.color = "blue";

//act24
console.log("_actividad 24_");
let puntos = 0;

boton.addEventListener("click", function () {

    // sumar puntos
    puntos += 10;

    // mostrar resultado
    mensaje.textContent = "Puntos: " + puntos;
});

//act25
console.log("_actividad 25_");

const input2 = document.getElementById("dato2");

boton.addEventListener("click", function () {

    const nombre = input2.value;

    // validar input
    if (nombre === "") {
        mensaje.textContent = "Ingresá un nombre para continuar";
    } else {
        mensaje.textContent = "Bienvenido/a, " + nombre;
    }
});

//act26
console.log("_actividad 26_");

const jugadorg = {
    nombre: "juan carlo bodoque",
    puntaje: 31
};

// guardar en localStorage (convertido a string)
localStorage.setItem("jugadorg", JSON.stringify(jugadorg));

// recuperar desde localStorage
const jugadorGuardado = JSON.parse(localStorage.getItem("jugadorg"));

// mostrar por consola
console.log(jugadorGuardado);