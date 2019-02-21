module.exports = {
  getLanding: (req, res) => {
    res.render('landing', { title: 'Landing' })
  }
}
