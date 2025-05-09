const { Router } = require("express");

// controllers
const getCategories = require("../controllers/categories/getCategories.controller");
const getCategoriesOptions = require("../controllers/categories_options/getCategoriesOptions.controller");
const postCategories = require("../controllers/categories/postCategories.controller");
const postCategoriesOptionsController = require("../controllers/categories_options/postCategoriesOptions.controller");
const deleteCategoriesOptionsController = require("../controllers/categories_options/deleteCategoriesOptions.controller");

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Obtener todas las categorías.
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: > 
 *           Obtiene un objeto con dos propiedades: count y data.
 *           count: contiene la cantidad de categorías registradas.
 *           data: contiene un array de objetos, cada objeto contiene una categoría y sus propiedades.  
 *       404:
 *         description: No hay registro de categorías.
 *       500:
 *         description: Error interno del servidor.
 */

categoriesRouter.get("/categories/options", getCategoriesOptions);
/**
 * @swagger
 * /categories/options:
 *   get:
 *     summary: Obtener todas las opciones.
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: > 
 *           Obtiene un array de objetos, cada objeto contiene una opción de categoría y sus propiedades.
 *       404:
 *         description: No hay datos en categories_options.
 *       500:
 *         description: Error interno del servidor.
 */

categoriesRouter.post("/categories", postCategories);
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Obtener todas las Caetgorias.
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Nombre de la categoria.
 *     responses:
 *       201:
 *         description: La categoría ha sido creada exitosamente.
 *       400:
 *         description: Petición incorrecta, los datos enviados no son válidos.
 *       500:
 *         description: Error interno del servidor.
 */

categoriesRouter.post("/categories/options", postCategoriesOptionsController);
/**
 * @swagger
 * /categories/options:
 *   post:
 *     summary: Crear una nueva opcion.
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idCategorie:
 *                 type: string
 *                 description: El id de la categoria a la que vayas asignar.
 *               description:
 *                 type: string
 *                 description: Nombre de la opcion.
 *     responses:
 *       201:
 *         description: La categoría ha sido creada exitosamente.
 *       400:
 *         description: Petición incorrecta, los datos enviados no son válidos.
 *       500:
 *         description: Error interno del servidor.
 */
categoriesRouter.delete("/categories/options", deleteCategoriesOptionsController);
/**
 * @swagger
 * /categories/options:
 *   delete:
 *     summary: Eliminar alguna opcion.
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idOption:
 *                 type: string
 *                 description: ID de la opcion.
 *     responses:
 *       201:
 *         description: La categoría ha sido eliminada exitosamente.
 *       400:
 *         description: Petición incorrecta, los datos enviados no son válidos.
 *       500:
 *         description: Error interno del servidor.
 */
module.exports = categoriesRouter;
