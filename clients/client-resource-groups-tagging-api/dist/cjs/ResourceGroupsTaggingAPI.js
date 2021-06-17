"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGroupsTaggingAPI = void 0;
const ResourceGroupsTaggingAPIClient_1 = require("./ResourceGroupsTaggingAPIClient");
const DescribeReportCreationCommand_1 = require("./commands/DescribeReportCreationCommand");
const GetComplianceSummaryCommand_1 = require("./commands/GetComplianceSummaryCommand");
const GetResourcesCommand_1 = require("./commands/GetResourcesCommand");
const GetTagKeysCommand_1 = require("./commands/GetTagKeysCommand");
const GetTagValuesCommand_1 = require("./commands/GetTagValuesCommand");
const StartReportCreationCommand_1 = require("./commands/StartReportCreationCommand");
const TagResourcesCommand_1 = require("./commands/TagResourcesCommand");
const UntagResourcesCommand_1 = require("./commands/UntagResourcesCommand");
/**
 * <fullname>Resource Groups Tagging API</fullname>
 */
class ResourceGroupsTaggingAPI extends ResourceGroupsTaggingAPIClient_1.ResourceGroupsTaggingAPIClient {
    describeReportCreation(args, optionsOrCb, cb) {
        const command = new DescribeReportCreationCommand_1.DescribeReportCreationCommand(args);
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
    getComplianceSummary(args, optionsOrCb, cb) {
        const command = new GetComplianceSummaryCommand_1.GetComplianceSummaryCommand(args);
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
    getResources(args, optionsOrCb, cb) {
        const command = new GetResourcesCommand_1.GetResourcesCommand(args);
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
    getTagKeys(args, optionsOrCb, cb) {
        const command = new GetTagKeysCommand_1.GetTagKeysCommand(args);
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
    getTagValues(args, optionsOrCb, cb) {
        const command = new GetTagValuesCommand_1.GetTagValuesCommand(args);
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
    startReportCreation(args, optionsOrCb, cb) {
        const command = new StartReportCreationCommand_1.StartReportCreationCommand(args);
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
    tagResources(args, optionsOrCb, cb) {
        const command = new TagResourcesCommand_1.TagResourcesCommand(args);
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
    untagResources(args, optionsOrCb, cb) {
        const command = new UntagResourcesCommand_1.UntagResourcesCommand(args);
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
exports.ResourceGroupsTaggingAPI = ResourceGroupsTaggingAPI;
//# sourceMappingURL=ResourceGroupsTaggingAPI.js.map