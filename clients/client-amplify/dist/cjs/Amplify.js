"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amplify = void 0;
const AmplifyClient_1 = require("./AmplifyClient");
const CreateAppCommand_1 = require("./commands/CreateAppCommand");
const CreateBackendEnvironmentCommand_1 = require("./commands/CreateBackendEnvironmentCommand");
const CreateBranchCommand_1 = require("./commands/CreateBranchCommand");
const CreateDeploymentCommand_1 = require("./commands/CreateDeploymentCommand");
const CreateDomainAssociationCommand_1 = require("./commands/CreateDomainAssociationCommand");
const CreateWebhookCommand_1 = require("./commands/CreateWebhookCommand");
const DeleteAppCommand_1 = require("./commands/DeleteAppCommand");
const DeleteBackendEnvironmentCommand_1 = require("./commands/DeleteBackendEnvironmentCommand");
const DeleteBranchCommand_1 = require("./commands/DeleteBranchCommand");
const DeleteDomainAssociationCommand_1 = require("./commands/DeleteDomainAssociationCommand");
const DeleteJobCommand_1 = require("./commands/DeleteJobCommand");
const DeleteWebhookCommand_1 = require("./commands/DeleteWebhookCommand");
const GenerateAccessLogsCommand_1 = require("./commands/GenerateAccessLogsCommand");
const GetAppCommand_1 = require("./commands/GetAppCommand");
const GetArtifactUrlCommand_1 = require("./commands/GetArtifactUrlCommand");
const GetBackendEnvironmentCommand_1 = require("./commands/GetBackendEnvironmentCommand");
const GetBranchCommand_1 = require("./commands/GetBranchCommand");
const GetDomainAssociationCommand_1 = require("./commands/GetDomainAssociationCommand");
const GetJobCommand_1 = require("./commands/GetJobCommand");
const GetWebhookCommand_1 = require("./commands/GetWebhookCommand");
const ListAppsCommand_1 = require("./commands/ListAppsCommand");
const ListArtifactsCommand_1 = require("./commands/ListArtifactsCommand");
const ListBackendEnvironmentsCommand_1 = require("./commands/ListBackendEnvironmentsCommand");
const ListBranchesCommand_1 = require("./commands/ListBranchesCommand");
const ListDomainAssociationsCommand_1 = require("./commands/ListDomainAssociationsCommand");
const ListJobsCommand_1 = require("./commands/ListJobsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWebhooksCommand_1 = require("./commands/ListWebhooksCommand");
const StartDeploymentCommand_1 = require("./commands/StartDeploymentCommand");
const StartJobCommand_1 = require("./commands/StartJobCommand");
const StopJobCommand_1 = require("./commands/StopJobCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAppCommand_1 = require("./commands/UpdateAppCommand");
const UpdateBranchCommand_1 = require("./commands/UpdateBranchCommand");
const UpdateDomainAssociationCommand_1 = require("./commands/UpdateDomainAssociationCommand");
const UpdateWebhookCommand_1 = require("./commands/UpdateWebhookCommand");
/**
 * <p>Amplify enables developers to develop and deploy cloud-powered mobile and web apps.
 *             The Amplify Console provides a continuous delivery and hosting service for web
 *             applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The
 *             Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation
 *             for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *          </p>
 */
class Amplify extends AmplifyClient_1.AmplifyClient {
  createApp(args, optionsOrCb, cb) {
    const command = new CreateAppCommand_1.CreateAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBackendEnvironment(args, optionsOrCb, cb) {
    const command = new CreateBackendEnvironmentCommand_1.CreateBackendEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBranch(args, optionsOrCb, cb) {
    const command = new CreateBranchCommand_1.CreateBranchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDeployment(args, optionsOrCb, cb) {
    const command = new CreateDeploymentCommand_1.CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDomainAssociation(args, optionsOrCb, cb) {
    const command = new CreateDomainAssociationCommand_1.CreateDomainAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createWebhook(args, optionsOrCb, cb) {
    const command = new CreateWebhookCommand_1.CreateWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteApp(args, optionsOrCb, cb) {
    const command = new DeleteAppCommand_1.DeleteAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBackendEnvironment(args, optionsOrCb, cb) {
    const command = new DeleteBackendEnvironmentCommand_1.DeleteBackendEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBranch(args, optionsOrCb, cb) {
    const command = new DeleteBranchCommand_1.DeleteBranchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDomainAssociation(args, optionsOrCb, cb) {
    const command = new DeleteDomainAssociationCommand_1.DeleteDomainAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteJob(args, optionsOrCb, cb) {
    const command = new DeleteJobCommand_1.DeleteJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteWebhook(args, optionsOrCb, cb) {
    const command = new DeleteWebhookCommand_1.DeleteWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  generateAccessLogs(args, optionsOrCb, cb) {
    const command = new GenerateAccessLogsCommand_1.GenerateAccessLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApp(args, optionsOrCb, cb) {
    const command = new GetAppCommand_1.GetAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getArtifactUrl(args, optionsOrCb, cb) {
    const command = new GetArtifactUrlCommand_1.GetArtifactUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBackendEnvironment(args, optionsOrCb, cb) {
    const command = new GetBackendEnvironmentCommand_1.GetBackendEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBranch(args, optionsOrCb, cb) {
    const command = new GetBranchCommand_1.GetBranchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDomainAssociation(args, optionsOrCb, cb) {
    const command = new GetDomainAssociationCommand_1.GetDomainAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getJob(args, optionsOrCb, cb) {
    const command = new GetJobCommand_1.GetJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getWebhook(args, optionsOrCb, cb) {
    const command = new GetWebhookCommand_1.GetWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listApps(args, optionsOrCb, cb) {
    const command = new ListAppsCommand_1.ListAppsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listArtifacts(args, optionsOrCb, cb) {
    const command = new ListArtifactsCommand_1.ListArtifactsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBackendEnvironments(args, optionsOrCb, cb) {
    const command = new ListBackendEnvironmentsCommand_1.ListBackendEnvironmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listBranches(args, optionsOrCb, cb) {
    const command = new ListBranchesCommand_1.ListBranchesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDomainAssociations(args, optionsOrCb, cb) {
    const command = new ListDomainAssociationsCommand_1.ListDomainAssociationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listJobs(args, optionsOrCb, cb) {
    const command = new ListJobsCommand_1.ListJobsCommand(args);
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
  listWebhooks(args, optionsOrCb, cb) {
    const command = new ListWebhooksCommand_1.ListWebhooksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startDeployment(args, optionsOrCb, cb) {
    const command = new StartDeploymentCommand_1.StartDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startJob(args, optionsOrCb, cb) {
    const command = new StartJobCommand_1.StartJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  stopJob(args, optionsOrCb, cb) {
    const command = new StopJobCommand_1.StopJobCommand(args);
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
  updateApp(args, optionsOrCb, cb) {
    const command = new UpdateAppCommand_1.UpdateAppCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBranch(args, optionsOrCb, cb) {
    const command = new UpdateBranchCommand_1.UpdateBranchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDomainAssociation(args, optionsOrCb, cb) {
    const command = new UpdateDomainAssociationCommand_1.UpdateDomainAssociationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateWebhook(args, optionsOrCb, cb) {
    const command = new UpdateWebhookCommand_1.UpdateWebhookCommand(args);
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
exports.Amplify = Amplify;
//# sourceMappingURL=Amplify.js.map
