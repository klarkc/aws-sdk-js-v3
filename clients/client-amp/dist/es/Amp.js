import { __extends } from "tslib";
import { AmpClient } from "./AmpClient";
import { CreateWorkspaceCommand } from "./commands/CreateWorkspaceCommand";
import { DeleteWorkspaceCommand } from "./commands/DeleteWorkspaceCommand";
import { DescribeWorkspaceCommand } from "./commands/DescribeWorkspaceCommand";
import { ListWorkspacesCommand } from "./commands/ListWorkspacesCommand";
import { UpdateWorkspaceAliasCommand } from "./commands/UpdateWorkspaceAliasCommand";
/**
 * Amazon Managed Service for Prometheus
 */
var Amp = /** @class */ (function (_super) {
  __extends(Amp, _super);
  function Amp() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Amp.prototype.createWorkspace = function (args, optionsOrCb, cb) {
    var command = new CreateWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Amp.prototype.deleteWorkspace = function (args, optionsOrCb, cb) {
    var command = new DeleteWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Amp.prototype.describeWorkspace = function (args, optionsOrCb, cb) {
    var command = new DescribeWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Amp.prototype.listWorkspaces = function (args, optionsOrCb, cb) {
    var command = new ListWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Amp.prototype.updateWorkspaceAlias = function (args, optionsOrCb, cb) {
    var command = new UpdateWorkspaceAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return Amp;
})(AmpClient);
export { Amp };
//# sourceMappingURL=Amp.js.map
