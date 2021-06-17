import { __extends } from "tslib";
import { MediaPackageVodClient } from "./MediaPackageVodClient";
import { ConfigureLogsCommand, } from "./commands/ConfigureLogsCommand";
import { CreateAssetCommand } from "./commands/CreateAssetCommand";
import { CreatePackagingConfigurationCommand, } from "./commands/CreatePackagingConfigurationCommand";
import { CreatePackagingGroupCommand, } from "./commands/CreatePackagingGroupCommand";
import { DeleteAssetCommand } from "./commands/DeleteAssetCommand";
import { DeletePackagingConfigurationCommand, } from "./commands/DeletePackagingConfigurationCommand";
import { DeletePackagingGroupCommand, } from "./commands/DeletePackagingGroupCommand";
import { DescribeAssetCommand, } from "./commands/DescribeAssetCommand";
import { DescribePackagingConfigurationCommand, } from "./commands/DescribePackagingConfigurationCommand";
import { DescribePackagingGroupCommand, } from "./commands/DescribePackagingGroupCommand";
import { ListAssetsCommand } from "./commands/ListAssetsCommand";
import { ListPackagingConfigurationsCommand, } from "./commands/ListPackagingConfigurationsCommand";
import { ListPackagingGroupsCommand, } from "./commands/ListPackagingGroupsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdatePackagingGroupCommand, } from "./commands/UpdatePackagingGroupCommand";
/**
 * AWS Elemental MediaPackage VOD
 */
var MediaPackageVod = /** @class */ (function (_super) {
    __extends(MediaPackageVod, _super);
    function MediaPackageVod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPackageVod.prototype.configureLogs = function (args, optionsOrCb, cb) {
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
    MediaPackageVod.prototype.createAsset = function (args, optionsOrCb, cb) {
        var command = new CreateAssetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.createPackagingConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreatePackagingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.createPackagingGroup = function (args, optionsOrCb, cb) {
        var command = new CreatePackagingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.deleteAsset = function (args, optionsOrCb, cb) {
        var command = new DeleteAssetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.deletePackagingConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeletePackagingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.deletePackagingGroup = function (args, optionsOrCb, cb) {
        var command = new DeletePackagingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.describeAsset = function (args, optionsOrCb, cb) {
        var command = new DescribeAssetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.describePackagingConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribePackagingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.describePackagingGroup = function (args, optionsOrCb, cb) {
        var command = new DescribePackagingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.listAssets = function (args, optionsOrCb, cb) {
        var command = new ListAssetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.listPackagingConfigurations = function (args, optionsOrCb, cb) {
        var command = new ListPackagingConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.listPackagingGroups = function (args, optionsOrCb, cb) {
        var command = new ListPackagingGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MediaPackageVod.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    MediaPackageVod.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    MediaPackageVod.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    MediaPackageVod.prototype.updatePackagingGroup = function (args, optionsOrCb, cb) {
        var command = new UpdatePackagingGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return MediaPackageVod;
}(MediaPackageVodClient));
export { MediaPackageVod };
//# sourceMappingURL=MediaPackageVod.js.map