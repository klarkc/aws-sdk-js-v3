import { __extends } from "tslib";
import { ACMClient } from "./ACMClient";
import { AddTagsToCertificateCommand } from "./commands/AddTagsToCertificateCommand";
import { DeleteCertificateCommand } from "./commands/DeleteCertificateCommand";
import { DescribeCertificateCommand } from "./commands/DescribeCertificateCommand";
import { ExportCertificateCommand } from "./commands/ExportCertificateCommand";
import { GetAccountConfigurationCommand } from "./commands/GetAccountConfigurationCommand";
import { GetCertificateCommand } from "./commands/GetCertificateCommand";
import { ImportCertificateCommand } from "./commands/ImportCertificateCommand";
import { ListCertificatesCommand } from "./commands/ListCertificatesCommand";
import { ListTagsForCertificateCommand } from "./commands/ListTagsForCertificateCommand";
import { PutAccountConfigurationCommand } from "./commands/PutAccountConfigurationCommand";
import { RemoveTagsFromCertificateCommand } from "./commands/RemoveTagsFromCertificateCommand";
import { RenewCertificateCommand } from "./commands/RenewCertificateCommand";
import { RequestCertificateCommand } from "./commands/RequestCertificateCommand";
import { ResendValidationEmailCommand } from "./commands/ResendValidationEmailCommand";
import { UpdateCertificateOptionsCommand } from "./commands/UpdateCertificateOptionsCommand";
/**
 * <fullname>AWS Certificate Manager</fullname>
 *          <p>You can use AWS Certificate Manager (ACM) to manage SSL/TLS certificates for your AWS-based websites
 *       and applications. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p>
 */
var ACM = /** @class */ (function (_super) {
  __extends(ACM, _super);
  function ACM() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ACM.prototype.addTagsToCertificate = function (args, optionsOrCb, cb) {
    var command = new AddTagsToCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.deleteCertificate = function (args, optionsOrCb, cb) {
    var command = new DeleteCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.describeCertificate = function (args, optionsOrCb, cb) {
    var command = new DescribeCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.exportCertificate = function (args, optionsOrCb, cb) {
    var command = new ExportCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.getAccountConfiguration = function (args, optionsOrCb, cb) {
    var command = new GetAccountConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.getCertificate = function (args, optionsOrCb, cb) {
    var command = new GetCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.importCertificate = function (args, optionsOrCb, cb) {
    var command = new ImportCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.listCertificates = function (args, optionsOrCb, cb) {
    var command = new ListCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.listTagsForCertificate = function (args, optionsOrCb, cb) {
    var command = new ListTagsForCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.putAccountConfiguration = function (args, optionsOrCb, cb) {
    var command = new PutAccountConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.removeTagsFromCertificate = function (args, optionsOrCb, cb) {
    var command = new RemoveTagsFromCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.renewCertificate = function (args, optionsOrCb, cb) {
    var command = new RenewCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.requestCertificate = function (args, optionsOrCb, cb) {
    var command = new RequestCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.resendValidationEmail = function (args, optionsOrCb, cb) {
    var command = new ResendValidationEmailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ACM.prototype.updateCertificateOptions = function (args, optionsOrCb, cb) {
    var command = new UpdateCertificateOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return ACM;
})(ACMClient);
export { ACM };
//# sourceMappingURL=ACM.js.map
