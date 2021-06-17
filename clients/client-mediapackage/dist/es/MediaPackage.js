import { __extends } from "tslib";
import { MediaPackageClient } from "./MediaPackageClient";
import { ConfigureLogsCommand, } from "./commands/ConfigureLogsCommand";
import { CreateChannelCommand, } from "./commands/CreateChannelCommand";
import { CreateHarvestJobCommand, } from "./commands/CreateHarvestJobCommand";
import { CreateOriginEndpointCommand, } from "./commands/CreateOriginEndpointCommand";
import { DeleteChannelCommand, } from "./commands/DeleteChannelCommand";
import { DeleteOriginEndpointCommand, } from "./commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommand, } from "./commands/DescribeChannelCommand";
import { DescribeHarvestJobCommand, } from "./commands/DescribeHarvestJobCommand";
import { DescribeOriginEndpointCommand, } from "./commands/DescribeOriginEndpointCommand";
import { ListChannelsCommand, } from "./commands/ListChannelsCommand";
import { ListHarvestJobsCommand, } from "./commands/ListHarvestJobsCommand";
import { ListOriginEndpointsCommand, } from "./commands/ListOriginEndpointsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RotateChannelCredentialsCommand, } from "./commands/RotateChannelCredentialsCommand";
import { RotateIngestEndpointCredentialsCommand, } from "./commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateChannelCommand, } from "./commands/UpdateChannelCommand";
import { UpdateOriginEndpointCommand, } from "./commands/UpdateOriginEndpointCommand";
/**
 * AWS Elemental MediaPackage
 */
var MediaPackage = /** @class */ (function (_super) {
    __extends(MediaPackage, _super);
    function MediaPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPackage.prototype.configureLogs = function (args, optionsOrCb, cb) {
        var command = new ConfigureLogsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.createChannel = function (args, optionsOrCb, cb) {
        var command = new CreateChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.createHarvestJob = function (args, optionsOrCb, cb) {
        var command = new CreateHarvestJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.createOriginEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateOriginEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.deleteChannel = function (args, optionsOrCb, cb) {
        var command = new DeleteChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.deleteOriginEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteOriginEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.describeChannel = function (args, optionsOrCb, cb) {
        var command = new DescribeChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.describeHarvestJob = function (args, optionsOrCb, cb) {
        var command = new DescribeHarvestJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.describeOriginEndpoint = function (args, optionsOrCb, cb) {
        var command = new DescribeOriginEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.listChannels = function (args, optionsOrCb, cb) {
        var command = new ListChannelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.listHarvestJobs = function (args, optionsOrCb, cb) {
        var command = new ListHarvestJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.listOriginEndpoints = function (args, optionsOrCb, cb) {
        var command = new ListOriginEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    MediaPackage.prototype.rotateChannelCredentials = function (args, optionsOrCb, cb) {
        var command = new RotateChannelCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.rotateIngestEndpointCredentials = function (args, optionsOrCb, cb) {
        var command = new RotateIngestEndpointCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    MediaPackage.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    MediaPackage.prototype.updateChannel = function (args, optionsOrCb, cb) {
        var command = new UpdateChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackage.prototype.updateOriginEndpoint = function (args, optionsOrCb, cb) {
        var command = new UpdateOriginEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return MediaPackage;
}(MediaPackageClient));
export { MediaPackage };
//# sourceMappingURL=MediaPackage.js.map