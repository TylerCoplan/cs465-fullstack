const fs = require('fs');
const contactField = JSON.parse(fs.readFileSync('./data/contactFields.json', 'utf8'));

/*GET contact page*/
const contact = (req, res) => {
    res.render('contact', {title : 'Travlr Getaways', contactField});
};
module.exports = {
    contact
};