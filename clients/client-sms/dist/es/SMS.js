import { __extends } from "tslib";
import { SMSClient } from "./SMSClient";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateReplicationJobCommand, } from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteAppLaunchConfigurationCommand, } from "./commands/DeleteAppLaunchConfigurationCommand";
import { DeleteAppReplicationConfigurationCommand, } from "./commands/DeleteAppReplicationConfigurationCommand";
import { DeleteAppValidationConfigurationCommand, } from "./commands/DeleteAppValidationConfigurationCommand";
import { DeleteReplicationJobCommand, } from "./commands/DeleteReplicationJobCommand";
import { DeleteServerCatalogCommand, } from "./commands/DeleteServerCatalogCommand";
import { DisassociateConnectorCommand, } from "./commands/DisassociateConnectorCommand";
import { GenerateChangeSetCommand, } from "./commands/GenerateChangeSetCommand";
import { GenerateTemplateCommand, } from "./commands/GenerateTemplateCommand";
import { GetAppCommand } from "./commands/GetAppCommand";
import { GetAppLaunchConfigurationCommand, } from "./commands/GetAppLaunchConfigurationCommand";
import { GetAppReplicationConfigurationCommand, } from "./commands/GetAppReplicationConfigurationCommand";
import { GetAppValidationConfigurationCommand, } from "./commands/GetAppValidationConfigurationCommand";
import { GetAppValidationOutputCommand, } from "./commands/GetAppValidationOutputCommand";
import { GetConnectorsCommand, } from "./commands/GetConnectorsCommand";
import { GetReplicationJobsCommand, } from "./commands/GetReplicationJobsCommand";
import { GetReplicationRunsCommand, } from "./commands/GetReplicationRunsCommand";
import { GetServersCommand } from "./commands/GetServersCommand";
import { ImportAppCatalogCommand, } from "./commands/ImportAppCatalogCommand";
import { ImportServerCatalogCommand, } from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommand } from "./commands/LaunchAppCommand";
import { ListAppsCommand } from "./commands/ListAppsCommand";
import { NotifyAppValidationOutputCommand, } from "./commands/NotifyAppValidationOutputCommand";
import { PutAppLaunchConfigurationCommand, } from "./commands/PutAppLaunchConfigurationCommand";
import { PutAppReplicationConfigurationCommand, } from "./commands/PutAppReplicationConfigurationCommand";
import { PutAppValidationConfigurationCommand, } from "./commands/PutAppValidationConfigurationCommand";
import { StartAppReplicationCommand, } from "./commands/StartAppReplicationCommand";
import { StartOnDemandAppReplicationCommand, } from "./commands/StartOnDemandAppReplicationCommand";
import { StartOnDemandReplicationRunCommand, } from "./commands/StartOnDemandReplicationRunCommand";
import { StopAppReplicationCommand, } from "./commands/StopAppReplicationCommand";
import { TerminateAppCommand, } from "./commands/TerminateAppCommand";
import { UpdateAppCommand } from "./commands/UpdateAppCommand";
import { UpdateReplicationJobCommand, } from "./commands/UpdateReplicationJobCommand";
/**
 * <fullname>AWS Server Migration Service</fullname>
 *         <p>AWS Server Migration Service (AWS SMS) makes it easier and faster for you to migrate your
 *             on-premises workloads to AWS. To learn more about AWS SMS, see the following
 *             resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="http://aws.amazon.com/server-migration-service/">AWS Server Migration Service
 *                     product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">AWS Server Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
var SMS = /** @class */ (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.createApp = function (args, optionsOrCb, cb) {
        var command = new CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.createReplicationJob = function (args, optionsOrCb, cb) {
        var command = new CreateReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteApp = function (args, optionsOrCb, cb) {
        var command = new DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteAppLaunchConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteAppReplicationConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteAppValidationConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteAppValidationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteReplicationJob = function (args, optionsOrCb, cb) {
        var command = new DeleteReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.deleteServerCatalog = function (args, optionsOrCb, cb) {
        var command = new DeleteServerCatalogCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.disassociateConnector = function (args, optionsOrCb, cb) {
        var command = new DisassociateConnectorCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.generateChangeSet = function (args, optionsOrCb, cb) {
        var command = new GenerateChangeSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.generateTemplate = function (args, optionsOrCb, cb) {
        var command = new GenerateTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getApp = function (args, optionsOrCb, cb) {
        var command = new GetAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getAppLaunchConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getAppReplicationConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getAppValidationConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetAppValidationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getAppValidationOutput = function (args, optionsOrCb, cb) {
        var command = new GetAppValidationOutputCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getConnectors = function (args, optionsOrCb, cb) {
        var command = new GetConnectorsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getReplicationJobs = function (args, optionsOrCb, cb) {
        var command = new GetReplicationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getReplicationRuns = function (args, optionsOrCb, cb) {
        var command = new GetReplicationRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.getServers = function (args, optionsOrCb, cb) {
        var command = new GetServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.importAppCatalog = function (args, optionsOrCb, cb) {
        var command = new ImportAppCatalogCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.importServerCatalog = function (args, optionsOrCb, cb) {
        var command = new ImportServerCatalogCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.launchApp = function (args, optionsOrCb, cb) {
        var command = new LaunchAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.listApps = function (args, optionsOrCb, cb) {
        var command = new ListAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.notifyAppValidationOutput = function (args, optionsOrCb, cb) {
        var command = new NotifyAppValidationOutputCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.putAppLaunchConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutAppLaunchConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.putAppReplicationConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutAppReplicationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.putAppValidationConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutAppValidationConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.startAppReplication = function (args, optionsOrCb, cb) {
        var command = new StartAppReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.startOnDemandAppReplication = function (args, optionsOrCb, cb) {
        var command = new StartOnDemandAppReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.startOnDemandReplicationRun = function (args, optionsOrCb, cb) {
        var command = new StartOnDemandReplicationRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.stopAppReplication = function (args, optionsOrCb, cb) {
        var command = new StopAppReplicationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.terminateApp = function (args, optionsOrCb, cb) {
        var command = new TerminateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.updateApp = function (args, optionsOrCb, cb) {
        var command = new UpdateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SMS.prototype.updateReplicationJob = function (args, optionsOrCb, cb) {
        var command = new UpdateReplicationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return SMS;
}(SMSClient));
export { SMS };
//# sourceMappingURL=SMS.js.map