class HomeControler {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeControler();
