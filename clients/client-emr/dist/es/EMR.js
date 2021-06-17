import { __extends } from "tslib";
import { EMRClient } from "./EMRClient";
import { AddInstanceFleetCommand, } from "./commands/AddInstanceFleetCommand";
import { AddInstanceGroupsCommand, } from "./commands/AddInstanceGroupsCommand";
import { AddJobFlowStepsCommand, } from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CancelStepsCommand } from "./commands/CancelStepsCommand";
import { CreateSecurityConfigurationCommand, } from "./commands/CreateSecurityConfigurationCommand";
import { CreateStudioCommand, } from "./commands/CreateStudioCommand";
import { CreateStudioSessionMappingCommand, } from "./commands/CreateStudioSessionMappingCommand";
import { DeleteSecurityConfigurationCommand, } from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteStudioCommand, } from "./commands/DeleteStudioCommand";
import { DeleteStudioSessionMappingCommand, } from "./commands/DeleteStudioSessionMappingCommand";
import { DescribeClusterCommand, } from "./commands/DescribeClusterCommand";
import { DescribeJobFlowsCommand, } from "./commands/DescribeJobFlowsCommand";
import { DescribeNotebookExecutionCommand, } from "./commands/DescribeNotebookExecutionCommand";
import { DescribeSecurityConfigurationCommand, } from "./commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommand, } from "./commands/DescribeStepCommand";
import { DescribeStudioCommand, } from "./commands/DescribeStudioCommand";
import { GetBlockPublicAccessConfigurationCommand, } from "./commands/GetBlockPublicAccessConfigurationCommand";
import { GetManagedScalingPolicyCommand, } from "./commands/GetManagedScalingPolicyCommand";
import { GetStudioSessionMappingCommand, } from "./commands/GetStudioSessionMappingCommand";
import { ListBootstrapActionsCommand, } from "./commands/ListBootstrapActionsCommand";
import { ListClustersCommand, } from "./commands/ListClustersCommand";
import { ListInstanceFleetsCommand, } from "./commands/ListInstanceFleetsCommand";
import { ListInstanceGroupsCommand, } from "./commands/ListInstanceGroupsCommand";
import { ListInstancesCommand, } from "./commands/ListInstancesCommand";
import { ListNotebookExecutionsCommand, } from "./commands/ListNotebookExecutionsCommand";
import { ListSecurityConfigurationsCommand, } from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommand } from "./commands/ListStepsCommand";
import { ListStudioSessionMappingsCommand, } from "./commands/ListStudioSessionMappingsCommand";
import { ListStudiosCommand } from "./commands/ListStudiosCommand";
import { ModifyClusterCommand, } from "./commands/ModifyClusterCommand";
import { ModifyInstanceFleetCommand, } from "./commands/ModifyInstanceFleetCommand";
import { ModifyInstanceGroupsCommand, } from "./commands/ModifyInstanceGroupsCommand";
import { PutAutoScalingPolicyCommand, } from "./commands/PutAutoScalingPolicyCommand";
import { PutBlockPublicAccessConfigurationCommand, } from "./commands/PutBlockPublicAccessConfigurationCommand";
import { PutManagedScalingPolicyCommand, } from "./commands/PutManagedScalingPolicyCommand";
import { RemoveAutoScalingPolicyCommand, } from "./commands/RemoveAutoScalingPolicyCommand";
import { RemoveManagedScalingPolicyCommand, } from "./commands/RemoveManagedScalingPolicyCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommand } from "./commands/RunJobFlowCommand";
import { SetTerminationProtectionCommand, } from "./commands/SetTerminationProtectionCommand";
import { SetVisibleToAllUsersCommand, } from "./commands/SetVisibleToAllUsersCommand";
import { StartNotebookExecutionCommand, } from "./commands/StartNotebookExecutionCommand";
import { StopNotebookExecutionCommand, } from "./commands/StopNotebookExecutionCommand";
import { TerminateJobFlowsCommand, } from "./commands/TerminateJobFlowsCommand";
import { UpdateStudioCommand, } from "./commands/UpdateStudioCommand";
import { UpdateStudioSessionMappingCommand, } from "./commands/UpdateStudioSessionMappingCommand";
/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of data
 *          efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do
 *          tasks such as web indexing, data mining, log file analysis, machine learning, scientific
 *          simulation, and data warehouse management.</p>
 */
var EMR = /** @class */ (function (_super) {
    __extends(EMR, _super);
    function EMR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EMR.prototype.addInstanceFleet = function (args, optionsOrCb, cb) {
        var command = new AddInstanceFleetCommand(args);
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
    EMR.prototype.addInstanceGroups = function (args, optionsOrCb, cb) {
        var command = new AddInstanceGroupsCommand(args);
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
    EMR.prototype.addJobFlowSteps = function (args, optionsOrCb, cb) {
        var command = new AddJobFlowStepsCommand(args);
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
    EMR.prototype.addTags = function (args, optionsOrCb, cb) {
        var command = new AddTagsCommand(args);
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
    EMR.prototype.cancelSteps = function (args, optionsOrCb, cb) {
        var command = new CancelStepsCommand(args);
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
    EMR.prototype.createSecurityConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateSecurityConfigurationCommand(args);
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
    EMR.prototype.createStudio = function (args, optionsOrCb, cb) {
        var command = new CreateStudioCommand(args);
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
    EMR.prototype.createStudioSessionMapping = function (args, optionsOrCb, cb) {
        var command = new CreateStudioSessionMappingCommand(args);
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
    EMR.prototype.deleteSecurityConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteSecurityConfigurationCommand(args);
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
    EMR.prototype.deleteStudio = function (args, optionsOrCb, cb) {
        var command = new DeleteStudioCommand(args);
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
    EMR.prototype.deleteStudioSessionMapping = function (args, optionsOrCb, cb) {
        var command = new DeleteStudioSessionMappingCommand(args);
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
    EMR.prototype.describeCluster = function (args, optionsOrCb, cb) {
        var command = new DescribeClusterCommand(args);
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
    EMR.prototype.describeJobFlows = function (args, optionsOrCb, cb) {
        var command = new DescribeJobFlowsCommand(args);
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
    EMR.prototype.describeNotebookExecution = function (args, optionsOrCb, cb) {
        var command = new DescribeNotebookExecutionCommand(args);
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
    EMR.prototype.describeSecurityConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeSecurityConfigurationCommand(args);
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
    EMR.prototype.describeStep = function (args, optionsOrCb, cb) {
        var command = new DescribeStepCommand(args);
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
    EMR.prototype.describeStudio = function (args, optionsOrCb, cb) {
        var command = new DescribeStudioCommand(args);
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
    EMR.prototype.getBlockPublicAccessConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetBlockPublicAccessConfigurationCommand(args);
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
    EMR.prototype.getManagedScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new GetManagedScalingPolicyCommand(args);
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
    EMR.prototype.getStudioSessionMapping = function (args, optionsOrCb, cb) {
        var command = new GetStudioSessionMappingCommand(args);
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
    EMR.prototype.listBootstrapActions = function (args, optionsOrCb, cb) {
        var command = new ListBootstrapActionsCommand(args);
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
    EMR.prototype.listClusters = function (args, optionsOrCb, cb) {
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
    EMR.prototype.listInstanceFleets = function (args, optionsOrCb, cb) {
        var command = new ListInstanceFleetsCommand(args);
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
    EMR.prototype.listInstanceGroups = function (args, optionsOrCb, cb) {
        var command = new ListInstanceGroupsCommand(args);
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
    EMR.prototype.listInstances = function (args, optionsOrCb, cb) {
        var command = new ListInstancesCommand(args);
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
    EMR.prototype.listNotebookExecutions = function (args, optionsOrCb, cb) {
        var command = new ListNotebookExecutionsCommand(args);
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
    EMR.prototype.listSecurityConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListSecurityConfigurationsCommand(args);
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
    EMR.prototype.listSteps = function (args, optionsOrCb, cb) {
        var command = new ListStepsCommand(args);
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
    EMR.prototype.listStudios = function (args, optionsOrCb, cb) {
        var command = new ListStudiosCommand(args);
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
    EMR.prototype.listStudioSessionMappings = function (args, optionsOrCb, cb) {
        var command = new ListStudioSessionMappingsCommand(args);
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
    EMR.prototype.modifyCluster = function (args, optionsOrCb, cb) {
        var command = new ModifyClusterCommand(args);
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
    EMR.prototype.modifyInstanceFleet = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceFleetCommand(args);
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
    EMR.prototype.modifyInstanceGroups = function (args, optionsOrCb, cb) {
        var command = new ModifyInstanceGroupsCommand(args);
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
    EMR.prototype.putAutoScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new PutAutoScalingPolicyCommand(args);
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
    EMR.prototype.putBlockPublicAccessConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutBlockPublicAccessConfigurationCommand(args);
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
    EMR.prototype.putManagedScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new PutManagedScalingPolicyCommand(args);
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
    EMR.prototype.removeAutoScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new RemoveAutoScalingPolicyCommand(args);
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
    EMR.prototype.removeManagedScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new RemoveManagedScalingPolicyCommand(args);
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
    EMR.prototype.removeTags = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsCommand(args);
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
    EMR.prototype.runJobFlow = function (args, optionsOrCb, cb) {
        var command = new RunJobFlowCommand(args);
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
    EMR.prototype.setTerminationProtection = function (args, optionsOrCb, cb) {
        var command = new SetTerminationProtectionCommand(args);
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
    EMR.prototype.setVisibleToAllUsers = function (args, optionsOrCb, cb) {
        var command = new SetVisibleToAllUsersCommand(args);
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
    EMR.prototype.startNotebookExecution = function (args, optionsOrCb, cb) {
        var command = new StartNotebookExecutionCommand(args);
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
    EMR.prototype.stopNotebookExecution = function (args, optionsOrCb, cb) {
        var command = new StopNotebookExecutionCommand(args);
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
    EMR.prototype.terminateJobFlows = function (args, optionsOrCb, cb) {
        var command = new TerminateJobFlowsCommand(args);
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
    EMR.prototype.updateStudio = function (args, optionsOrCb, cb) {
        var command = new UpdateStudioCommand(args);
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
    EMR.prototype.updateStudioSessionMapping = function (args, optionsOrCb, cb) {
        var command = new UpdateStudioSessionMappingCommand(args);
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
    return EMR;
}(EMRClient));
export { EMR };
//# sourceMappingURL=EMR.js.map