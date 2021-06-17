import { __extends } from "tslib";
import { EC2InstanceConnectClient } from "./EC2InstanceConnectClient";
import { SendSSHPublicKeyCommand, } from "./commands/SendSSHPublicKeyCommand";
import { SendSerialConsoleSSHPublicKeyCommand, } from "./commands/SendSerialConsoleSSHPublicKeyCommand";
/**
 * <p>Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH
 *             public keys to EC2, providing users a simple and secure way to connect to their
 *             instances.</p>
 */
var EC2InstanceConnect = /** @class */ (function (_super) {
    __extends(EC2InstanceConnect, _super);
    function EC2InstanceConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EC2InstanceConnect.prototype.sendSerialConsoleSSHPublicKey = function (args, optionsOrCb, cb) {
        var command = new SendSerialConsoleSSHPublicKeyCommand(args);
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
    EC2InstanceConnect.prototype.sendSSHPublicKey = function (args, optionsOrCb, cb) {
        var command = new SendSSHPublicKeyCommand(args);
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
    return EC2InstanceConnect;
}(EC2InstanceConnectClient));
export { EC2InstanceConnect };
//# sourceMappingURL=EC2InstanceConnect.js.map