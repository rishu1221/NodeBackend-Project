const { StatusCodes } = require("http-status-codes");
const { logger } = require("../config");
const AppError = require("../utils/errors/app-error");
const { error } = require("../utils/common/success-response");

class CrudRepository{
    constructor(model){
        this.model = model
    } 

    async create(data){
        
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data){
        
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            });
            if(response == 0){
                throw new AppError("ID is not found",StatusCodes.NOT_FOUND);
            }
            return response;
    }

    async get(data){
      
            const response = await  this.model.findByPk(data);
            if(!response){
                throw new AppError("Data is not found",StatusCodes.NOT_FOUND);
            }
            return response;
    }

    async getAll(){
       
            const response =await  this.model.findAll();
            return response;
    }

    async update(id,data){
            const response =await this.model.update(data,{
                where : {
                    id : id
                }
            })
            return response;
       
    }
}

module.exports = CrudRepository;