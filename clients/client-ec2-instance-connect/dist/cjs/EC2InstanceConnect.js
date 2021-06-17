"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EC2InstanceConnect = void 0;
const EC2InstanceConnectClient_1 = require("./EC2InstanceConnectClient");
const SendSSHPublicKeyCommand_1 = require("./commands/SendSSHPublicKeyCommand");
const SendSerialConsoleSSHPublicKeyCommand_1 = require("./commands/SendSerialConsoleSSHPublicKeyCommand");
/**
 * <p>Amazon EC2 Instance Connect enables system administrators to publish one-time use SSH
 *             public keys to EC2, providing users a simple and secure way to connect to their
 *             instances.</p>
 */
class EC2InstanceConnect extends EC2InstanceConnectClient_1.EC2InstanceConnectClient {
    sendSerialConsoleSSHPublicKey(args, optionsOrCb, cb) {
        const command = new SendSerialConsoleSSHPublicKeyCommand_1.SendSerialConsoleSSHPublicKeyCommand(args);
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
    sendSSHPublicKey(args, optionsOrCb, cb) {
        const command = new SendSSHPublicKeyCommand_1.SendSSHPublicKeyCommand(args);
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
exports.EC2InstanceConnect = EC2InstanceConnect;
//# sourceMappingURL=EC2InstanceConnect.js.map