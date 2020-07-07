class DashboardController {
  index(req, res) {
    return res.send('Dashboard');
  }
}

export default new DashboardController();
