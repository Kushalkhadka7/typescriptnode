import Server from './server';

export class App {
  private PORT = parseInt(process.env.PORT) || 5000;

  public startServer(): void {
    Server.connection(this.PORT);
  }
}

const startingService = new App().startServer();
