# masivian_prueba

La solución es una aplicación Node.js
 Se ejecuta en un servidor Node.js a través del puerto 1337
 En el archivo Server se encuentran creados 2 endpoints, el primero se llama arbol y el segundo se llama ancestro
 para ejecutarlo y ver los resultados de cada uno de ellos se deben invocar a través de una URL en un explorador web.
 En el archivo btree.js se encuentra la lógica de construcción del árbol binario y la búsqueda del ancestro común más bajo
Endpoint 1 arbol suponiendo que el servidor node.js está en una maquina local, se debe enviar como parámetro los números que se desean agregar al árbol separados por comas (,) como se muestra a continuación:
 
http://localhost:1337/arbol?valores=67,39,76,28,44,74,85,29,83,87

Este método crea el árbol binario y devuelve el mismo codificado en JSON con formato de querystring, para el caso ejemplo devuelve:

tree=%7B%22root%22%3A%7B%22value%22%3A%2267%22%2C%22right%22%3A%7B%22value%22%3A%2276%22%2C%22right%22%3A%7B%22value%22%3A%2285%22%2C%22right%22%3A%7B%22value%22%3A%2287%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2283%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2274%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2239%22%2C%22right%22%3A%7B%22value%22%3A%2244%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2228%22%2C%22right%22%3A%7B%22value%22%3A%2229%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3Anull%7D%7D%7D%7D

 luego este es el parámetro que enviaremos en la URL para invocar el endpoint ancestro


Endpoint 2 ancestro suponiendo que el servidor node.js está en una maquina local, se debe enviar como parámetro el árbol (tree) los valores a buscar (val1) y (val2), como se muestra a continuación:

http://localhost:1337/ancestro?tree=%7B%22root%22%3A%7B%22value%22%3A%2267%22%2C%22right%22%3A%7B%22value%22%3A%2276%22%2C%22right%22%3A%7B%22value%22%3A%2285%22%2C%22right%22%3A%7B%22value%22%3A%2287%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2283%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2274%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2239%22%2C%22right%22%3A%7B%22value%22%3A%2244%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2228%22%2C%22right%22%3A%7B%22value%22%3A%2229%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3Anull%7D%7D%7D%7D&val1=29&val2=44

este método carga el árbol pasando el querystring a formato JSON y luego asignándolo al árbol, y posteriormente se realiza la búsqueda del ancestro común más cercano, y su retorno para legibilidad del usuario es el siguiente:

El ancestro común para los valores 29 y 44 es 39

 

