import productServices from "../services/product.services.js";

class ProductValidator {

    async getProducts() {
        try {
          const products = await productServices.getAll();
          return products;
        } catch (error) {
          console.log(error.message);
        }
    }

    async getProduct(id) {
        try {
            if (!id) throw new Error("Id is required");

            const product = await productServices.getById(id);
            return product;
          } catch (error) {
            console.log(error.message);
          }
    }

    async createProduct(title, description, price, thumbnail, code, stock) {
        try {
            if (!title) throw new Error("Title is required");
            if (!description) throw new Error("Description is required");
            if (!price) throw new Error("Price is required");
            if (!thumbnail) throw new Error("Thumbnail is required");
            if (!code) throw new Error("Code is required");
            if (!stock) throw new Error("Stock is required");
    
            const product = await productServices.create(title, description, price, thumbnail, code, stock);
            return product;
        } catch (error) {
            return error;
        }
      }

    async updateProduct(id, title, description, price, thumbnail, code, stock) {
        try {
          if (!id) throw new Error("Id is required");
    
          const product = await productServices.update(id, title, description, price, thumbnail, code, stock);
          return product;
        } catch (error) {
          return error;
        }
    }


    async deleteProduct(id) {
        try {
          if (!id) throw new Error("Id is required");
    
          const product = await productServices.delete(id);
          return product;
        } catch (error) {
          return error;
        }
    }

}


export default new ProductValidator();