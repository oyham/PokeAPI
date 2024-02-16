### Tendrá que crear una web mostrando los datos de la pokeAPI preferentemente con React y CSS de lo contrario tendrá que escoger las librerías o framework para crear la web.

Podrá añadir las características que quiera siempre y cunado se entregue el repositorio y la web, desplegada en tiempo y forma.

#### Requisitos:

- Mostrar 20 Pokémons
- Botón para cargar +20 Pokémons
- Al menos 2 filtros de activación única o de acumulativos filtros:
  - Nombre
  - Tipo
- Añadir funcionalidades extras ( opcional )

---

Bugs a solucionar:

- Al seleccionar Veneno, muestra 6 resultados de los primeros 50 pokemons. Luego al seleccionar Planta, carga los primeros 3 pokemons ya que estos 3 comparten en tipo Veneno Planta (grass poison), y en pantalla se muestran 9 pokemons, los primeros 3 se repiten luego del 6to pokemon. El error en consola es el siguiente:

```js
VM1252:1  Warning: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
```

- Al seleccionar Planta, muestra los 3 primeros pokemons, a pesar de tener más tipos plantas dentro de los 50 pokemons que cargan inicialmente.
