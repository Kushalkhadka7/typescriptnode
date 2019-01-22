import * as express from 'express';
import * as bodyParser from 'body-parser';
import { HttpServer } from './serverInterface';
import DatabaseConfig from './Database/Database';
import UserRoutes from './Routes/UserRoutes/UserRoutes';
import { UploadController } from './Controllers/UserController/UploadController';

class Server implements HttpServer {
  private readonly app: express.Application;
  private userRoute: UserRoutes = new UserRoutes();
  private rF: UploadController = new UploadController();
  private db_config: DatabaseConfig = new DatabaseConfig();

  public constructor() {
    this.db_config.mongoSetup();
    this.app = express();
    this.middlewareConfig();
    this.userRoute.userRoutes(this.app);
    this.rF.readingFile();
  }

  private middlewareConfig(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  public connection(port: number): void {
    this.app.listen(port, () => console.log(`listening to port ${port}`));
  }
}
export default new Server();
