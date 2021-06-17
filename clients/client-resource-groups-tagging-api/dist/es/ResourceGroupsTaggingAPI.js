import { __extends } from "tslib";
import { ResourceGroupsTaggingAPIClient } from "./ResourceGroupsTaggingAPIClient";
import { DescribeReportCreationCommand, } from "./commands/DescribeReportCreationCommand";
import { GetComplianceSummaryCommand, } from "./commands/GetComplianceSummaryCommand";
import { GetResourcesCommand, } from "./commands/GetResourcesCommand";
import { GetTagKeysCommand } from "./commands/GetTagKeysCommand";
import { GetTagValuesCommand, } from "./commands/GetTagValuesCommand";
import { StartReportCreationCommand, } from "./commands/StartReportCreationCommand";
import { TagResourcesCommand, } from "./commands/TagResourcesCommand";
import { UntagResourcesCommand, } from "./commands/UntagResourcesCommand";
/**
 * <fullname>Resource Groups Tagging API</fullname>
 */
var ResourceGroupsTaggingAPI = /** @class */ (function (_super) {
    __extends(ResourceGroupsTaggingAPI, _super);
    function ResourceGroupsTaggingAPI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceGroupsTaggingAPI.prototype.describeReportCreation = function (args, optionsOrCb, cb) {
        var command = new DescribeReportCreationCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.getComplianceSummary = function (args, optionsOrCb, cb) {
        var command = new GetComplianceSummaryCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.getResources = function (args, optionsOrCb, cb) {
        var command = new GetResourcesCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.getTagKeys = function (args, optionsOrCb, cb) {
        var command = new GetTagKeysCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.getTagValues = function (args, optionsOrCb, cb) {
        var command = new GetTagValuesCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.startReportCreation = function (args, optionsOrCb, cb) {
        var command = new StartReportCreationCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.tagResources = function (args, optionsOrCb, cb) {
        var command = new TagResourcesCommand(args);
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
    ResourceGroupsTaggingAPI.prototype.untagResources = function (args, optionsOrCb, cb) {
        var command = new UntagResourcesCommand(args);
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
    return ResourceGroupsTaggingAPI;
}(ResourceGroupsTaggingAPIClient));
export { ResourceGroupsTaggingAPI };
//# sourceMappingURL=ResourceGroupsTaggingAPI.js.map