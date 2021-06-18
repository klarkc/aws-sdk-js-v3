import { __extends } from "tslib";
import { AmplifyBackendClient } from "./AmplifyBackendClient";
import { CloneBackendCommand } from "./commands/CloneBackendCommand";
import { CreateBackendAPICommand } from "./commands/CreateBackendAPICommand";
import { CreateBackendAuthCommand } from "./commands/CreateBackendAuthCommand";
import { CreateBackendCommand } from "./commands/CreateBackendCommand";
import { CreateBackendConfigCommand } from "./commands/CreateBackendConfigCommand";
import { CreateTokenCommand } from "./commands/CreateTokenCommand";
import { DeleteBackendAPICommand } from "./commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommand } from "./commands/DeleteBackendAuthCommand";
import { DeleteBackendCommand } from "./commands/DeleteBackendCommand";
import { DeleteTokenCommand } from "./commands/DeleteTokenCommand";
import { GenerateBackendAPIModelsCommand } from "./commands/GenerateBackendAPIModelsCommand";
import { GetBackendAPICommand } from "./commands/GetBackendAPICommand";
import { GetBackendAPIModelsCommand } from "./commands/GetBackendAPIModelsCommand";
import { GetBackendAuthCommand } from "./commands/GetBackendAuthCommand";
import { GetBackendCommand } from "./commands/GetBackendCommand";
import { GetBackendJobCommand } from "./commands/GetBackendJobCommand";
import { GetTokenCommand } from "./commands/GetTokenCommand";
import { ListBackendJobsCommand } from "./commands/ListBackendJobsCommand";
import { RemoveAllBackendsCommand } from "./commands/RemoveAllBackendsCommand";
import { RemoveBackendConfigCommand } from "./commands/RemoveBackendConfigCommand";
import { UpdateBackendAPICommand } from "./commands/UpdateBackendAPICommand";
import { UpdateBackendAuthCommand } from "./commands/UpdateBackendAuthCommand";
import { UpdateBackendConfigCommand } from "./commands/UpdateBackendConfigCommand";
import { UpdateBackendJobCommand } from "./commands/UpdateBackendJobCommand";
/**
 * <p>AWS Amplify Admin API</p>
 */
var AmplifyBackend = /** @class */ (function (_super) {
  __extends(AmplifyBackend, _super);
  function AmplifyBackend() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AmplifyBackend.prototype.cloneBackend = function (args, optionsOrCb, cb) {
    var command = new CloneBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.createBackend = function (args, optionsOrCb, cb) {
    var command = new CreateBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.createBackendAPI = function (args, optionsOrCb, cb) {
    var command = new CreateBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.createBackendAuth = function (args, optionsOrCb, cb) {
    var command = new CreateBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.createBackendConfig = function (args, optionsOrCb, cb) {
    var command = new CreateBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.createToken = function (args, optionsOrCb, cb) {
    var command = new CreateTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.deleteBackend = function (args, optionsOrCb, cb) {
    var command = new DeleteBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.deleteBackendAPI = function (args, optionsOrCb, cb) {
    var command = new DeleteBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.deleteBackendAuth = function (args, optionsOrCb, cb) {
    var command = new DeleteBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.deleteToken = function (args, optionsOrCb, cb) {
    var command = new DeleteTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.generateBackendAPIModels = function (args, optionsOrCb, cb) {
    var command = new GenerateBackendAPIModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getBackend = function (args, optionsOrCb, cb) {
    var command = new GetBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getBackendAPI = function (args, optionsOrCb, cb) {
    var command = new GetBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getBackendAPIModels = function (args, optionsOrCb, cb) {
    var command = new GetBackendAPIModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getBackendAuth = function (args, optionsOrCb, cb) {
    var command = new GetBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getBackendJob = function (args, optionsOrCb, cb) {
    var command = new GetBackendJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.getToken = function (args, optionsOrCb, cb) {
    var command = new GetTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.listBackendJobs = function (args, optionsOrCb, cb) {
    var command = new ListBackendJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.removeAllBackends = function (args, optionsOrCb, cb) {
    var command = new RemoveAllBackendsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.removeBackendConfig = function (args, optionsOrCb, cb) {
    var command = new RemoveBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.updateBackendAPI = function (args, optionsOrCb, cb) {
    var command = new UpdateBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.updateBackendAuth = function (args, optionsOrCb, cb) {
    var command = new UpdateBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.updateBackendConfig = function (args, optionsOrCb, cb) {
    var command = new UpdateBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AmplifyBackend.prototype.updateBackendJob = function (args, optionsOrCb, cb) {
    var command = new UpdateBackendJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AmplifyBackend;
})(AmplifyBackendClient);
export { AmplifyBackend };
//# sourceMappingURL=AmplifyBackend.js.map
