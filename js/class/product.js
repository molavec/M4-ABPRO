/**
 * Clase que representa un producto
 * @constructor
 * @param {number} id - El id único del producto
 * @param {string} name - El nombre del producto
 * @param {number} price - El precio del producto
 * @param {string} image - La ruta de la imagen del producto
 * @param {string} description - La descripción del producto
 * @param {number} stock - La cantidad disponible del producto
 */
var Product = function(id, name, price, image, description, stock) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.image = image;
  this.description = description;
  this.stock = stock;
};

/**
 * Getter para el id
 * @return {number} id
 */
Product.prototype.getId = function() {
  return this.id;
};

/**
 * Setter para el id
 * @param {number} id
 */
Product.prototype.setId = function(id) {
  this.id = id;
};

/**
 * Getter para el nombre
 * @return {string} name
 */
Product.prototype.getName = function() {
  return this.name;
};

/**
 * Setter para el nombre
 * @param {string} name
 */
Product.prototype.setName = function(name) {
  this.name = name;
};

/**
 * Getter para el precio
 * @return {number} price
 */
Product.prototype.getPrice = function() {
  return this.price;
};

/**
 * Setter para el precio
 * @param {number} price
 */
Product.prototype.setPrice = function(price) {
  this.price = price;
};

/**
 * Getter para la imagen
 * @return {string} image
 */
Product.prototype.getImage = function() {
  return this.image;
};

/**
 * Setter para la imagen
 * @param {string} image
 */
Product.prototype.setImage = function(image) {
  this.image = image;
};

/**
 * Getter para la descripción
 * @return {string} description
 */
Product.prototype.getDescription = function() {
  return this.description;
};

/**
 * Setter para la descripción
 * @param {string} description
 */
Product.prototype.setDescription = function(description) {
  this.description = description;
};

/**
 * Getter para el stock
 * @return {number} stock
 */
Product.prototype.getStock = function() {
  return this.stock;
};

/**
 * Setter para el stock
 * @param {number} stock
 */
Product.prototype.setStock = function(stock) {
  this.stock = stock;
};

export default Product;