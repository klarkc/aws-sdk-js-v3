"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMR = void 0;
const EMRClient_1 = require("./EMRClient");
const AddInstanceFleetCommand_1 = require("./commands/AddInstanceFleetCommand");
const AddInstanceGroupsCommand_1 = require("./commands/AddInstanceGroupsCommand");
const AddJobFlowStepsCommand_1 = require("./commands/AddJobFlowStepsCommand");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const CancelStepsCommand_1 = require("./commands/CancelStepsCommand");
const CreateSecurityConfigurationCommand_1 = require("./commands/CreateSecurityConfigurationCommand");
const CreateStudioCommand_1 = require("./commands/CreateStudioCommand");
const CreateStudioSessionMappingCommand_1 = require("./commands/CreateStudioSessionMappingCommand");
const DeleteSecurityConfigurationCommand_1 = require("./commands/DeleteSecurityConfigurationCommand");
const DeleteStudioCommand_1 = require("./commands/DeleteStudioCommand");
const DeleteStudioSessionMappingCommand_1 = require("./commands/DeleteStudioSessionMappingCommand");
const DescribeClusterCommand_1 = require("./commands/DescribeClusterCommand");
const DescribeJobFlowsCommand_1 = require("./commands/DescribeJobFlowsCommand");
const DescribeNotebookExecutionCommand_1 = require("./commands/DescribeNotebookExecutionCommand");
const DescribeSecurityConfigurationCommand_1 = require("./commands/DescribeSecurityConfigurationCommand");
const DescribeStepCommand_1 = require("./commands/DescribeStepCommand");
const DescribeStudioCommand_1 = require("./commands/DescribeStudioCommand");
const GetBlockPublicAccessConfigurationCommand_1 = require("./commands/GetBlockPublicAccessConfigurationCommand");
const GetManagedScalingPolicyCommand_1 = require("./commands/GetManagedScalingPolicyCommand");
const GetStudioSessionMappingCommand_1 = require("./commands/GetStudioSessionMappingCommand");
const ListBootstrapActionsCommand_1 = require("./commands/ListBootstrapActionsCommand");
const ListClustersCommand_1 = require("./commands/ListClustersCommand");
const ListInstanceFleetsCommand_1 = require("./commands/ListInstanceFleetsCommand");
const ListInstanceGroupsCommand_1 = require("./commands/ListInstanceGroupsCommand");
const ListInstancesCommand_1 = require("./commands/ListInstancesCommand");
const ListNotebookExecutionsCommand_1 = require("./commands/ListNotebookExecutionsCommand");
const ListSecurityConfigurationsCommand_1 = require("./commands/ListSecurityConfigurationsCommand");
const ListStepsCommand_1 = require("./commands/ListStepsCommand");
const ListStudioSessionMappingsCommand_1 = require("./commands/ListStudioSessionMappingsCommand");
const ListStudiosCommand_1 = require("./commands/ListStudiosCommand");
const ModifyClusterCommand_1 = require("./commands/ModifyClusterCommand");
const ModifyInstanceFleetCommand_1 = require("./commands/ModifyInstanceFleetCommand");
const ModifyInstanceGroupsCommand_1 = require("./commands/ModifyInstanceGroupsCommand");
const PutAutoScalingPolicyCommand_1 = require("./commands/PutAutoScalingPolicyCommand");
const PutBlockPublicAccessConfigurationCommand_1 = require("./commands/PutBlockPublicAccessConfigurationCommand");
const PutManagedScalingPolicyCommand_1 = require("./commands/PutManagedScalingPolicyCommand");
const RemoveAutoScalingPolicyCommand_1 = require("./commands/RemoveAutoScalingPolicyCommand");
const RemoveManagedScalingPolicyCommand_1 = require("./commands/RemoveManagedScalingPolicyCommand");
const RemoveTagsCommand_1 = require("./commands/RemoveTagsCommand");
const RunJobFlowCommand_1 = require("./commands/RunJobFlowCommand");
const SetTerminationProtectionCommand_1 = require("./commands/SetTerminationProtectionCommand");
const SetVisibleToAllUsersCommand_1 = require("./commands/SetVisibleToAllUsersCommand");
const StartNotebookExecutionCommand_1 = require("./commands/StartNotebookExecutionCommand");
const StopNotebookExecutionCommand_1 = require("./commands/StopNotebookExecutionCommand");
const TerminateJobFlowsCommand_1 = require("./commands/TerminateJobFlowsCommand");
const UpdateStudioCommand_1 = require("./commands/UpdateStudioCommand");
const UpdateStudioSessionMappingCommand_1 = require("./commands/UpdateStudioSessionMappingCommand");
/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of data
 *          efficiently. Amazon EMR uses Hadoop processing combined with several AWS services to do
 *          tasks such as web indexing, data mining, log file analysis, machine learning, scientific
 *          simulation, and data warehouse management.</p>
 */
class EMR extends EMRClient_1.EMRClient {
    addInstanceFleet(args, optionsOrCb, cb) {
        const command = new AddInstanceFleetCommand_1.AddInstanceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addInstanceGroups(args, optionsOrCb, cb) {
        const command = new AddInstanceGroupsCommand_1.AddInstanceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addJobFlowSteps(args, optionsOrCb, cb) {
        const command = new AddJobFlowStepsCommand_1.AddJobFlowStepsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    cancelSteps(args, optionsOrCb, cb) {
        const command = new CancelStepsCommand_1.CancelStepsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createSecurityConfiguration(args, optionsOrCb, cb) {
        const command = new CreateSecurityConfigurationCommand_1.CreateSecurityConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStudio(args, optionsOrCb, cb) {
        const command = new CreateStudioCommand_1.CreateStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createStudioSessionMapping(args, optionsOrCb, cb) {
        const command = new CreateStudioSessionMappingCommand_1.CreateStudioSessionMappingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteSecurityConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteSecurityConfigurationCommand_1.DeleteSecurityConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStudio(args, optionsOrCb, cb) {
        const command = new DeleteStudioCommand_1.DeleteStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteStudioSessionMapping(args, optionsOrCb, cb) {
        const command = new DeleteStudioSessionMappingCommand_1.DeleteStudioSessionMappingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCluster(args, optionsOrCb, cb) {
        const command = new DescribeClusterCommand_1.DescribeClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeJobFlows(args, optionsOrCb, cb) {
        const command = new DescribeJobFlowsCommand_1.DescribeJobFlowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotebookExecution(args, optionsOrCb, cb) {
        const command = new DescribeNotebookExecutionCommand_1.DescribeNotebookExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSecurityConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeSecurityConfigurationCommand_1.DescribeSecurityConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStep(args, optionsOrCb, cb) {
        const command = new DescribeStepCommand_1.DescribeStepCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeStudio(args, optionsOrCb, cb) {
        const command = new DescribeStudioCommand_1.DescribeStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getBlockPublicAccessConfiguration(args, optionsOrCb, cb) {
        const command = new GetBlockPublicAccessConfigurationCommand_1.GetBlockPublicAccessConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getManagedScalingPolicy(args, optionsOrCb, cb) {
        const command = new GetManagedScalingPolicyCommand_1.GetManagedScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getStudioSessionMapping(args, optionsOrCb, cb) {
        const command = new GetStudioSessionMappingCommand_1.GetStudioSessionMappingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBootstrapActions(args, optionsOrCb, cb) {
        const command = new ListBootstrapActionsCommand_1.ListBootstrapActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listClusters(args, optionsOrCb, cb) {
        const command = new ListClustersCommand_1.ListClustersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstanceFleets(args, optionsOrCb, cb) {
        const command = new ListInstanceFleetsCommand_1.ListInstanceFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstanceGroups(args, optionsOrCb, cb) {
        const command = new ListInstanceGroupsCommand_1.ListInstanceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInstances(args, optionsOrCb, cb) {
        const command = new ListInstancesCommand_1.ListInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotebookExecutions(args, optionsOrCb, cb) {
        const command = new ListNotebookExecutionsCommand_1.ListNotebookExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSecurityConfigurations(args, optionsOrCb, cb) {
        const command = new ListSecurityConfigurationsCommand_1.ListSecurityConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSteps(args, optionsOrCb, cb) {
        const command = new ListStepsCommand_1.ListStepsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStudios(args, optionsOrCb, cb) {
        const command = new ListStudiosCommand_1.ListStudiosCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listStudioSessionMappings(args, optionsOrCb, cb) {
        const command = new ListStudioSessionMappingsCommand_1.ListStudioSessionMappingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyCluster(args, optionsOrCb, cb) {
        const command = new ModifyClusterCommand_1.ModifyClusterCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceFleet(args, optionsOrCb, cb) {
        const command = new ModifyInstanceFleetCommand_1.ModifyInstanceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    modifyInstanceGroups(args, optionsOrCb, cb) {
        const command = new ModifyInstanceGroupsCommand_1.ModifyInstanceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putAutoScalingPolicy(args, optionsOrCb, cb) {
        const command = new PutAutoScalingPolicyCommand_1.PutAutoScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putBlockPublicAccessConfiguration(args, optionsOrCb, cb) {
        const command = new PutBlockPublicAccessConfigurationCommand_1.PutBlockPublicAccessConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putManagedScalingPolicy(args, optionsOrCb, cb) {
        const command = new PutManagedScalingPolicyCommand_1.PutManagedScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeAutoScalingPolicy(args, optionsOrCb, cb) {
        const command = new RemoveAutoScalingPolicyCommand_1.RemoveAutoScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeManagedScalingPolicy(args, optionsOrCb, cb) {
        const command = new RemoveManagedScalingPolicyCommand_1.RemoveManagedScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeTags(args, optionsOrCb, cb) {
        const command = new RemoveTagsCommand_1.RemoveTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    runJobFlow(args, optionsOrCb, cb) {
        const command = new RunJobFlowCommand_1.RunJobFlowCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setTerminationProtection(args, optionsOrCb, cb) {
        const command = new SetTerminationProtectionCommand_1.SetTerminationProtectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setVisibleToAllUsers(args, optionsOrCb, cb) {
        const command = new SetVisibleToAllUsersCommand_1.SetVisibleToAllUsersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startNotebookExecution(args, optionsOrCb, cb) {
        const command = new StartNotebookExecutionCommand_1.StartNotebookExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopNotebookExecution(args, optionsOrCb, cb) {
        const command = new StopNotebookExecutionCommand_1.StopNotebookExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    terminateJobFlows(args, optionsOrCb, cb) {
        const command = new TerminateJobFlowsCommand_1.TerminateJobFlowsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStudio(args, optionsOrCb, cb) {
        const command = new UpdateStudioCommand_1.UpdateStudioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateStudioSessionMapping(args, optionsOrCb, cb) {
        const command = new UpdateStudioSessionMappingCommand_1.UpdateStudioSessionMappingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.EMR = EMR;
//# sourceMappingURL=EMR.js.map