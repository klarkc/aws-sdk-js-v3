import { __extends } from "tslib";
import { IoTSecureTunnelingClient } from "./IoTSecureTunnelingClient";
import { CloseTunnelCommand } from "./commands/CloseTunnelCommand";
import { DescribeTunnelCommand, } from "./commands/DescribeTunnelCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTunnelsCommand } from "./commands/ListTunnelsCommand";
import { OpenTunnelCommand } from "./commands/OpenTunnelCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <fullname>AWS IoT Secure Tunneling</fullname>
 * 		       <p>AWS IoT Secure Tunnling enables you to create remote connections to devices
 * 			deployed in the field.</p>
 *
 * 		       <p>For more information about how AWS IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">AWS IoT Secure Tunneling</a>.</p>
 */
var IoTSecureTunneling = /** @class */ (function (_super) {
    __extends(IoTSecureTunneling, _super);
    function IoTSecureTunneling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IoTSecureTunneling.prototype.closeTunnel = function (args, optionsOrCb, cb) {
        var command = new CloseTunnelCommand(args);
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
    IoTSecureTunneling.prototype.describeTunnel = function (args, optionsOrCb, cb) {
        var command = new DescribeTunnelCommand(args);
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
    IoTSecureTunneling.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    IoTSecureTunneling.prototype.listTunnels = function (args, optionsOrCb, cb) {
        var command = new ListTunnelsCommand(args);
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
    IoTSecureTunneling.prototype.openTunnel = function (args, optionsOrCb, cb) {
        var command = new OpenTunnelCommand(args);
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
    IoTSecureTunneling.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    IoTSecureTunneling.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    return IoTSecureTunneling;
}(IoTSecureTunnelingClient));
export { IoTSecureTunneling };
//# sourceMappingURL=IoTSecureTunneling.js.map