const FtpDeploy = require("ftp-deploy");

class AutoUploadPlugin {
  constructor(config) {
    this.ftpDeploy = new FtpDeploy();
    this.config = config;
  }
  apply(complier) {
    complier.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      (compilation, callback) => {
        const outputPath = compilation.outputOptions.path;
        this.config.localRoot = outputPath;
        console.log("uploading...");
        this.upload()
          .then((res) => {
            console.log("upload has finished", res, "upload successful");
            callback();
          })
          .catch((err) => {
            console.log("falied upload", err);
            callback();
          });
      }
    );
  }
  upload() {
    return new Promise((resolve, reject) => {
      this.ftpDeploy
        .deploy(this.config)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

module.exports = AutoUploadPlugin;
