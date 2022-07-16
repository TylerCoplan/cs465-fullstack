const fs = require('fs');
const roomsList = JSON.parse(fs.readFileSync('./data/roomsList.json', 'utf8'));

/*GET homepage*/
const rooms = (req, res) => {
    res.render('rooms', {title : 'Travlr Getaways', roomsList});
};
module.exports = {
    rooms
};