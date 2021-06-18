"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const AppConfigClient_1 = require("./AppConfigClient");
const CreateApplicationCommand_1 = require("./commands/CreateApplicationCommand");
const CreateConfigurationProfileCommand_1 = require("./commands/CreateConfigurationProfileCommand");
const CreateDeploymentStrategyCommand_1 = require("./commands/CreateDeploymentStrategyCommand");
const CreateEnvironmentCommand_1 = require("./commands/CreateEnvironmentCommand");
const CreateHostedConfigurationVersionCommand_1 = require("./commands/CreateHostedConfigurationVersionCommand");
const DeleteApplicationCommand_1 = require("./commands/DeleteApplicationCommand");
const DeleteConfigurationProfileCommand_1 = require("./commands/DeleteConfigurationProfileCommand");
const DeleteDeploymentStrategyCommand_1 = require("./commands/DeleteDeploymentStrategyCommand");
const DeleteEnvironmentCommand_1 = require("./commands/DeleteEnvironmentCommand");
const DeleteHostedConfigurationVersionCommand_1 = require("./commands/DeleteHostedConfigurationVersionCommand");
const GetApplicationCommand_1 = require("./commands/GetApplicationCommand");
const GetConfigurationCommand_1 = require("./commands/GetConfigurationCommand");
const GetConfigurationProfileCommand_1 = require("./commands/GetConfigurationProfileCommand");
const GetDeploymentCommand_1 = require("./commands/GetDeploymentCommand");
const GetDeploymentStrategyCommand_1 = require("./commands/GetDeploymentStrategyCommand");
const GetEnvironmentCommand_1 = require("./commands/GetEnvironmentCommand");
const GetHostedConfigurationVersionCommand_1 = require("./commands/GetHostedConfigurationVersionCommand");
const ListApplicationsCommand_1 = require("./commands/ListApplicationsCommand");
const ListConfigurationProfilesCommand_1 = require("./commands/ListConfigurationProfilesCommand");
const ListDeploymentStrategiesCommand_1 = require("./commands/ListDeploymentStrategiesCommand");
const ListDeploymentsCommand_1 = require("./commands/ListDeploymentsCommand");
const ListEnvironmentsCommand_1 = require("./commands/ListEnvironmentsCommand");
const ListHostedConfigurationVersionsCommand_1 = require("./commands/ListHostedConfigurationVersionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const StartDeploymentCommand_1 = require("./commands/StartDeploymentCommand");
const StopDeploymentCommand_1 = require("./commands/StopDeploymentCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateApplicationCommand_1 = require("./commands/UpdateApplicationCommand");
const UpdateConfigurationProfileCommand_1 = require("./commands/UpdateConfigurationProfileCommand");
const UpdateDeploymentStrategyCommand_1 = require("./commands/UpdateDeploymentStrategyCommand");
const UpdateEnvironmentCommand_1 = require("./commands/UpdateEnvironmentCommand");
const ValidateConfigurationCommand_1 = require("./commands/ValidateConfigurationCommand");
/**
 * <fullname>AWS AppConfig</fullname>
 *          <p>Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy
 *          application configurations. AppConfig supports controlled deployments to applications of any
 *          size and includes built-in validation checks and monitoring. You can use AppConfig with
 *          applications hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT
 *          devices.</p>
 *
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes validators.
 *          A validator provides a syntactic or semantic check to ensure that the configuration you
 *          want to deploy works as intended. To validate your application configuration data, you
 *          provide a schema or a Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 *
 *          <p>During a configuration deployment, AppConfig monitors the application to ensure that the
 *          deployment is successful. If the system encounters an error, AppConfig rolls back the change
 *          to minimize impact for your application users. You can configure a deployment strategy for
 *          each application or environment that includes deployment criteria, including velocity, bake
 *          time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an
 *          alarm, AppConfig automatically rolls back to the previous version. </p>
 *
 *          <p>AppConfig supports multiple use cases. Here are some examples.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to carefully
 *                introduce changes to your application that can only be tested with production
 *                traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Feature toggle</b>: Use AppConfig to turn on new
 *                features that require a timely deployment, such as a product launch or announcement.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list</b>: Use AppConfig to allow premium
 *                subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to reduce stress
 *                on your application when a dependency or other external factor impacts the
 *                system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig User Guide</a>.</p>
 */
class AppConfig extends AppConfigClient_1.AppConfigClient {
  createApplication(args, optionsOrCb, cb) {
    const command = new CreateApplicationCommand_1.CreateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createConfigurationProfile(args, optionsOrCb, cb) {
    const command = new CreateConfigurationProfileCommand_1.CreateConfigurationProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDeploymentStrategy(args, optionsOrCb, cb) {
    const command = new CreateDeploymentStrategyCommand_1.CreateDeploymentStrategyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createEnvironment(args, optionsOrCb, cb) {
    const command = new CreateEnvironmentCommand_1.CreateEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createHostedConfigurationVersion(args, optionsOrCb, cb) {
    const command = new CreateHostedConfigurationVersionCommand_1.CreateHostedConfigurationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteApplication(args, optionsOrCb, cb) {
    const command = new DeleteApplicationCommand_1.DeleteApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteConfigurationProfile(args, optionsOrCb, cb) {
    const command = new DeleteConfigurationProfileCommand_1.DeleteConfigurationProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDeploymentStrategy(args, optionsOrCb, cb) {
    const command = new DeleteDeploymentStrategyCommand_1.DeleteDeploymentStrategyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteEnvironment(args, optionsOrCb, cb) {
    const command = new DeleteEnvironmentCommand_1.DeleteEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteHostedConfigurationVersion(args, optionsOrCb, cb) {
    const command = new DeleteHostedConfigurationVersionCommand_1.DeleteHostedConfigurationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApplication(args, optionsOrCb, cb) {
    const command = new GetApplicationCommand_1.GetApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getConfiguration(args, optionsOrCb, cb) {
    const command = new GetConfigurationCommand_1.GetConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getConfigurationProfile(args, optionsOrCb, cb) {
    const command = new GetConfigurationProfileCommand_1.GetConfigurationProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDeployment(args, optionsOrCb, cb) {
    const command = new GetDeploymentCommand_1.GetDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDeploymentStrategy(args, optionsOrCb, cb) {
    const command = new GetDeploymentStrategyCommand_1.GetDeploymentStrategyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEnvironment(args, optionsOrCb, cb) {
    const command = new GetEnvironmentCommand_1.GetEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getHostedConfigurationVersion(args, optionsOrCb, cb) {
    const command = new GetHostedConfigurationVersionCommand_1.GetHostedConfigurationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listApplications(args, optionsOrCb, cb) {
    const command = new ListApplicationsCommand_1.ListApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listConfigurationProfiles(args, optionsOrCb, cb) {
    const command = new ListConfigurationProfilesCommand_1.ListConfigurationProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDeployments(args, optionsOrCb, cb) {
    const command = new ListDeploymentsCommand_1.ListDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDeploymentStrategies(args, optionsOrCb, cb) {
    const command = new ListDeploymentStrategiesCommand_1.ListDeploymentStrategiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listEnvironments(args, optionsOrCb, cb) {
    const command = new ListEnvironmentsCommand_1.ListEnvironmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listHostedConfigurationVersions(args, optionsOrCb, cb) {
    const command = new ListHostedConfigurationVersionsCommand_1.ListHostedConfigurationVersionsCommand(args);
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
  stopDeployment(args, optionsOrCb, cb) {
    const command = new StopDeploymentCommand_1.StopDeploymentCommand(args);
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
  updateApplication(args, optionsOrCb, cb) {
    const command = new UpdateApplicationCommand_1.UpdateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateConfigurationProfile(args, optionsOrCb, cb) {
    const command = new UpdateConfigurationProfileCommand_1.UpdateConfigurationProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDeploymentStrategy(args, optionsOrCb, cb) {
    const command = new UpdateDeploymentStrategyCommand_1.UpdateDeploymentStrategyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateEnvironment(args, optionsOrCb, cb) {
    const command = new UpdateEnvironmentCommand_1.UpdateEnvironmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  validateConfiguration(args, optionsOrCb, cb) {
    const command = new ValidateConfigurationCommand_1.ValidateConfigurationCommand(args);
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
exports.AppConfig = AppConfig;
//# sourceMappingURL=AppConfig.js.map
