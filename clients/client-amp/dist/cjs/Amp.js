"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amp = void 0;
const AmpClient_1 = require("./AmpClient");
const CreateWorkspaceCommand_1 = require("./commands/CreateWorkspaceCommand");
const DeleteWorkspaceCommand_1 = require("./commands/DeleteWorkspaceCommand");
const DescribeWorkspaceCommand_1 = require("./commands/DescribeWorkspaceCommand");
const ListWorkspacesCommand_1 = require("./commands/ListWorkspacesCommand");
const UpdateWorkspaceAliasCommand_1 = require("./commands/UpdateWorkspaceAliasCommand");
/**
 * Amazon Managed Service for Prometheus
 */
class Amp extends AmpClient_1.AmpClient {
  createWorkspace(args, optionsOrCb, cb) {
    const command = new CreateWorkspaceCommand_1.CreateWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteWorkspace(args, optionsOrCb, cb) {
    const command = new DeleteWorkspaceCommand_1.DeleteWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeWorkspace(args, optionsOrCb, cb) {
    const command = new DescribeWorkspaceCommand_1.DescribeWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listWorkspaces(args, optionsOrCb, cb) {
    const command = new ListWorkspacesCommand_1.ListWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateWorkspaceAlias(args, optionsOrCb, cb) {
    const command = new UpdateWorkspaceAliasCommand_1.UpdateWorkspaceAliasCommand(args);
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
exports.Amp = Amp;
//# sourceMappingURL=Amp.js.map
