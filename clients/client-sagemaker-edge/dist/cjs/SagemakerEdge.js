"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerEdge = void 0;
const SagemakerEdgeClient_1 = require("./SagemakerEdgeClient");
const GetDeviceRegistrationCommand_1 = require("./commands/GetDeviceRegistrationCommand");
const SendHeartbeatCommand_1 = require("./commands/SendHeartbeatCommand");
/**
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 */
class SagemakerEdge extends SagemakerEdgeClient_1.SagemakerEdgeClient {
    getDeviceRegistration(args, optionsOrCb, cb) {
        const command = new GetDeviceRegistrationCommand_1.GetDeviceRegistrationCommand(args);
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
    sendHeartbeat(args, optionsOrCb, cb) {
        const command = new SendHeartbeatCommand_1.SendHeartbeatCommand(args);
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
exports.SagemakerEdge = SagemakerEdge;
//# sourceMappingURL=SagemakerEdge.js.map