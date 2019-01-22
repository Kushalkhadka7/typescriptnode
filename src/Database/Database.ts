import * as mongoose from 'mongoose';

class DatabaseConfig {
  private DB_CONNECTION: string = 'mongodb://localhost:27017/test';

  public mongoSetup(): void {
    mongoose
      .connect(
        this.DB_CONNECTION,
        { useNewUrlParser: true }
      )
      .then(data => console.log('database connected'))
      .catch(error => console.log('error' + error));
  }
}
export default DatabaseConfig;
