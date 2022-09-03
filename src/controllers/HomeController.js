class HomeControler {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeControler();
