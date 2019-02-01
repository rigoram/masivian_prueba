

class Node
{
    constructor(value)
    {
        this.value = value
        this.right = null
        this.left = null
    }
}


class Tree
{
    constructor()
    {
        this.root = null
    }

    isEmpty()
    {
        return this.root === null
    }

    creaArbolJson(arbol)
    {
        this.root = arbol.root;
    }



    creaArbol(arr)
    {
        for (var i = 0; i < arr.length; i++) {
            this.add(arr[i])
        }
    }

    add(value)
    {
        // arbol no tiene elementos
        if (this.isEmpty()) {
            this.root = new Node(value);
            return;
        }

        var aux = this.root;

        while (aux) {
            // vamos hacia la izquierda
            if (value < aux.value) {
                if (aux.left) {
                    aux = aux.left;
                } else {
                    aux.left = new Node(value);
                    return;
                }
            }
            else { // vamos hacia la derecha
                if (aux.right) {
                    aux = aux.right;
                } else {
                    aux.right = new Node(value);
                    return;
                }
            }
        }
    }


    lowestCommonAncestor(root, val1, val2)
    {

        if (root.value > val1 && root.value > val2) {
            return this.lowestCommonAncestor(root.left, val1, val2);
        }
        else if (root.value < val1 && root.value < val2) {
            return this.lowestCommonAncestor(root.right, val1, val2);
        }
        else {
            return root;
        }
    }
}

module.exports = Tree;