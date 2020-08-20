const Illustration = require("../models/illustration");
const IllustrationState = require("../models/illustrationstate");
const emitter = require('../events/EventEmitter');

class IllustrationService {
    getAll() {
        return Illustration.findAll();
    }

    async create(params) {
        const date = new Date();
        date.setDate(date.getDate() + 3);

        try {
            const illustrationStateId = await IllustrationState.getIdByKey('not_started');
            const illustration = await Illustration.create({
                size: params.size,
                name: params.name,
                typeId: params.illustrationTypeId,
                stateId: illustrationStateId,
                sendDate: `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`
            });
            emitter.emit('illustrationCreated', illustration, params.userId);
            return illustration;
        } catch (error) {
            throw error;
        }
    }
}

const illustrationService = new IllustrationService();
module.exports = illustrationService;
