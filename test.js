import ProductManager from "./ProductManager.js";

// Se creará una instancia de la clase “ProductManager”
const manager = new ProductManager('./products.json');
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log("--------Lista de Productos--------");
console.log(manager.getProducts());
console.log("----------------------------------");
// Se llamará al método “addProduct” con los campos:
manager.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen", "abc123", 25);
manager.addProduct("producto prueba 2", "Este es un producto prueba 2", 600, "Sin imagen", "abc125", 44);
manager.addProduct("producto prueba 3", "Este es un producto prueba 3", 100, "Sin imagen", "abc456", 66);
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
//
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("--------Lista de Productos--------");
console.log(manager.getProducts());
console.log("----------------------------------");
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
// Caso Existente
console.log("--------Buscando Producto--------");
console.log(manager.getProductById(0));
console.log("----------------------------------");
// Caso no Existente
console.log("--------Buscando Producto--------");
console.log(manager.getProductById(3));
console.log("----------------------------------");
// Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
//Caso Exitoso
console.log("--------Actualizando Producto--------");
manager.updateProduct(0,"producto prueba 1", "Este es un producto prueba 1", 500, "Sin imagen", "abc123", 50);
console.log("-------------------------------------");
// Caso Codigo repetido
console.log("--------Actualizando Producto--------");
manager.updateProduct(2,"producto fallido 1", "Este es un producto fallido 1", 666, "Sin imagen", "abc123", 88);
console.log("-------------------------------------");
// Actualizacion de producto
console.log("--------Lista de Productos--------");
console.log(manager.getProducts());
console.log("----------------------------------");
// Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
// Caso No Existente
console.log("--------Eliminando Producto--------");
manager.deleteProduct(4);
console.log("-----------------------------------");
// Caso Existente
console.log("--------Eliminando Producto--------");
manager.deleteProduct(0);
console.log("-----------------------------------");