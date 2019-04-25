const AppDAO = require('../models/dao') 
const dao = new AppDAO('./src/database/database.sqlite3') 

const Kanban = require('../models/kanban');
const kanban = new Kanban(dao);

exports.kanbanList = function(req, res){
    kanban.getAll().then(
        ev => res.json(ev)
    )
}