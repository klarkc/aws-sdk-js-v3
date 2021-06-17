"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mgn = void 0;
const MgnClient_1 = require("./MgnClient");
const ChangeServerLifeCycleStateCommand_1 = require("./commands/ChangeServerLifeCycleStateCommand");
const CreateReplicationConfigurationTemplateCommand_1 = require("./commands/CreateReplicationConfigurationTemplateCommand");
const DeleteJobCommand_1 = require("./commands/DeleteJobCommand");
const DeleteReplicationConfigurationTemplateCommand_1 = require("./commands/DeleteReplicationConfigurationTemplateCommand");
const DeleteSourceServerCommand_1 = require("./commands/DeleteSourceServerCommand");
const DescribeJobLogItemsCommand_1 = require("./commands/DescribeJobLogItemsCommand");
const DescribeJobsCommand_1 = require("./commands/DescribeJobsCommand");
const DescribeReplicationConfigurationTemplatesCommand_1 = require("./commands/DescribeReplicationConfigurationTemplatesCommand");
const DescribeSourceServersCommand_1 = require("./commands/DescribeSourceServersCommand");
const DisconnectFromServiceCommand_1 = require("./commands/DisconnectFromServiceCommand");
const FinalizeCutoverCommand_1 = require("./commands/FinalizeCutoverCommand");
const GetLaunchConfigurationCommand_1 = require("./commands/GetLaunchConfigurationCommand");
const GetReplicationConfigurationCommand_1 = require("./commands/GetReplicationConfigurationCommand");
const InitializeServiceCommand_1 = require("./commands/InitializeServiceCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const MarkAsArchivedCommand_1 = require("./commands/MarkAsArchivedCommand");
const RetryDataReplicationCommand_1 = require("./commands/RetryDataReplicationCommand");
const StartCutoverCommand_1 = require("./commands/StartCutoverCommand");
const StartTestCommand_1 = require("./commands/StartTestCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TerminateTargetInstancesCommand_1 = require("./commands/TerminateTargetInstancesCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateLaunchConfigurationCommand_1 = require("./commands/UpdateLaunchConfigurationCommand");
const UpdateReplicationConfigurationCommand_1 = require("./commands/UpdateReplicationConfigurationCommand");
const UpdateReplicationConfigurationTemplateCommand_1 = require("./commands/UpdateReplicationConfigurationTemplateCommand");
/**
 * <p>The Application Migration Service service.</p>
 */
class Mgn extends MgnClient_1.MgnClient {
    changeServerLifeCycleState(args, optionsOrCb, cb) {
        const command = new ChangeServerLifeCycleStateCommand_1.ChangeServerLifeCycleStateCommand(args);
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
    createReplicationConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new CreateReplicationConfigurationTemplateCommand_1.CreateReplicationConfigurationTemplateCommand(args);
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
    deleteJob(args, optionsOrCb, cb) {
        const command = new DeleteJobCommand_1.DeleteJobCommand(args);
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
    deleteReplicationConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new DeleteReplicationConfigurationTemplateCommand_1.DeleteReplicationConfigurationTemplateCommand(args);
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
    deleteSourceServer(args, optionsOrCb, cb) {
        const command = new DeleteSourceServerCommand_1.DeleteSourceServerCommand(args);
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
    describeJobLogItems(args, optionsOrCb, cb) {
        const command = new DescribeJobLogItemsCommand_1.DescribeJobLogItemsCommand(args);
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
    describeJobs(args, optionsOrCb, cb) {
        const command = new DescribeJobsCommand_1.DescribeJobsCommand(args);
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
    describeReplicationConfigurationTemplates(args, optionsOrCb, cb) {
        const command = new DescribeReplicationConfigurationTemplatesCommand_1.DescribeReplicationConfigurationTemplatesCommand(args);
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
    describeSourceServers(args, optionsOrCb, cb) {
        const command = new DescribeSourceServersCommand_1.DescribeSourceServersCommand(args);
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
    disconnectFromService(args, optionsOrCb, cb) {
        const command = new DisconnectFromServiceCommand_1.DisconnectFromServiceCommand(args);
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
    finalizeCutover(args, optionsOrCb, cb) {
        const command = new FinalizeCutoverCommand_1.FinalizeCutoverCommand(args);
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
    getLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new GetLaunchConfigurationCommand_1.GetLaunchConfigurationCommand(args);
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
    getReplicationConfiguration(args, optionsOrCb, cb) {
        const command = new GetReplicationConfigurationCommand_1.GetReplicationConfigurationCommand(args);
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
    initializeService(args, optionsOrCb, cb) {
        const command = new InitializeServiceCommand_1.InitializeServiceCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    markAsArchived(args, optionsOrCb, cb) {
        const command = new MarkAsArchivedCommand_1.MarkAsArchivedCommand(args);
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
    retryDataReplication(args, optionsOrCb, cb) {
        const command = new RetryDataReplicationCommand_1.RetryDataReplicationCommand(args);
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
    startCutover(args, optionsOrCb, cb) {
        const command = new StartCutoverCommand_1.StartCutoverCommand(args);
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
    startTest(args, optionsOrCb, cb) {
        const command = new StartTestCommand_1.StartTestCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    terminateTargetInstances(args, optionsOrCb, cb) {
        const command = new TerminateTargetInstancesCommand_1.TerminateTargetInstancesCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateLaunchConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateLaunchConfigurationCommand_1.UpdateLaunchConfigurationCommand(args);
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
    updateReplicationConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateReplicationConfigurationCommand_1.UpdateReplicationConfigurationCommand(args);
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
    updateReplicationConfigurationTemplate(args, optionsOrCb, cb) {
        const command = new UpdateReplicationConfigurationTemplateCommand_1.UpdateReplicationConfigurationTemplateCommand(args);
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
exports.Mgn = Mgn;
//# sourceMappingURL=Mgn.js.map