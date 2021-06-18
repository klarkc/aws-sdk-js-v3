import { __extends } from "tslib";
import { AccessAnalyzerClient } from "./AccessAnalyzerClient";
import { ApplyArchiveRuleCommand } from "./commands/ApplyArchiveRuleCommand";
import { CancelPolicyGenerationCommand } from "./commands/CancelPolicyGenerationCommand";
import { CreateAccessPreviewCommand } from "./commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommand } from "./commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommand } from "./commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommand } from "./commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommand } from "./commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommand } from "./commands/GetAccessPreviewCommand";
import { GetAnalyzedResourceCommand } from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommand } from "./commands/GetAnalyzerCommand";
import { GetArchiveRuleCommand } from "./commands/GetArchiveRuleCommand";
import { GetFindingCommand } from "./commands/GetFindingCommand";
import { GetGeneratedPolicyCommand } from "./commands/GetGeneratedPolicyCommand";
import { ListAccessPreviewFindingsCommand } from "./commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommand } from "./commands/ListAccessPreviewsCommand";
import { ListAnalyzedResourcesCommand } from "./commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommand } from "./commands/ListAnalyzersCommand";
import { ListArchiveRulesCommand } from "./commands/ListArchiveRulesCommand";
import { ListFindingsCommand } from "./commands/ListFindingsCommand";
import { ListPolicyGenerationsCommand } from "./commands/ListPolicyGenerationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { StartPolicyGenerationCommand } from "./commands/StartPolicyGenerationCommand";
import { StartResourceScanCommand } from "./commands/StartResourceScanCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateArchiveRuleCommand } from "./commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommand } from "./commands/UpdateFindingsCommand";
import { ValidatePolicyCommand } from "./commands/ValidatePolicyCommand";
/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external
 *          principal can be another AWS account, a root user, an IAM user or role, a federated
 *          user, an AWS service, or an anonymous user. You can also use Access Analyzer to preview and
 *          validate public and cross-account access to your resources before deploying permissions
 *          changes. This guide describes the AWS IAM Access Analyzer operations that you can call
 *          programmatically. For general information about Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
var AccessAnalyzer = /** @class */ (function (_super) {
  __extends(AccessAnalyzer, _super);
  function AccessAnalyzer() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AccessAnalyzer.prototype.applyArchiveRule = function (args, optionsOrCb, cb) {
    var command = new ApplyArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.cancelPolicyGeneration = function (args, optionsOrCb, cb) {
    var command = new CancelPolicyGenerationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.createAccessPreview = function (args, optionsOrCb, cb) {
    var command = new CreateAccessPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.createAnalyzer = function (args, optionsOrCb, cb) {
    var command = new CreateAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.createArchiveRule = function (args, optionsOrCb, cb) {
    var command = new CreateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.deleteAnalyzer = function (args, optionsOrCb, cb) {
    var command = new DeleteAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.deleteArchiveRule = function (args, optionsOrCb, cb) {
    var command = new DeleteArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getAccessPreview = function (args, optionsOrCb, cb) {
    var command = new GetAccessPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getAnalyzedResource = function (args, optionsOrCb, cb) {
    var command = new GetAnalyzedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getAnalyzer = function (args, optionsOrCb, cb) {
    var command = new GetAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getArchiveRule = function (args, optionsOrCb, cb) {
    var command = new GetArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getFinding = function (args, optionsOrCb, cb) {
    var command = new GetFindingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.getGeneratedPolicy = function (args, optionsOrCb, cb) {
    var command = new GetGeneratedPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listAccessPreviewFindings = function (args, optionsOrCb, cb) {
    var command = new ListAccessPreviewFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listAccessPreviews = function (args, optionsOrCb, cb) {
    var command = new ListAccessPreviewsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listAnalyzedResources = function (args, optionsOrCb, cb) {
    var command = new ListAnalyzedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listAnalyzers = function (args, optionsOrCb, cb) {
    var command = new ListAnalyzersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listArchiveRules = function (args, optionsOrCb, cb) {
    var command = new ListArchiveRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listFindings = function (args, optionsOrCb, cb) {
    var command = new ListFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listPolicyGenerations = function (args, optionsOrCb, cb) {
    var command = new ListPolicyGenerationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.startPolicyGeneration = function (args, optionsOrCb, cb) {
    var command = new StartPolicyGenerationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.startResourceScan = function (args, optionsOrCb, cb) {
    var command = new StartResourceScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.tagResource = function (args, optionsOrCb, cb) {
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
  AccessAnalyzer.prototype.untagResource = function (args, optionsOrCb, cb) {
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
  AccessAnalyzer.prototype.updateArchiveRule = function (args, optionsOrCb, cb) {
    var command = new UpdateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.updateFindings = function (args, optionsOrCb, cb) {
    var command = new UpdateFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AccessAnalyzer.prototype.validatePolicy = function (args, optionsOrCb, cb) {
    var command = new ValidatePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AccessAnalyzer;
})(AccessAnalyzerClient);
export { AccessAnalyzer };
//# sourceMappingURL=AccessAnalyzer.js.map
