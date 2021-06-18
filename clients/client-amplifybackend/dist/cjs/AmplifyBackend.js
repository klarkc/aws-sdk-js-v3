"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyBackend = void 0;
const AmplifyBackendClient_1 = require("./AmplifyBackendClient");
const CloneBackendCommand_1 = require("./commands/CloneBackendCommand");
const CreateBackendAPICommand_1 = require("./commands/CreateBackendAPICommand");
const CreateBackendAuthCommand_1 = require("./commands/CreateBackendAuthCommand");
const CreateBackendCommand_1 = require("./commands/CreateBackendCommand");
const CreateBackendConfigCommand_1 = require("./commands/CreateBackendConfigCommand");
const CreateTokenCommand_1 = require("./commands/CreateTokenCommand");
const DeleteBackendAPICommand_1 = require("./commands/DeleteBackendAPICommand");
const DeleteBackendAuthCommand_1 = require("./commands/DeleteBackendAuthCommand");
const DeleteBackendCommand_1 = require("./commands/DeleteBackendCommand");
const DeleteTokenCommand_1 = require("./commands/DeleteTokenCommand");
const GenerateBackendAPIModelsCommand_1 = require("./commands/GenerateBackendAPIModelsCommand");
const GetBackendAPICommand_1 = require("./commands/GetBackendAPICommand");
const GetBackendAPIModelsCommand_1 = require("./commands/GetBackendAPIModelsCommand");
const GetBackendAuthCommand_1 = require("./commands/GetBackendAuthCommand");
const GetBackendCommand_1 = require("./commands/GetBackendCommand");
const GetBackendJobCommand_1 = require("./commands/GetBackendJobCommand");
const GetTokenCommand_1 = require("./commands/GetTokenCommand");
const ListBackendJobsCommand_1 = require("./commands/ListBackendJobsCommand");
const RemoveAllBackendsCommand_1 = require("./commands/RemoveAllBackendsCommand");
const RemoveBackendConfigCommand_1 = require("./commands/RemoveBackendConfigCommand");
const UpdateBackendAPICommand_1 = require("./commands/UpdateBackendAPICommand");
const UpdateBackendAuthCommand_1 = require("./commands/UpdateBackendAuthCommand");
const UpdateBackendConfigCommand_1 = require("./commands/UpdateBackendConfigCommand");
const UpdateBackendJobCommand_1 = require("./commands/UpdateBackendJobCommand");
/**
 * <p>AWS Amplify Admin API</p>
 */
class AmplifyBackend extends AmplifyBackendClient_1.AmplifyBackendClient {
  cloneBackend(args, optionsOrCb, cb) {
    const command = new CloneBackendCommand_1.CloneBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackend(args, optionsOrCb, cb) {
    const command = new CreateBackendCommand_1.CreateBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackendAPI(args, optionsOrCb, cb) {
    const command = new CreateBackendAPICommand_1.CreateBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackendAuth(args, optionsOrCb, cb) {
    const command = new CreateBackendAuthCommand_1.CreateBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackendConfig(args, optionsOrCb, cb) {
    const command = new CreateBackendConfigCommand_1.CreateBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createToken(args, optionsOrCb, cb) {
    const command = new CreateTokenCommand_1.CreateTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackend(args, optionsOrCb, cb) {
    const command = new DeleteBackendCommand_1.DeleteBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackendAPI(args, optionsOrCb, cb) {
    const command = new DeleteBackendAPICommand_1.DeleteBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackendAuth(args, optionsOrCb, cb) {
    const command = new DeleteBackendAuthCommand_1.DeleteBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteToken(args, optionsOrCb, cb) {
    const command = new DeleteTokenCommand_1.DeleteTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  generateBackendAPIModels(args, optionsOrCb, cb) {
    const command = new GenerateBackendAPIModelsCommand_1.GenerateBackendAPIModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackend(args, optionsOrCb, cb) {
    const command = new GetBackendCommand_1.GetBackendCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackendAPI(args, optionsOrCb, cb) {
    const command = new GetBackendAPICommand_1.GetBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackendAPIModels(args, optionsOrCb, cb) {
    const command = new GetBackendAPIModelsCommand_1.GetBackendAPIModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackendAuth(args, optionsOrCb, cb) {
    const command = new GetBackendAuthCommand_1.GetBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackendJob(args, optionsOrCb, cb) {
    const command = new GetBackendJobCommand_1.GetBackendJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getToken(args, optionsOrCb, cb) {
    const command = new GetTokenCommand_1.GetTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackendJobs(args, optionsOrCb, cb) {
    const command = new ListBackendJobsCommand_1.ListBackendJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  removeAllBackends(args, optionsOrCb, cb) {
    const command = new RemoveAllBackendsCommand_1.RemoveAllBackendsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  removeBackendConfig(args, optionsOrCb, cb) {
    const command = new RemoveBackendConfigCommand_1.RemoveBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBackendAPI(args, optionsOrCb, cb) {
    const command = new UpdateBackendAPICommand_1.UpdateBackendAPICommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBackendAuth(args, optionsOrCb, cb) {
    const command = new UpdateBackendAuthCommand_1.UpdateBackendAuthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBackendConfig(args, optionsOrCb, cb) {
    const command = new UpdateBackendConfigCommand_1.UpdateBackendConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBackendJob(args, optionsOrCb, cb) {
    const command = new UpdateBackendJobCommand_1.UpdateBackendJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.AmplifyBackend = AmplifyBackend;
//# sourceMappingURL=AmplifyBackend.js.map
