const express = require('express');
const router = express.Router();
const fs = require('fs');
var userData = fs.readFileSync('json/data.json', "utf8");
var data = JSON.parse(userData);
var userIds = new Set();

function getIds()
{
  for(let i = 0; i < data.Users.length; i++)
    userIds.add(data.Users[i].id);
}

router.get('/', (req, res) => {
	getIds();
  res.render('index', {ids:Array.from(userIds), users:data.Users});
});

router.get('/users/:idUser', (req, res) => {
  res.render('user', {userId:req.params.idUser, users:data.Users, ids:Array.from(userIds)});
});

module.exports = router;
