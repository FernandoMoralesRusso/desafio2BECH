import * as fs from 'fs';

class ProductManager {

  constructor(path) {
    this.path = path;
    this.products = this.loadProducts();
    this.counter = this.products.length; // Contador de productos agregados
  }

  validateDataProduct = (product) => {
    let valid = true;
    Object.values(product).forEach((val) => {
      // Validacion de atributos
      if (val === null || val === undefined) {
        valid = false;
      }
    });

    return valid;
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = new Product(
      this.counter,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );

    if (this.validateDataProduct(product)) {
      const exist = this.products.filter((product) => product.code === code);
      if (exist.length === 0) {
        // Se agrega el producto
        this.products.push(product);
        this.counter++;
        console.log("Producto agregado.");
        this.saveFileJSON();
        return;
      }
      console.error("Product exists"); // No se agrega el producto por que ya existe
      return;
    }
    console.error("Todos los campos son requeridos.");
  };

  getProducts = () => {
    const result = fs.readFileSync(this.path, 'utf-8');
    return JSON.parse(result);
  };

  getProductById = (id) => {
    this.products = this.loadProducts();
    const idx = this.products.findIndex((product) => product.id === id);
    if (idx !== -1) {
      return this.products[idx];
    } else {
      return "Not found";
    }
  };

  updateProduct = (id, title, description, price, thumbnail, code, stock) => {
    const product = new Product(
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );
    
    if (this.validateDataProduct(product)) {
      const idx = this.products.findIndex((product) => product.id === id);
      if (idx !== -1 ) {
        const exist = this.products.filter((product) => product.code === code);
        if (this.products[idx].code !== product.code && exist.length > 0 ) {
          console.error("Code exists");
          return;
        }
        this.products[idx] = product;
        console.log("Producto actualizado.");
        this.saveFileJSON();
        return;
      }
      console.error("Product not found.");
      return;
    }
      console.error("Todos los campos son requeridos.");
  }

  deleteProduct = (id) => {
    const idx = this.products.findIndex((product) => product.id === id);
    if (idx !== -1 ) {
      this.products.splice(idx,1);
      console.log("Producto eliminado.");
      this.saveFileJSON();
      return;
    }
    console.error("Product not found.");
  }

  saveFileJSON = () => {
    fs.writeFileSync(this.path, JSON.stringify(this.products));
  }

  loadProducts = () => {
    if (fs.existsSync(this.path)) {
      const result = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(result);
    } else {
      fs.writeFileSync(this.path, "[]");
      return [];
    }
  }
}

class Product {
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

export default ProductManager;