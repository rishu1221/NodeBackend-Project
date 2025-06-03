const { logger } = require("../config")

class CrudRepository{
    constructor(model){
        this.model = model
    } 

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            logger.error('something went wrong in creation');
            throw error;
        }
    }

    async destroy(data){
        try {
            const repsonse = await this.model.destroy({
                where : {
                    id : data
                }
            });
        } catch (error) {
            logger.error('Something went wrong while deleting');
            throw error;
        }
    }

    async get(data){
        try {
            const response =await  this.model.findByPk(data);
            return response;
        } catch (error) {
            logger.error("Something went wrong during fetch");
            throw error;
        }
    }

    async getAll(){
        try {
            const response =await  this.model.findAll();
            return response;
        } catch (error) {
            logger.error("Something went wrong during fetch All");
            throw error;
        }
    }

    async update(id,data){
        try {
            const response =await this.model.update(data,{
                where : {
                    id : id
                }
            })
            return response;
        } catch (error) {
            logger.error("Something went wrong during Update");
            throw error;
        }
    }
}

module.exports = CrudRepository;