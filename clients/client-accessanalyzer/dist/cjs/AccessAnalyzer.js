"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessAnalyzer = void 0;
const AccessAnalyzerClient_1 = require("./AccessAnalyzerClient");
const ApplyArchiveRuleCommand_1 = require("./commands/ApplyArchiveRuleCommand");
const CancelPolicyGenerationCommand_1 = require("./commands/CancelPolicyGenerationCommand");
const CreateAccessPreviewCommand_1 = require("./commands/CreateAccessPreviewCommand");
const CreateAnalyzerCommand_1 = require("./commands/CreateAnalyzerCommand");
const CreateArchiveRuleCommand_1 = require("./commands/CreateArchiveRuleCommand");
const DeleteAnalyzerCommand_1 = require("./commands/DeleteAnalyzerCommand");
const DeleteArchiveRuleCommand_1 = require("./commands/DeleteArchiveRuleCommand");
const GetAccessPreviewCommand_1 = require("./commands/GetAccessPreviewCommand");
const GetAnalyzedResourceCommand_1 = require("./commands/GetAnalyzedResourceCommand");
const GetAnalyzerCommand_1 = require("./commands/GetAnalyzerCommand");
const GetArchiveRuleCommand_1 = require("./commands/GetArchiveRuleCommand");
const GetFindingCommand_1 = require("./commands/GetFindingCommand");
const GetGeneratedPolicyCommand_1 = require("./commands/GetGeneratedPolicyCommand");
const ListAccessPreviewFindingsCommand_1 = require("./commands/ListAccessPreviewFindingsCommand");
const ListAccessPreviewsCommand_1 = require("./commands/ListAccessPreviewsCommand");
const ListAnalyzedResourcesCommand_1 = require("./commands/ListAnalyzedResourcesCommand");
const ListAnalyzersCommand_1 = require("./commands/ListAnalyzersCommand");
const ListArchiveRulesCommand_1 = require("./commands/ListArchiveRulesCommand");
const ListFindingsCommand_1 = require("./commands/ListFindingsCommand");
const ListPolicyGenerationsCommand_1 = require("./commands/ListPolicyGenerationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const StartPolicyGenerationCommand_1 = require("./commands/StartPolicyGenerationCommand");
const StartResourceScanCommand_1 = require("./commands/StartResourceScanCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateArchiveRuleCommand_1 = require("./commands/UpdateArchiveRuleCommand");
const UpdateFindingsCommand_1 = require("./commands/UpdateFindingsCommand");
const ValidatePolicyCommand_1 = require("./commands/ValidatePolicyCommand");
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
class AccessAnalyzer extends AccessAnalyzerClient_1.AccessAnalyzerClient {
  applyArchiveRule(args, optionsOrCb, cb) {
    const command = new ApplyArchiveRuleCommand_1.ApplyArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  cancelPolicyGeneration(args, optionsOrCb, cb) {
    const command = new CancelPolicyGenerationCommand_1.CancelPolicyGenerationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAccessPreview(args, optionsOrCb, cb) {
    const command = new CreateAccessPreviewCommand_1.CreateAccessPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAnalyzer(args, optionsOrCb, cb) {
    const command = new CreateAnalyzerCommand_1.CreateAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createArchiveRule(args, optionsOrCb, cb) {
    const command = new CreateArchiveRuleCommand_1.CreateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAnalyzer(args, optionsOrCb, cb) {
    const command = new DeleteAnalyzerCommand_1.DeleteAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteArchiveRule(args, optionsOrCb, cb) {
    const command = new DeleteArchiveRuleCommand_1.DeleteArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAccessPreview(args, optionsOrCb, cb) {
    const command = new GetAccessPreviewCommand_1.GetAccessPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAnalyzedResource(args, optionsOrCb, cb) {
    const command = new GetAnalyzedResourceCommand_1.GetAnalyzedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAnalyzer(args, optionsOrCb, cb) {
    const command = new GetAnalyzerCommand_1.GetAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getArchiveRule(args, optionsOrCb, cb) {
    const command = new GetArchiveRuleCommand_1.GetArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFinding(args, optionsOrCb, cb) {
    const command = new GetFindingCommand_1.GetFindingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getGeneratedPolicy(args, optionsOrCb, cb) {
    const command = new GetGeneratedPolicyCommand_1.GetGeneratedPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAccessPreviewFindings(args, optionsOrCb, cb) {
    const command = new ListAccessPreviewFindingsCommand_1.ListAccessPreviewFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAccessPreviews(args, optionsOrCb, cb) {
    const command = new ListAccessPreviewsCommand_1.ListAccessPreviewsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAnalyzedResources(args, optionsOrCb, cb) {
    const command = new ListAnalyzedResourcesCommand_1.ListAnalyzedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAnalyzers(args, optionsOrCb, cb) {
    const command = new ListAnalyzersCommand_1.ListAnalyzersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listArchiveRules(args, optionsOrCb, cb) {
    const command = new ListArchiveRulesCommand_1.ListArchiveRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFindings(args, optionsOrCb, cb) {
    const command = new ListFindingsCommand_1.ListFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPolicyGenerations(args, optionsOrCb, cb) {
    const command = new ListPolicyGenerationsCommand_1.ListPolicyGenerationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startPolicyGeneration(args, optionsOrCb, cb) {
    const command = new StartPolicyGenerationCommand_1.StartPolicyGenerationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startResourceScan(args, optionsOrCb, cb) {
    const command = new StartResourceScanCommand_1.StartResourceScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateArchiveRule(args, optionsOrCb, cb) {
    const command = new UpdateArchiveRuleCommand_1.UpdateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateFindings(args, optionsOrCb, cb) {
    const command = new UpdateFindingsCommand_1.UpdateFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  validatePolicy(args, optionsOrCb, cb) {
    const command = new ValidatePolicyCommand_1.ValidatePolicyCommand(args);
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
exports.AccessAnalyzer = AccessAnalyzer;
//# sourceMappingURL=AccessAnalyzer.js.map
