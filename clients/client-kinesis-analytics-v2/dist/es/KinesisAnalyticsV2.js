import { __extends } from "tslib";
import { KinesisAnalyticsV2Client } from "./KinesisAnalyticsV2Client";
import { AddApplicationCloudWatchLoggingOptionCommand, } from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import { AddApplicationInputCommand, } from "./commands/AddApplicationInputCommand";
import { AddApplicationInputProcessingConfigurationCommand, } from "./commands/AddApplicationInputProcessingConfigurationCommand";
import { AddApplicationOutputCommand, } from "./commands/AddApplicationOutputCommand";
import { AddApplicationReferenceDataSourceCommand, } from "./commands/AddApplicationReferenceDataSourceCommand";
import { AddApplicationVpcConfigurationCommand, } from "./commands/AddApplicationVpcConfigurationCommand";
import { CreateApplicationCommand, } from "./commands/CreateApplicationCommand";
import { CreateApplicationPresignedUrlCommand, } from "./commands/CreateApplicationPresignedUrlCommand";
import { CreateApplicationSnapshotCommand, } from "./commands/CreateApplicationSnapshotCommand";
import { DeleteApplicationCloudWatchLoggingOptionCommand, } from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommand, } from "./commands/DeleteApplicationCommand";
import { DeleteApplicationInputProcessingConfigurationCommand, } from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import { DeleteApplicationOutputCommand, } from "./commands/DeleteApplicationOutputCommand";
import { DeleteApplicationReferenceDataSourceCommand, } from "./commands/DeleteApplicationReferenceDataSourceCommand";
import { DeleteApplicationSnapshotCommand, } from "./commands/DeleteApplicationSnapshotCommand";
import { DeleteApplicationVpcConfigurationCommand, } from "./commands/DeleteApplicationVpcConfigurationCommand";
import { DescribeApplicationCommand, } from "./commands/DescribeApplicationCommand";
import { DescribeApplicationSnapshotCommand, } from "./commands/DescribeApplicationSnapshotCommand";
import { DescribeApplicationVersionCommand, } from "./commands/DescribeApplicationVersionCommand";
import { DiscoverInputSchemaCommand, } from "./commands/DiscoverInputSchemaCommand";
import { ListApplicationSnapshotsCommand, } from "./commands/ListApplicationSnapshotsCommand";
import { ListApplicationVersionsCommand, } from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommand, } from "./commands/ListApplicationsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RollbackApplicationCommand, } from "./commands/RollbackApplicationCommand";
import { StartApplicationCommand, } from "./commands/StartApplicationCommand";
import { StopApplicationCommand, } from "./commands/StopApplicationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand, } from "./commands/UpdateApplicationCommand";
import { UpdateApplicationMaintenanceConfigurationCommand, } from "./commands/UpdateApplicationMaintenanceConfigurationCommand";
/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
var KinesisAnalyticsV2 = /** @class */ (function (_super) {
    __extends(KinesisAnalyticsV2, _super);
    function KinesisAnalyticsV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KinesisAnalyticsV2.prototype.addApplicationCloudWatchLoggingOption = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.addApplicationInput = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.addApplicationInputProcessingConfiguration = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.addApplicationOutput = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.addApplicationReferenceDataSource = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.addApplicationVpcConfiguration = function (args, optionsOrCb, cb) {
        var command = new AddApplicationVpcConfigurationCommand(args);
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
    KinesisAnalyticsV2.prototype.createApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.createApplicationPresignedUrl = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationPresignedUrlCommand(args);
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
    KinesisAnalyticsV2.prototype.createApplicationSnapshot = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationSnapshotCommand(args);
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
    KinesisAnalyticsV2.prototype.deleteApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.deleteApplicationCloudWatchLoggingOption = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.deleteApplicationInputProcessingConfiguration = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.deleteApplicationOutput = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.deleteApplicationReferenceDataSource = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.deleteApplicationSnapshot = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationSnapshotCommand(args);
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
    KinesisAnalyticsV2.prototype.deleteApplicationVpcConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationVpcConfigurationCommand(args);
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
    KinesisAnalyticsV2.prototype.describeApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.describeApplicationSnapshot = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationSnapshotCommand(args);
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
    KinesisAnalyticsV2.prototype.describeApplicationVersion = function (args, optionsOrCb, cb) {
        var command = new DescribeApplicationVersionCommand(args);
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
    KinesisAnalyticsV2.prototype.discoverInputSchema = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.listApplications = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.listApplicationSnapshots = function (args, optionsOrCb, cb) {
        var command = new ListApplicationSnapshotsCommand(args);
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
    KinesisAnalyticsV2.prototype.listApplicationVersions = function (args, optionsOrCb, cb) {
        var command = new ListApplicationVersionsCommand(args);
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
    KinesisAnalyticsV2.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.rollbackApplication = function (args, optionsOrCb, cb) {
        var command = new RollbackApplicationCommand(args);
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
    KinesisAnalyticsV2.prototype.startApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.stopApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.updateApplication = function (args, optionsOrCb, cb) {
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
    KinesisAnalyticsV2.prototype.updateApplicationMaintenanceConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationMaintenanceConfigurationCommand(args);
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
    return KinesisAnalyticsV2;
}(KinesisAnalyticsV2Client));
export { KinesisAnalyticsV2 };
//# sourceMappingURL=KinesisAnalyticsV2.js.map