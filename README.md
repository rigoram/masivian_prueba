# masivian_prueba
# La solucion es una aplicacion Node.js
# Se ejecuta a traves de un servidor Node.js a traves del puerto 1337
# En el archivo Server se encuentran creados 2 endpoints, el primero se llama arbol y el segundo se llama ancestro
# para ejecutarlo y ver los rtesultados de cada uno de ellos se deben invocara traves de una URL en un explorador web.
# En el archivo btree.js se encuentra la logica de construccion del arbol binario y la busqueda del ancestro comun mas bajo



# endpoint 1 arbol suponiendo que el servidor node.js esta en una maquina local, se debe enviar como parametro los numeros que se desean
# agregar al arbol separados por comas (,) como se muestra a continuacion:
http://localhost:1337/arbol?valores=67,39,76,28,44,74,85,29,83,87
# este metodo crea el arbol binario y devuelve el mismo codificado en JSON con formato de querystring, para el caso ejemplo devuelve:

tree=%7B%22root%22%3A%7B%22value%22%3A%2267%22%2C%22right%22%3A%7B%22value%22%3A%2276%22%2C%22right%22%3A%7B%22value%22%3A%2285%22%2C%22right%22%3A%7B%22value%22%3A%2287%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2283%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2274%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2239%22%2C%22right%22%3A%7B%22value%22%3A%2244%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2228%22%2C%22right%22%3A%7B%22value%22%3A%2229%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3Anull%7D%7D%7D%7D

# luego este es el parametro que enviaremos en la URL para invocar el endpoint ancestro


# ebdpoint 2 ancestro suponiendo que el servidor node.js esta en una maquina local, se debe enviar como parametro el arbol (tree) los valores a buscar (val1) y (val2), como se muestra a continuacion:

http://localhost:1337/ancestro?tree=%7B%22root%22%3A%7B%22value%22%3A%2267%22%2C%22right%22%3A%7B%22value%22%3A%2276%22%2C%22right%22%3A%7B%22value%22%3A%2285%22%2C%22right%22%3A%7B%22value%22%3A%2287%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2283%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2274%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%7D%2C%22left%22%3A%7B%22value%22%3A%2239%22%2C%22right%22%3A%7B%22value%22%3A%2244%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3A%7B%22value%22%3A%2228%22%2C%22right%22%3A%7B%22value%22%3A%2229%22%2C%22right%22%3Anull%2C%22left%22%3Anull%7D%2C%22left%22%3Anull%7D%7D%7D%7D&val1=29&val2=44

# este metodo carga el arbol pasando el querystring a formato JSON y luego asignandolo al arbol, y posteriormente se realiza la busqueda del ancestro comun mas cercano, y su retorno para legibilidad del usuario es el siguiente:

El ancestro comun para los valores 29 y 44 es 39

