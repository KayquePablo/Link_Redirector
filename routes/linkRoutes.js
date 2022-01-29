const express = require('express');
const router = express.Router();
var methodOverride = require('method-override');
const linkController = require('../controllers/linkController');


router.use(methodOverride('_method'));


router.get('/', linkController.allLinks); // Rota para buscar todos meus links.

router.get('/:title', linkController.redirect) //buscando o documento da coleção quando essa rota for atendida

router.get('/add', (req, res) => res.render('add', { error: false, body:{} }));

router.get('/:title', linkController.redirect);

router.get('/edit/:id', linkController.loadLink);



router.post('/', express.urlencoded({ extended: true }), linkController.addLink); // rota add novo link

router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink);



router.delete('/:id', linkController.deleteLink);

router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink);


module.exports = router