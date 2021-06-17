import { __extends } from "tslib";
import { IoT1ClickDevicesServiceClient } from "./IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeCommand, } from "./commands/ClaimDevicesByClaimCodeCommand";
import { DescribeDeviceCommand, } from "./commands/DescribeDeviceCommand";
import { FinalizeDeviceClaimCommand, } from "./commands/FinalizeDeviceClaimCommand";
import { GetDeviceMethodsCommand, } from "./commands/GetDeviceMethodsCommand";
import { InitiateDeviceClaimCommand, } from "./commands/InitiateDeviceClaimCommand";
import { InvokeDeviceMethodCommand, } from "./commands/InvokeDeviceMethodCommand";
import { ListDeviceEventsCommand, } from "./commands/ListDeviceEventsCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnclaimDeviceCommand, } from "./commands/UnclaimDeviceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateDeviceStateCommand, } from "./commands/UpdateDeviceStateCommand";
/**
 * <p>Describes all of the AWS IoT 1-Click device-related API operations for the service.
 *  Also provides sample requests, responses, and errors for the supported web services
 *  protocols.</p>
 */
var IoT1ClickDevicesService = /** @class */ (function (_super) {
    __extends(IoT1ClickDevicesService, _super);
    function IoT1ClickDevicesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoT1ClickDevicesService.prototype.claimDevicesByClaimCode = function (args, optionsOrCb, cb) {
        var command = new ClaimDevicesByClaimCodeCommand(args);
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
    IoT1ClickDevicesService.prototype.describeDevice = function (args, optionsOrCb, cb) {
        var command = new DescribeDeviceCommand(args);
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
    IoT1ClickDevicesService.prototype.finalizeDeviceClaim = function (args, optionsOrCb, cb) {
        var command = new FinalizeDeviceClaimCommand(args);
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
    IoT1ClickDevicesService.prototype.getDeviceMethods = function (args, optionsOrCb, cb) {
        var command = new GetDeviceMethodsCommand(args);
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
    IoT1ClickDevicesService.prototype.initiateDeviceClaim = function (args, optionsOrCb, cb) {
        var command = new InitiateDeviceClaimCommand(args);
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
    IoT1ClickDevicesService.prototype.invokeDeviceMethod = function (args, optionsOrCb, cb) {
        var command = new InvokeDeviceMethodCommand(args);
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
    IoT1ClickDevicesService.prototype.listDeviceEvents = function (args, optionsOrCb, cb) {
        var command = new ListDeviceEventsCommand(args);
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
    IoT1ClickDevicesService.prototype.listDevices = function (args, optionsOrCb, cb) {
        var command = new ListDevicesCommand(args);
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
    IoT1ClickDevicesService.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    IoT1ClickDevicesService.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    IoT1ClickDevicesService.prototype.unclaimDevice = function (args, optionsOrCb, cb) {
        var command = new UnclaimDeviceCommand(args);
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
    IoT1ClickDevicesService.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    IoT1ClickDevicesService.prototype.updateDeviceState = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceStateCommand(args);
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
    return IoT1ClickDevicesService;
}(IoT1ClickDevicesServiceClient));
export { IoT1ClickDevicesService };
//# sourceMappingURL=IoT1ClickDevicesService.js.map