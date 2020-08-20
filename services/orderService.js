const Order = require('../models/order');
const OrderState = require('../models/orderstate');

class OrderService {
    async onIllustrationCreated(illustration, userId) {
        try {
            const stateId = await OrderState.getIdByKey('not_sent');
            await Order.create({
                userId, stateId,
                illustrationId: illustration.id,
                sendDate: illustration.sendDate
            });
        } catch (error) {
            throw (error);
        }
    }
}

const orderService = new OrderService();
module.exports = orderService;