Ejercicios teóricos

27. Diferencia entre let, const y var:

let: permite declarar variables que pueden cambiar su valor.
const: declara variables cuyo valor no puede reasignarse.
var: forma antigua de declarar variables, no es recondado usarlo.

¿Cuándo usarías let?:
    Cuando el valor de la variable va a cambiar, por ejemplo, contadores o puntajes.

¿Cuándo usarías const?:
    Cuando el valor no debería cambiar, por ejemplo, objetos, arrays o configuraciones fijas.

¿Por qué actualmente se recomienda evitar var?:
    Porque tiene scope confuso, es funcional en vez de bloque, lo que provoca fugas de variables, errores de «hoisting» (elevación) y sobrescritura accidental de datos. let y const son más seguros y predecibles.

28. ¿Qué es el scope?

¿Qué significa “scope” (alcance)?:
    Es el lugar del código donde una variable es accesible o puede usarse.

let nombre = "Global";

function mostrarNombre() {
    let nombre = "Local";
    console.log(nombre);
}

mostrarNombre();
console.log(nombre);

¿Qué se muestra primero?:
    "Local"
Porque dentro de la función mostrarNombre se usa la variable local del bloque.

¿Qué se muestra después?:
    "Global"
Porque fuera de la función se usa la variable global.

¿Por qué?:
Porque existen dos variables distintas con el mismo nombre, pero en distintos scopes:

    nombre global: accesible en todo el archivo.
    nombre dentro de la función: solo existe dentro de mostrarNombre.
    JavaScript siempre usa la variable del scope más cercano (local primero, luego global).

29. Diferencia entre array y objeto

Array: Se usa cuando necesitas una lista de elementos del mismo tipo o colección ordenada.

Objeto: Se usa cuando necesitas describir una entidad con características o propiedades.

Array: Representa el inventario del jugador

    Es una lista de ítems
    Importa el orden y la cantidad
    Se accede por índice (inventario[0])

Objeto: Representa al jugador como personaje

    Tiene atributos con nombre (clave: valor)
    Cada propiedad describe algo específico
    Se accede por nombre (jugador.vida)

30. Eventos en JavaScript

¿Qué es un evento en JavaScript?
    Es una acción que ocurre en la página, como un clic, escribir, mover el mouse, y que el navegador puede “escuchar” para ejecutar código.

boton.addEventListener("click", function () {
    console.log("El usuario hizo clic");
});

¿Qué elemento escucha el evento?
    El elemento boton

¿Qué evento se está escuchando?
    El evento "click" (cuando el usuario hace clic)

¿Qué acción se ejecuta?
    Se muestra en consola: "El usuario hizo clic"

¿Dónde podríamos aplicar esto en una página web o videojuego?
podriamos uasarlo en:
. Botón de “Iniciar juego”
. Botón de “Atacar” o “Saltar” en un videojuego
. Enviar formularios (login, registro)
. Abrir o cerrar menús
. Sumar puntos al hacer clic en un objeto