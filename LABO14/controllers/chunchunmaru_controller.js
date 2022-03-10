const path = require('path');
const Mistborn = require('../models/mistborn');
const Standalones = require('../models/standalones');
const Storm = require('../models/storm');
const Whitesand = require('../models/whitesand');

exports.get_mistborn = (request, response, next) => {
    console.log('GET /chunchunmaru/mistborn');
    response.render('mistborn', {
      //
        username: request.session.username ? request.session.username : '',
        info: ''
    });
};
//

exports.post_mistborn = (request, response, next) => {
    console.log('POST /chunchunmaru/mistborn');
    console.log(request.body);
    const mistborn = new Mistborn(request.body.nombre);
    mistborn.save();
    //
    request.session.info = mistborn.nombre + ' fue agregado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_mistborn='+mistborn.nombre+'; HttpOnly');
    response.redirect('/chunchunmaru');
};
//
//-------------------------------------------

exports.get_standalones = (request, response, next) => {
    console.log('GET /chunchunmaru/standalones');
    response.render('standalones', {
    //
    username: request.session.username ? request.session.username : '',
    info: ''
  });
};
//

exports.post_standalones = (request, response, next) => {
    console.log('POST /chunchunmaru/standalones');
    console.log(request.body);
    const standalones = new Standalones(request.body.nombre);
    standalones.save();
    //
    request.session.info = standalones.nombre + ' fue agregado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_standalones='+standalones.nombre+'; HttpOnly');
    response.redirect('/chunchunmaru');
};
//

//---------------------------------------------

exports.get_storm = (request, response, next) => {
    console.log('GET /chunchunmaru/storm');
    response.render('storm', {
    //
      username: request.session.username ? request.session.username : '',
      info: ''
  });
};
//

exports.post_storm = (request, response, next) => {
    console.log('POST /chunchunmaru/storm');
    console.log(request.body);
    const storm = new Storm(request.body.nombre);
    storm.save();
    //
    request.session.info = storm.nombre + ' fue agregado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_storm='+storm.nombre+'; HttpOnly');
    response.redirect('/chunchunmaru');
};
//

//----------------------------------------------------

exports.get_whitesand = (request, response, next) => {
    console.log('GET /chunchunmaru/whitesand');
    response.render('whitesand', {
    //
      username: request.session.username ? request.session.username : '',
      info: ''
  });
};
//

exports.post_whitesand = (request, response, next) => {
    console.log('POST /chunchunmaru/whitesand');
    console.log(request.body);
    const whitesand = new Whitesand(request.body.nombre);
    whitesand.save();
    //
    request.session.info = whitesand.nombre + ' fue agregado con éxito';
    response.setHeader('Set-Cookie', 'ultimo_whitesand='+whitesand.nombre+'; HttpOnly');
    response.redirect('/chunchunmaru');
};
//

//---------------------------------------------

exports.listar = (request, response, next) => {
    console.log('Ruta /chunchunmaru');
    //console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    const info = request.session.info ? request.session.info : '';
    request.session.info = '';
    response.render('lista', {
      mistborn: Mistborn.fetchAll(),
      standalones: Standalones.fetchAll(),
      storm: Storm.fetchAll(),
      whitesand: Whitesand.fetchAll(),
      username: request.session.username ? request.session.username : '',
      ultimo_mistborn: request.cookies.ultimo_mistborn ? request.cookies.ultimo_mistborn : '',
      ultimo_standalones: request.cookies.ultimo_standalones ? request.cookies.ultimo_standalones : '',
      ultimo_storm: request.cookies.ultimo_storm ? request.cookies.ultimo_storm : '',
      ultimo_whitesand: request.cookies.ultimo_whitesand ? request.cookies.ultimo_whitesand : '',
      info: info //El primer info es la variable del template, el segundo la constante creada arriba
  });
}
