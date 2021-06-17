import { __extends } from "tslib";
import { SagemakerEdgeClient } from "./SagemakerEdgeClient";
import { GetDeviceRegistrationCommand, } from "./commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommand, } from "./commands/SendHeartbeatCommand";
/**
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 */
var SagemakerEdge = /** @class */ (function (_super) {
    __extends(SagemakerEdge, _super);
    function SagemakerEdge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SagemakerEdge.prototype.getDeviceRegistration = function (args, optionsOrCb, cb) {
        var command = new GetDeviceRegistrationCommand(args);
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
    SagemakerEdge.prototype.sendHeartbeat = function (args, optionsOrCb, cb) {
        var command = new SendHeartbeatCommand(args);
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
    return SagemakerEdge;
}(SagemakerEdgeClient));
export { SagemakerEdge };
//# sourceMappingURL=SagemakerEdge.js.map