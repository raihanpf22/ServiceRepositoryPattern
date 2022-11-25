const productRepository = require("../repositories/productRepository");

class ProductService {
  static async list(){
    console.log("Masuk ini")
    try{
      const findAll = await productRepository.list()

      if(!findAll){
        return {
          status_code:404,
          message:"Data Tidak Ditemukan"
        }
      }else{
        return {
          status_code:200,
          message:findAll
        }
      }
    }catch(error){
      return {
        status_code:400,
        message: error.message
      }
    }
  }
}

module.exports = ProductService