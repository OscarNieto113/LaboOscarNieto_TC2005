const path = require('path');
const Mistborn = require('../models/mistborn');
const Standalones = require('../models/standalones');
const Storm = require('../models/storm');
const Whitesand = require('../models/whitesand');

exports.get_mistborn = (request, response, next) => {
    console.log('GET /chunchunmaru/mistborn');
    response.render('mistborn', {nombre: 'Chunchunmaru'});
};

exports.post_mistborn = (request, response, next) => {
    console.log('POST /chunchunmaru/mistborn');
    console.log(request.body);
    const mistborn = new Mistborn(request.body.nombre);
    mistborn.save();
    response.redirect('/chunchunmaru');
};
//-------------------------------------------

exports.get_standalones = (request, response, next) => {
    console.log('GET /chunchunmaru/standalones');
    response.render('standalones', {nombre: 'Chunchunmaru'});
};

exports.post_standalones = (request, response, next) => {
    console.log('POST /chunchunmaru/standalones');
    console.log(request.body);
    const standalones = new Standalones(request.body.nombre);
    standalones.save();
    response.redirect('/chunchunmaru');
};

//---------------------------------------------

exports.get_storm = (request, response, next) => {
    console.log('GET /chunchunmaru/storm');
    response.render('storm', {nombre: 'Chunchunmaru'});
};

exports.post_storm = (request, response, next) => {
    console.log('POST /chunchunmaru/storm');
    console.log(request.body);
    const storm = new Storm(request.body.nombre);
    storm.save();
    response.redirect('/chunchunmaru');
};

//----------------------------------------------------

exports.get_whitesand = (request, response, next) => {
    console.log('GET /chunchunmaru/whitesand');
    response.render('whitesand', {nombre: 'Chunchunmaru'});
};

exports.post_whitesand = (request, response, next) => {
    console.log('POST /chunchunmaru/whitesand');
    console.log(request.body);
    const whitesand = new Whitesand(request.body.nombre);
    whitesand.save();
    response.redirect('/chunchunmaru');
};

//---------------------------------------------

exports.listar = (request, response, next) => {
    console.log('Ruta /chunchunmaru');
    response.render('lista', {mistborn: Mistborn.fetchAll(), standalones: Standalones.fetchAll(), storm: Storm.fetchAll(), whitesand: Whitesand.fetchAll()});
}
