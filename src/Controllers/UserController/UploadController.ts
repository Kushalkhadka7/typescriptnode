const fs = require("fs");
const path = require("path");
const filePath = path.join(__filename);

export class UploadController {
  private rF: any;

  public readingFile(): any {
    try {
      this.rF = fs.readFile("kushal.txt", "utf8", (error, data) => {
        if (error) {
          throw error;
        } else {
          return data;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
