import { Router } from "express";
import { productController } from "../users/controller.js";

const productsRouter = Router();

productsRouter.get("/product/:id", productController.getById);
productsRouter.post("/product/:id", productController.postProduct);
productsRouter.put("/product/:id", productController.putProduct);
productsRouter.delete("/product/:id", productController.deleteProduct);

export { productsRouter };
