import { __extends } from "tslib";
import { CloudHSMV2Client } from "./CloudHSMV2Client";
import { CopyBackupToRegionCommand } from "./commands/CopyBackupToRegionCommand";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateHsmCommand } from "./commands/CreateHsmCommand";
import { DeleteBackupCommand } from "./commands/DeleteBackupCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DeleteHsmCommand } from "./commands/DeleteHsmCommand";
import { DescribeBackupsCommand } from "./commands/DescribeBackupsCommand";
import { DescribeClustersCommand } from "./commands/DescribeClustersCommand";
import { InitializeClusterCommand } from "./commands/InitializeClusterCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ModifyBackupAttributesCommand } from "./commands/ModifyBackupAttributesCommand";
import { ModifyClusterCommand } from "./commands/ModifyClusterCommand";
import { RestoreBackupCommand } from "./commands/RestoreBackupCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
/**
 * <p>For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS
 *       CloudHSM User Guide</a>.</p>
 */
var CloudHSMV2 = /** @class */ (function (_super) {
  __extends(CloudHSMV2, _super);
  function CloudHSMV2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CloudHSMV2.prototype.copyBackupToRegion = function (args, optionsOrCb, cb) {
    var command = new CopyBackupToRegionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.createCluster = function (args, optionsOrCb, cb) {
    var command = new CreateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.createHsm = function (args, optionsOrCb, cb) {
    var command = new CreateHsmCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.deleteBackup = function (args, optionsOrCb, cb) {
    var command = new DeleteBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.deleteCluster = function (args, optionsOrCb, cb) {
    var command = new DeleteClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.deleteHsm = function (args, optionsOrCb, cb) {
    var command = new DeleteHsmCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.describeBackups = function (args, optionsOrCb, cb) {
    var command = new DescribeBackupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.describeClusters = function (args, optionsOrCb, cb) {
    var command = new DescribeClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.initializeCluster = function (args, optionsOrCb, cb) {
    var command = new InitializeClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.listTags = function (args, optionsOrCb, cb) {
    var command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.modifyBackupAttributes = function (args, optionsOrCb, cb) {
    var command = new ModifyBackupAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.modifyCluster = function (args, optionsOrCb, cb) {
    var command = new ModifyClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.restoreBackup = function (args, optionsOrCb, cb) {
    var command = new RestoreBackupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudHSMV2.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return CloudHSMV2;
})(CloudHSMV2Client);
export { CloudHSMV2 };
//# sourceMappingURL=CloudHSMV2.js.map
