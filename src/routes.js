const express = require('express');
const recognitionController = require('./controller')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const routes = express.Router();

routes.get('/',upload.single('image'),recognitionController.recognize)
routes.get('/url', recognitionController.pathRecognition);

module.exports = routes;