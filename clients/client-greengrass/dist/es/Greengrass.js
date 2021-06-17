import { __extends } from "tslib";
import { GreengrassClient } from "./GreengrassClient";
import { AssociateRoleToGroupCommand, } from "./commands/AssociateRoleToGroupCommand";
import { AssociateServiceRoleToAccountCommand, } from "./commands/AssociateServiceRoleToAccountCommand";
import { CreateConnectorDefinitionCommand, } from "./commands/CreateConnectorDefinitionCommand";
import { CreateConnectorDefinitionVersionCommand, } from "./commands/CreateConnectorDefinitionVersionCommand";
import { CreateCoreDefinitionCommand, } from "./commands/CreateCoreDefinitionCommand";
import { CreateCoreDefinitionVersionCommand, } from "./commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommand, } from "./commands/CreateDeploymentCommand";
import { CreateDeviceDefinitionCommand, } from "./commands/CreateDeviceDefinitionCommand";
import { CreateDeviceDefinitionVersionCommand, } from "./commands/CreateDeviceDefinitionVersionCommand";
import { CreateFunctionDefinitionCommand, } from "./commands/CreateFunctionDefinitionCommand";
import { CreateFunctionDefinitionVersionCommand, } from "./commands/CreateFunctionDefinitionVersionCommand";
import { CreateGroupCertificateAuthorityCommand, } from "./commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateGroupVersionCommand, } from "./commands/CreateGroupVersionCommand";
import { CreateLoggerDefinitionCommand, } from "./commands/CreateLoggerDefinitionCommand";
import { CreateLoggerDefinitionVersionCommand, } from "./commands/CreateLoggerDefinitionVersionCommand";
import { CreateResourceDefinitionCommand, } from "./commands/CreateResourceDefinitionCommand";
import { CreateResourceDefinitionVersionCommand, } from "./commands/CreateResourceDefinitionVersionCommand";
import { CreateSoftwareUpdateJobCommand, } from "./commands/CreateSoftwareUpdateJobCommand";
import { CreateSubscriptionDefinitionCommand, } from "./commands/CreateSubscriptionDefinitionCommand";
import { CreateSubscriptionDefinitionVersionCommand, } from "./commands/CreateSubscriptionDefinitionVersionCommand";
import { DeleteConnectorDefinitionCommand, } from "./commands/DeleteConnectorDefinitionCommand";
import { DeleteCoreDefinitionCommand, } from "./commands/DeleteCoreDefinitionCommand";
import { DeleteDeviceDefinitionCommand, } from "./commands/DeleteDeviceDefinitionCommand";
import { DeleteFunctionDefinitionCommand, } from "./commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteLoggerDefinitionCommand, } from "./commands/DeleteLoggerDefinitionCommand";
import { DeleteResourceDefinitionCommand, } from "./commands/DeleteResourceDefinitionCommand";
import { DeleteSubscriptionDefinitionCommand, } from "./commands/DeleteSubscriptionDefinitionCommand";
import { DisassociateRoleFromGroupCommand, } from "./commands/DisassociateRoleFromGroupCommand";
import { DisassociateServiceRoleFromAccountCommand, } from "./commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommand, } from "./commands/GetAssociatedRoleCommand";
import { GetBulkDeploymentStatusCommand, } from "./commands/GetBulkDeploymentStatusCommand";
import { GetConnectivityInfoCommand, } from "./commands/GetConnectivityInfoCommand";
import { GetConnectorDefinitionCommand, } from "./commands/GetConnectorDefinitionCommand";
import { GetConnectorDefinitionVersionCommand, } from "./commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommand, } from "./commands/GetCoreDefinitionCommand";
import { GetCoreDefinitionVersionCommand, } from "./commands/GetCoreDefinitionVersionCommand";
import { GetDeploymentStatusCommand, } from "./commands/GetDeploymentStatusCommand";
import { GetDeviceDefinitionCommand, } from "./commands/GetDeviceDefinitionCommand";
import { GetDeviceDefinitionVersionCommand, } from "./commands/GetDeviceDefinitionVersionCommand";
import { GetFunctionDefinitionCommand, } from "./commands/GetFunctionDefinitionCommand";
import { GetFunctionDefinitionVersionCommand, } from "./commands/GetFunctionDefinitionVersionCommand";
import { GetGroupCertificateAuthorityCommand, } from "./commands/GetGroupCertificateAuthorityCommand";
import { GetGroupCertificateConfigurationCommand, } from "./commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupVersionCommand, } from "./commands/GetGroupVersionCommand";
import { GetLoggerDefinitionCommand, } from "./commands/GetLoggerDefinitionCommand";
import { GetLoggerDefinitionVersionCommand, } from "./commands/GetLoggerDefinitionVersionCommand";
import { GetResourceDefinitionCommand, } from "./commands/GetResourceDefinitionCommand";
import { GetResourceDefinitionVersionCommand, } from "./commands/GetResourceDefinitionVersionCommand";
import { GetServiceRoleForAccountCommand, } from "./commands/GetServiceRoleForAccountCommand";
import { GetSubscriptionDefinitionCommand, } from "./commands/GetSubscriptionDefinitionCommand";
import { GetSubscriptionDefinitionVersionCommand, } from "./commands/GetSubscriptionDefinitionVersionCommand";
import { GetThingRuntimeConfigurationCommand, } from "./commands/GetThingRuntimeConfigurationCommand";
import { ListBulkDeploymentDetailedReportsCommand, } from "./commands/ListBulkDeploymentDetailedReportsCommand";
import { ListBulkDeploymentsCommand, } from "./commands/ListBulkDeploymentsCommand";
import { ListConnectorDefinitionVersionsCommand, } from "./commands/ListConnectorDefinitionVersionsCommand";
import { ListConnectorDefinitionsCommand, } from "./commands/ListConnectorDefinitionsCommand";
import { ListCoreDefinitionVersionsCommand, } from "./commands/ListCoreDefinitionVersionsCommand";
import { ListCoreDefinitionsCommand, } from "./commands/ListCoreDefinitionsCommand";
import { ListDeploymentsCommand, } from "./commands/ListDeploymentsCommand";
import { ListDeviceDefinitionVersionsCommand, } from "./commands/ListDeviceDefinitionVersionsCommand";
import { ListDeviceDefinitionsCommand, } from "./commands/ListDeviceDefinitionsCommand";
import { ListFunctionDefinitionVersionsCommand, } from "./commands/ListFunctionDefinitionVersionsCommand";
import { ListFunctionDefinitionsCommand, } from "./commands/ListFunctionDefinitionsCommand";
import { ListGroupCertificateAuthoritiesCommand, } from "./commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupVersionsCommand, } from "./commands/ListGroupVersionsCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListLoggerDefinitionVersionsCommand, } from "./commands/ListLoggerDefinitionVersionsCommand";
import { ListLoggerDefinitionsCommand, } from "./commands/ListLoggerDefinitionsCommand";
import { ListResourceDefinitionVersionsCommand, } from "./commands/ListResourceDefinitionVersionsCommand";
import { ListResourceDefinitionsCommand, } from "./commands/ListResourceDefinitionsCommand";
import { ListSubscriptionDefinitionVersionsCommand, } from "./commands/ListSubscriptionDefinitionVersionsCommand";
import { ListSubscriptionDefinitionsCommand, } from "./commands/ListSubscriptionDefinitionsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommand, } from "./commands/ResetDeploymentsCommand";
import { StartBulkDeploymentCommand, } from "./commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommand, } from "./commands/StopBulkDeploymentCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateConnectivityInfoCommand, } from "./commands/UpdateConnectivityInfoCommand";
import { UpdateConnectorDefinitionCommand, } from "./commands/UpdateConnectorDefinitionCommand";
import { UpdateCoreDefinitionCommand, } from "./commands/UpdateCoreDefinitionCommand";
import { UpdateDeviceDefinitionCommand, } from "./commands/UpdateDeviceDefinitionCommand";
import { UpdateFunctionDefinitionCommand, } from "./commands/UpdateFunctionDefinitionCommand";
import { UpdateGroupCertificateConfigurationCommand, } from "./commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateLoggerDefinitionCommand, } from "./commands/UpdateLoggerDefinitionCommand";
import { UpdateResourceDefinitionCommand, } from "./commands/UpdateResourceDefinitionCommand";
import { UpdateSubscriptionDefinitionCommand, } from "./commands/UpdateSubscriptionDefinitionCommand";
import { UpdateThingRuntimeConfigurationCommand, } from "./commands/UpdateThingRuntimeConfigurationCommand";
/**
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 */
var Greengrass = /** @class */ (function (_super) {
    __extends(Greengrass, _super);
    function Greengrass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Greengrass.prototype.associateRoleToGroup = function (args, optionsOrCb, cb) {
        var command = new AssociateRoleToGroupCommand(args);
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
    Greengrass.prototype.associateServiceRoleToAccount = function (args, optionsOrCb, cb) {
        var command = new AssociateServiceRoleToAccountCommand(args);
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
    Greengrass.prototype.createConnectorDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateConnectorDefinitionCommand(args);
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
    Greengrass.prototype.createConnectorDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateConnectorDefinitionVersionCommand(args);
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
    Greengrass.prototype.createCoreDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateCoreDefinitionCommand(args);
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
    Greengrass.prototype.createCoreDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateCoreDefinitionVersionCommand(args);
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
    Greengrass.prototype.createDeployment = function (args, optionsOrCb, cb) {
        var command = new CreateDeploymentCommand(args);
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
    Greengrass.prototype.createDeviceDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateDeviceDefinitionCommand(args);
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
    Greengrass.prototype.createDeviceDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateDeviceDefinitionVersionCommand(args);
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
    Greengrass.prototype.createFunctionDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateFunctionDefinitionCommand(args);
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
    Greengrass.prototype.createFunctionDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateFunctionDefinitionVersionCommand(args);
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
    Greengrass.prototype.createGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGroupCommand(args);
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
    Greengrass.prototype.createGroupCertificateAuthority = function (args, optionsOrCb, cb) {
        var command = new CreateGroupCertificateAuthorityCommand(args);
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
    Greengrass.prototype.createGroupVersion = function (args, optionsOrCb, cb) {
        var command = new CreateGroupVersionCommand(args);
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
    Greengrass.prototype.createLoggerDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateLoggerDefinitionCommand(args);
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
    Greengrass.prototype.createLoggerDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateLoggerDefinitionVersionCommand(args);
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
    Greengrass.prototype.createResourceDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateResourceDefinitionCommand(args);
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
    Greengrass.prototype.createResourceDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateResourceDefinitionVersionCommand(args);
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
    Greengrass.prototype.createSoftwareUpdateJob = function (args, optionsOrCb, cb) {
        var command = new CreateSoftwareUpdateJobCommand(args);
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
    Greengrass.prototype.createSubscriptionDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateSubscriptionDefinitionCommand(args);
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
    Greengrass.prototype.createSubscriptionDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new CreateSubscriptionDefinitionVersionCommand(args);
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
    Greengrass.prototype.deleteConnectorDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteConnectorDefinitionCommand(args);
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
    Greengrass.prototype.deleteCoreDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteCoreDefinitionCommand(args);
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
    Greengrass.prototype.deleteDeviceDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteDeviceDefinitionCommand(args);
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
    Greengrass.prototype.deleteFunctionDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteFunctionDefinitionCommand(args);
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
    Greengrass.prototype.deleteGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGroupCommand(args);
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
    Greengrass.prototype.deleteLoggerDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteLoggerDefinitionCommand(args);
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
    Greengrass.prototype.deleteResourceDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteResourceDefinitionCommand(args);
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
    Greengrass.prototype.deleteSubscriptionDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteSubscriptionDefinitionCommand(args);
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
    Greengrass.prototype.disassociateRoleFromGroup = function (args, optionsOrCb, cb) {
        var command = new DisassociateRoleFromGroupCommand(args);
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
    Greengrass.prototype.disassociateServiceRoleFromAccount = function (args, optionsOrCb, cb) {
        var command = new DisassociateServiceRoleFromAccountCommand(args);
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
    Greengrass.prototype.getAssociatedRole = function (args, optionsOrCb, cb) {
        var command = new GetAssociatedRoleCommand(args);
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
    Greengrass.prototype.getBulkDeploymentStatus = function (args, optionsOrCb, cb) {
        var command = new GetBulkDeploymentStatusCommand(args);
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
    Greengrass.prototype.getConnectivityInfo = function (args, optionsOrCb, cb) {
        var command = new GetConnectivityInfoCommand(args);
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
    Greengrass.prototype.getConnectorDefinition = function (args, optionsOrCb, cb) {
        var command = new GetConnectorDefinitionCommand(args);
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
    Greengrass.prototype.getConnectorDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetConnectorDefinitionVersionCommand(args);
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
    Greengrass.prototype.getCoreDefinition = function (args, optionsOrCb, cb) {
        var command = new GetCoreDefinitionCommand(args);
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
    Greengrass.prototype.getCoreDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetCoreDefinitionVersionCommand(args);
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
    Greengrass.prototype.getDeploymentStatus = function (args, optionsOrCb, cb) {
        var command = new GetDeploymentStatusCommand(args);
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
    Greengrass.prototype.getDeviceDefinition = function (args, optionsOrCb, cb) {
        var command = new GetDeviceDefinitionCommand(args);
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
    Greengrass.prototype.getDeviceDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetDeviceDefinitionVersionCommand(args);
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
    Greengrass.prototype.getFunctionDefinition = function (args, optionsOrCb, cb) {
        var command = new GetFunctionDefinitionCommand(args);
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
    Greengrass.prototype.getFunctionDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetFunctionDefinitionVersionCommand(args);
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
    Greengrass.prototype.getGroup = function (args, optionsOrCb, cb) {
        var command = new GetGroupCommand(args);
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
    Greengrass.prototype.getGroupCertificateAuthority = function (args, optionsOrCb, cb) {
        var command = new GetGroupCertificateAuthorityCommand(args);
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
    Greengrass.prototype.getGroupCertificateConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetGroupCertificateConfigurationCommand(args);
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
    Greengrass.prototype.getGroupVersion = function (args, optionsOrCb, cb) {
        var command = new GetGroupVersionCommand(args);
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
    Greengrass.prototype.getLoggerDefinition = function (args, optionsOrCb, cb) {
        var command = new GetLoggerDefinitionCommand(args);
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
    Greengrass.prototype.getLoggerDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetLoggerDefinitionVersionCommand(args);
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
    Greengrass.prototype.getResourceDefinition = function (args, optionsOrCb, cb) {
        var command = new GetResourceDefinitionCommand(args);
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
    Greengrass.prototype.getResourceDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetResourceDefinitionVersionCommand(args);
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
    Greengrass.prototype.getServiceRoleForAccount = function (args, optionsOrCb, cb) {
        var command = new GetServiceRoleForAccountCommand(args);
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
    Greengrass.prototype.getSubscriptionDefinition = function (args, optionsOrCb, cb) {
        var command = new GetSubscriptionDefinitionCommand(args);
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
    Greengrass.prototype.getSubscriptionDefinitionVersion = function (args, optionsOrCb, cb) {
        var command = new GetSubscriptionDefinitionVersionCommand(args);
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
    Greengrass.prototype.getThingRuntimeConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetThingRuntimeConfigurationCommand(args);
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
    Greengrass.prototype.listBulkDeploymentDetailedReports = function (args, optionsOrCb, cb) {
        var command = new ListBulkDeploymentDetailedReportsCommand(args);
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
    Greengrass.prototype.listBulkDeployments = function (args, optionsOrCb, cb) {
        var command = new ListBulkDeploymentsCommand(args);
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
    Greengrass.prototype.listConnectorDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListConnectorDefinitionsCommand(args);
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
    Greengrass.prototype.listConnectorDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListConnectorDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listCoreDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListCoreDefinitionsCommand(args);
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
    Greengrass.prototype.listCoreDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListCoreDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listDeployments = function (args, optionsOrCb, cb) {
        var command = new ListDeploymentsCommand(args);
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
    Greengrass.prototype.listDeviceDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListDeviceDefinitionsCommand(args);
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
    Greengrass.prototype.listDeviceDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListDeviceDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listFunctionDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListFunctionDefinitionsCommand(args);
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
    Greengrass.prototype.listFunctionDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListFunctionDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listGroupCertificateAuthorities = function (args, optionsOrCb, cb) {
        var command = new ListGroupCertificateAuthoritiesCommand(args);
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
    Greengrass.prototype.listGroups = function (args, optionsOrCb, cb) {
        var command = new ListGroupsCommand(args);
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
    Greengrass.prototype.listGroupVersions = function (args, optionsOrCb, cb) {
        var command = new ListGroupVersionsCommand(args);
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
    Greengrass.prototype.listLoggerDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListLoggerDefinitionsCommand(args);
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
    Greengrass.prototype.listLoggerDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListLoggerDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listResourceDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListResourceDefinitionsCommand(args);
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
    Greengrass.prototype.listResourceDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListResourceDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listSubscriptionDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListSubscriptionDefinitionsCommand(args);
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
    Greengrass.prototype.listSubscriptionDefinitionVersions = function (args, optionsOrCb, cb) {
        var command = new ListSubscriptionDefinitionVersionsCommand(args);
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
    Greengrass.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    Greengrass.prototype.resetDeployments = function (args, optionsOrCb, cb) {
        var command = new ResetDeploymentsCommand(args);
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
    Greengrass.prototype.startBulkDeployment = function (args, optionsOrCb, cb) {
        var command = new StartBulkDeploymentCommand(args);
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
    Greengrass.prototype.stopBulkDeployment = function (args, optionsOrCb, cb) {
        var command = new StopBulkDeploymentCommand(args);
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
    Greengrass.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    Greengrass.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    Greengrass.prototype.updateConnectivityInfo = function (args, optionsOrCb, cb) {
        var command = new UpdateConnectivityInfoCommand(args);
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
    Greengrass.prototype.updateConnectorDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateConnectorDefinitionCommand(args);
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
    Greengrass.prototype.updateCoreDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateCoreDefinitionCommand(args);
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
    Greengrass.prototype.updateDeviceDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceDefinitionCommand(args);
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
    Greengrass.prototype.updateFunctionDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateFunctionDefinitionCommand(args);
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
    Greengrass.prototype.updateGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupCommand(args);
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
    Greengrass.prototype.updateGroupCertificateConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupCertificateConfigurationCommand(args);
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
    Greengrass.prototype.updateLoggerDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateLoggerDefinitionCommand(args);
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
    Greengrass.prototype.updateResourceDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateResourceDefinitionCommand(args);
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
    Greengrass.prototype.updateSubscriptionDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateSubscriptionDefinitionCommand(args);
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
    Greengrass.prototype.updateThingRuntimeConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateThingRuntimeConfigurationCommand(args);
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
    return Greengrass;
}(GreengrassClient));
export { Greengrass };
//# sourceMappingURL=Greengrass.js.map