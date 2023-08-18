import ServiceProducts from "../services/products.service.js";
import CustomError from "../error/customError.js";
import { customErrorMsg } from "../error/customErrorMessage.js";
import EErros from "../error/enum.js";
const serviceProducts = new ServiceProducts();
class ProductsController{
    async getAll(req, res)  {
        try {
            const { limit, page, sort, query } = req.query;
            const products = await serviceProducts.getAllProducts(limit, page, sort, query);
            return res.status(200).json({
                status: 'success',
                msg: 'Products retrieved',
                payload: products,
            });
        }  catch (err) {
            res.status(500).json({ Error: `${err}` });
        }};
    async getbyId (req, res) {
    try {
        const productId = req.params.id;
        const product = await serviceProducts.getProductById(productId);
        if (!product) {
            return res.status(404).json({
            status: 'error',
            msg: 'Product not found',
        })}
        return res.status(200).json({
            status: 'success',
            msg: 'Product retrieved',
            payload: product,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            status: 'error',
            msg: error.message,
        });
    }};
    async createOne(req, res) {
    try {
        const productData = req.body;
        const createdProduct = await serviceProducts.createProduct(productData);
        return res.status(201).json({
            status: 'success',
            msg: 'Product created',
            payload: createdProduct,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            status: 'error',
            msg: error.message,
        });
    }
    };
    async updateOne (req, res) {
    try {
        const productId = req.params.id;
        const productData = req.body;
        const updatedProduct = await serviceProducts.updateProduct(productId, productData);
        if (!updatedProduct) {
            return res.status(404).json({
                status: 'error',
                msg: 'Product not found',
            });
        }
        return res.status(200).json({
            status: 'success',
            msg: 'Product updated',
            payload: updatedProduct,
        });
    } catch (err) {
        res.status(500).json({ Error: `${err}` });
    }
    };
    async deletOne  (req, res)  {
        try {
            const productId = req.params.id;
            const deletedProduct = await serviceProducts.deleteProduct(productId);
            if (!deletedProduct) {
                return res.status(404).json({
                    status: 'error',
                    msg: 'Product not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                msg: 'Product deleted',
                payload: deletedProduct,
            });
        }  catch (err) {
            res.status(500).json({ Error: `${err}` });
        }};
}
export const productsController = new ProductsController(); 