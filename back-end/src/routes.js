const express = require('express');
const {celebrate, Segments, Joi } = require('celebrate');
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileControler = require("./controllers/ProfileControler");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.post("/sessions", SessionController.create);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
}).unknown(),
}),ProfileControler.index);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;