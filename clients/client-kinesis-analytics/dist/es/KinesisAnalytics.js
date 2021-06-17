import { __extends } from "tslib";
import { KinesisAnalyticsClient } from "./KinesisAnalyticsClient";
import { AddApplicationCloudWatchLoggingOptionCommand, } from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import { AddApplicationInputCommand, } from "./commands/AddApplicationInputCommand";
import { AddApplicationInputProcessingConfigurationCommand, } from "./commands/AddApplicationInputProcessingConfigurationCommand";
import { AddApplicationOutputCommand, } from "./commands/AddApplicationOutputCommand";
import { AddApplicationReferenceDataSourceCommand, } from "./commands/AddApplicationReferenceDataSourceCommand";
import { CreateApplicationCommand, } from "./commands/CreateApplicationCommand";
import { DeleteApplicationCloudWatchLoggingOptionCommand, } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommand, } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommand, } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommand, } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommand, } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DescribeApplicationCommand, } from "./commands/DescribeApplicationCommand";
import { DiscoverInputSchemaCommand, } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationsCommand, } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { StartApplicationCommand, } from "./commands/StartApplicationCommand";
import { StopApplicationCommand, } from "./commands/StopApplicationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand, } from "./commands/UpdateApplicationCommand";
/**
 * <fullname>Amazon Kinesis Analytics</fullname>
 *         <p>
 *             <b>Overview</b>
 *          </p>
 *         <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>This is the <i>Amazon Kinesis Analytics v1 API Reference</i>.
 *             The Amazon Kinesis Analytics Developer Guide provides additional information.
 *             </p>
 */
var KinesisAnalytics = /** @class */ (function (_super) {
    __extends(KinesisAnalytics, _super);
    function KinesisAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KinesisAnalytics.prototype.addApplicationCloudWatchLoggingOption = function (args, optionsOrCb, cb) {
        var command = new AddApplicationCloudWatchLoggingOptionCommand(args);
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
    KinesisAnalytics.prototype.addApplicationInput = function (args, optionsOrCb, cb) {
        var command = new AddApplicationInputCommand(args);
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
    KinesisAnalytics.prototype.addApplicationInputProcessingConfiguration = function (args, optionsOrCb, cb) {
        var command = new AddApplicationInputProcessingConfigurationCommand(args);
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
    KinesisAnalytics.prototype.addApplicationOutput = function (args, optionsOrCb, cb) {
        var command = new AddApplicationOutputCommand(args);
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
    KinesisAnalytics.prototype.addApplicationReferenceDataSource = function (args, optionsOrCb, cb) {
        var command = new AddApplicationReferenceDataSourceCommand(args);
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
    KinesisAnalytics.prototype.createApplication = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationCommand(args);
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
    KinesisAnalytics.prototype.deleteApplication = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationCommand(args);
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
    KinesisAnalytics.prototype.deleteApplicationCloudWatchLoggingOption = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationCloudWatchLoggingOptionCommand(args);
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
    KinesisAnalytics.prototype.deleteApplicationInputProcessingConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationInputProcessingConfigurationCommand(args);
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
    KinesisAnalytics.prototype.deleteApplicationOutput = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationOutputCommand(args);
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
    KinesisAnalytics.prototype.deleteApplicationReferenceDataSource = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationReferenceDataSourceCommand(args);
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
    KinesisAnalytics.prototype.describeApplication = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationCommand(args);
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
    KinesisAnalytics.prototype.discoverInputSchema = function (args, optionsOrCb, cb) {
        var command = new DiscoverInputSchemaCommand(args);
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
    KinesisAnalytics.prototype.listApplications = function (args, optionsOrCb, cb) {
        var command = new ListApplicationsCommand(args);
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
    KinesisAnalytics.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalytics.prototype.startApplication = function (args, optionsOrCb, cb) {
        var command = new StartApplicationCommand(args);
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
    KinesisAnalytics.prototype.stopApplication = function (args, optionsOrCb, cb) {
        var command = new StopApplicationCommand(args);
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
    KinesisAnalytics.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalytics.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalytics.prototype.updateApplication = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationCommand(args);
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
    return KinesisAnalytics;
}(KinesisAnalyticsClient));
export { KinesisAnalytics };
//# sourceMappingURL=KinesisAnalytics.js.map