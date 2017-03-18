
// functionality for home route
module.exports = {
    showHome: function(req,res) {
      res.render('pages/home', { title: 'Dogify'});
    }
  };
