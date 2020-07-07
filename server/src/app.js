import AdminBro from 'admin-bro';
import AdminBroExpressjs from 'admin-bro-expressjs';
import AdminBroMongoose from 'admin-bro-mongoose';
import express from 'express';
import formidableMiddleware from 'express-formidable';
import adminBroConfig from './config/adminbro';
import routes from './routes';
import('./database');

class App {
  constructor() {
    this.server = express();
    this.adminBro();
    this.middlewares();
    this.routes();
  }

  adminBro() {
    AdminBro.registerAdapter(AdminBroMongoose);
    this.adminBro = new AdminBro(adminBroConfig);
  }

  middlewares() {
    this.server.use(formidableMiddleware());
    this.server.use(
      this.adminBro.options.rootPath,
      AdminBroExpressjs.buildRouter(this.adminBro)
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
