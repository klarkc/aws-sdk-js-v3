import { __extends } from "tslib";
import { ECSClient } from "./ECSClient";
import { CreateCapacityProviderCommand, } from "./commands/CreateCapacityProviderCommand";
import { CreateClusterCommand, } from "./commands/CreateClusterCommand";
import { CreateServiceCommand, } from "./commands/CreateServiceCommand";
import { CreateTaskSetCommand, } from "./commands/CreateTaskSetCommand";
import { DeleteAccountSettingCommand, } from "./commands/DeleteAccountSettingCommand";
import { DeleteAttributesCommand, } from "./commands/DeleteAttributesCommand";
import { DeleteCapacityProviderCommand, } from "./commands/DeleteCapacityProviderCommand";
import { DeleteClusterCommand, } from "./commands/DeleteClusterCommand";
import { DeleteServiceCommand, } from "./commands/DeleteServiceCommand";
import { DeleteTaskSetCommand, } from "./commands/DeleteTaskSetCommand";
import { DeregisterContainerInstanceCommand, } from "./commands/DeregisterContainerInstanceCommand";
import { DeregisterTaskDefinitionCommand, } from "./commands/DeregisterTaskDefinitionCommand";
import { DescribeCapacityProvidersCommand, } from "./commands/DescribeCapacityProvidersCommand";
import { DescribeClustersCommand, } from "./commands/DescribeClustersCommand";
import { DescribeContainerInstancesCommand, } from "./commands/DescribeContainerInstancesCommand";
import { DescribeServicesCommand, } from "./commands/DescribeServicesCommand";
import { DescribeTaskDefinitionCommand, } from "./commands/DescribeTaskDefinitionCommand";
import { DescribeTaskSetsCommand, } from "./commands/DescribeTaskSetsCommand";
import { DescribeTasksCommand, } from "./commands/DescribeTasksCommand";
import { DiscoverPollEndpointCommand, } from "./commands/DiscoverPollEndpointCommand";
import { ExecuteCommandCommand, } from "./commands/ExecuteCommandCommand";
import { ListAccountSettingsCommand, } from "./commands/ListAccountSettingsCommand";
import { ListAttributesCommand, } from "./commands/ListAttributesCommand";
import { ListClustersCommand, } from "./commands/ListClustersCommand";
import { ListContainerInstancesCommand, } from "./commands/ListContainerInstancesCommand";
import { ListServicesCommand, } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTaskDefinitionFamiliesCommand, } from "./commands/ListTaskDefinitionFamiliesCommand";
import { ListTaskDefinitionsCommand, } from "./commands/ListTaskDefinitionsCommand";
import { ListTasksCommand } from "./commands/ListTasksCommand";
import { PutAccountSettingCommand, } from "./commands/PutAccountSettingCommand";
import { PutAccountSettingDefaultCommand, } from "./commands/PutAccountSettingDefaultCommand";
import { PutAttributesCommand, } from "./commands/PutAttributesCommand";
import { PutClusterCapacityProvidersCommand, } from "./commands/PutClusterCapacityProvidersCommand";
import { RegisterContainerInstanceCommand, } from "./commands/RegisterContainerInstanceCommand";
import { RegisterTaskDefinitionCommand, } from "./commands/RegisterTaskDefinitionCommand";
import { RunTaskCommand } from "./commands/RunTaskCommand";
import { StartTaskCommand } from "./commands/StartTaskCommand";
import { StopTaskCommand } from "./commands/StopTaskCommand";
import { SubmitAttachmentStateChangesCommand, } from "./commands/SubmitAttachmentStateChangesCommand";
import { SubmitContainerStateChangeCommand, } from "./commands/SubmitContainerStateChangeCommand";
import { SubmitTaskStateChangeCommand, } from "./commands/SubmitTaskStateChangeCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateCapacityProviderCommand, } from "./commands/UpdateCapacityProviderCommand";
import { UpdateClusterCommand, } from "./commands/UpdateClusterCommand";
import { UpdateClusterSettingsCommand, } from "./commands/UpdateClusterSettingsCommand";
import { UpdateContainerAgentCommand, } from "./commands/UpdateContainerAgentCommand";
import { UpdateContainerInstancesStateCommand, } from "./commands/UpdateContainerInstancesStateCommand";
import { UpdateServiceCommand, } from "./commands/UpdateServiceCommand";
import { UpdateServicePrimaryTaskSetCommand, } from "./commands/UpdateServicePrimaryTaskSetCommand";
import { UpdateTaskSetCommand, } from "./commands/UpdateTaskSetCommand";
/**
 * <fullname>Amazon Elastic Container Service</fullname>
 * 		       <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 * 			it easy to run, stop, and manage Docker containers on a cluster. You can host your
 * 			cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 * 			services or tasks on AWS Fargate. For more control, you can host your tasks on a cluster
 * 			of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage.</p>
 * 		       <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls, allows you to get the state of your cluster from a centralized service, and gives
 * 			you access to many familiar Amazon EC2 features.</p>
 * 		       <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 * 			the need for you to operate your own cluster management and configuration management
 * 			systems or worry about scaling your management infrastructure.</p>
 */
var ECS = /** @class */ (function (_super) {
    __extends(ECS, _super);
    function ECS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ECS.prototype.createCapacityProvider = function (args, optionsOrCb, cb) {
        var command = new CreateCapacityProviderCommand(args);
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
    ECS.prototype.createCluster = function (args, optionsOrCb, cb) {
        var command = new CreateClusterCommand(args);
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
    ECS.prototype.createService = function (args, optionsOrCb, cb) {
        var command = new CreateServiceCommand(args);
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
    ECS.prototype.createTaskSet = function (args, optionsOrCb, cb) {
        var command = new CreateTaskSetCommand(args);
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
    ECS.prototype.deleteAccountSetting = function (args, optionsOrCb, cb) {
        var command = new DeleteAccountSettingCommand(args);
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
    ECS.prototype.deleteAttributes = function (args, optionsOrCb, cb) {
        var command = new DeleteAttributesCommand(args);
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
    ECS.prototype.deleteCapacityProvider = function (args, optionsOrCb, cb) {
        var command = new DeleteCapacityProviderCommand(args);
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
    ECS.prototype.deleteCluster = function (args, optionsOrCb, cb) {
        var command = new DeleteClusterCommand(args);
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
    ECS.prototype.deleteService = function (args, optionsOrCb, cb) {
        var command = new DeleteServiceCommand(args);
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
    ECS.prototype.deleteTaskSet = function (args, optionsOrCb, cb) {
        var command = new DeleteTaskSetCommand(args);
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
    ECS.prototype.deregisterContainerInstance = function (args, optionsOrCb, cb) {
        var command = new DeregisterContainerInstanceCommand(args);
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
    ECS.prototype.deregisterTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new DeregisterTaskDefinitionCommand(args);
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
    ECS.prototype.describeCapacityProviders = function (args, optionsOrCb, cb) {
        var command = new DescribeCapacityProvidersCommand(args);
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
    ECS.prototype.describeClusters = function (args, optionsOrCb, cb) {
        var command = new DescribeClustersCommand(args);
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
    ECS.prototype.describeContainerInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeContainerInstancesCommand(args);
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
    ECS.prototype.describeServices = function (args, optionsOrCb, cb) {
        var command = new DescribeServicesCommand(args);
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
    ECS.prototype.describeTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeTaskDefinitionCommand(args);
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
    ECS.prototype.describeTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeTasksCommand(args);
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
    ECS.prototype.describeTaskSets = function (args, optionsOrCb, cb) {
        var command = new DescribeTaskSetsCommand(args);
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
    ECS.prototype.discoverPollEndpoint = function (args, optionsOrCb, cb) {
        var command = new DiscoverPollEndpointCommand(args);
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
    ECS.prototype.executeCommand = function (args, optionsOrCb, cb) {
        var command = new ExecuteCommandCommand(args);
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
    ECS.prototype.listAccountSettings = function (args, optionsOrCb, cb) {
        var command = new ListAccountSettingsCommand(args);
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
    ECS.prototype.listAttributes = function (args, optionsOrCb, cb) {
        var command = new ListAttributesCommand(args);
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
    ECS.prototype.listClusters = function (args, optionsOrCb, cb) {
        var command = new ListClustersCommand(args);
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
    ECS.prototype.listContainerInstances = function (args, optionsOrCb, cb) {
        var command = new ListContainerInstancesCommand(args);
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
    ECS.prototype.listServices = function (args, optionsOrCb, cb) {
        var command = new ListServicesCommand(args);
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
    ECS.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ECS.prototype.listTaskDefinitionFamilies = function (args, optionsOrCb, cb) {
        var command = new ListTaskDefinitionFamiliesCommand(args);
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
    ECS.prototype.listTaskDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListTaskDefinitionsCommand(args);
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
    ECS.prototype.listTasks = function (args, optionsOrCb, cb) {
        var command = new ListTasksCommand(args);
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
    ECS.prototype.putAccountSetting = function (args, optionsOrCb, cb) {
        var command = new PutAccountSettingCommand(args);
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
    ECS.prototype.putAccountSettingDefault = function (args, optionsOrCb, cb) {
        var command = new PutAccountSettingDefaultCommand(args);
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
    ECS.prototype.putAttributes = function (args, optionsOrCb, cb) {
        var command = new PutAttributesCommand(args);
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
    ECS.prototype.putClusterCapacityProviders = function (args, optionsOrCb, cb) {
        var command = new PutClusterCapacityProvidersCommand(args);
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
    ECS.prototype.registerContainerInstance = function (args, optionsOrCb, cb) {
        var command = new RegisterContainerInstanceCommand(args);
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
    ECS.prototype.registerTaskDefinition = function (args, optionsOrCb, cb) {
        var command = new RegisterTaskDefinitionCommand(args);
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
    ECS.prototype.runTask = function (args, optionsOrCb, cb) {
        var command = new RunTaskCommand(args);
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
    ECS.prototype.startTask = function (args, optionsOrCb, cb) {
        var command = new StartTaskCommand(args);
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
    ECS.prototype.stopTask = function (args, optionsOrCb, cb) {
        var command = new StopTaskCommand(args);
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
    ECS.prototype.submitAttachmentStateChanges = function (args, optionsOrCb, cb) {
        var command = new SubmitAttachmentStateChangesCommand(args);
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
    ECS.prototype.submitContainerStateChange = function (args, optionsOrCb, cb) {
        var command = new SubmitContainerStateChangeCommand(args);
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
    ECS.prototype.submitTaskStateChange = function (args, optionsOrCb, cb) {
        var command = new SubmitTaskStateChangeCommand(args);
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
    ECS.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ECS.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    ECS.prototype.updateCapacityProvider = function (args, optionsOrCb, cb) {
        var command = new UpdateCapacityProviderCommand(args);
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
    ECS.prototype.updateCluster = function (args, optionsOrCb, cb) {
        var command = new UpdateClusterCommand(args);
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
    ECS.prototype.updateClusterSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateClusterSettingsCommand(args);
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
    ECS.prototype.updateContainerAgent = function (args, optionsOrCb, cb) {
        var command = new UpdateContainerAgentCommand(args);
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
    ECS.prototype.updateContainerInstancesState = function (args, optionsOrCb, cb) {
        var command = new UpdateContainerInstancesStateCommand(args);
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
    ECS.prototype.updateService = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceCommand(args);
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
    ECS.prototype.updateServicePrimaryTaskSet = function (args, optionsOrCb, cb) {
        var command = new UpdateServicePrimaryTaskSetCommand(args);
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
    ECS.prototype.updateTaskSet = function (args, optionsOrCb, cb) {
        var command = new UpdateTaskSetCommand(args);
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
    return ECS;
}(ECSClient));
export { ECS };
//# sourceMappingURL=ECS.js.map