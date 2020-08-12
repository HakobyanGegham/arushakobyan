const Price = require('../models/price');

class PriceService {
    async create(params) {
        try {
            return await Price.create({
                amount: params.amount,
                illustrationTypeId: params.illustrationTypeId,
                interval: params.interval
            });
        } catch (error) {
            throw error;
        }
    }

    async get(id) {
        try {
            return await Price.findOne({
                where: {id}
            })
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            return await Price.findAll();
        } catch (error) {
            throw error;
        }
    }

    async update(id, params) {
        try {
            return await Price.update({
                amount: params.amount,
                illustrationTypeId: params.illustrationTypeId,
                interval: params.interval
            }, {
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            return await Price.destroy({
                where: {id}
            })
        } catch (error) {
            throw error;
        }
    }
}

const priceService = new PriceService();
module.exports = priceService;