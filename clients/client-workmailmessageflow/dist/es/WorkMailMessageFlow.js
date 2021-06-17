import { __extends } from "tslib";
import { WorkMailMessageFlowClient } from "./WorkMailMessageFlowClient";
import { GetRawMessageContentCommand, } from "./commands/GetRawMessageContentCommand";
import { PutRawMessageContentCommand, } from "./commands/PutRawMessageContentCommand";
/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
var WorkMailMessageFlow = /** @class */ (function (_super) {
    __extends(WorkMailMessageFlow, _super);
    function WorkMailMessageFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkMailMessageFlow.prototype.getRawMessageContent = function (args, optionsOrCb, cb) {
        var command = new GetRawMessageContentCommand(args);
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
    WorkMailMessageFlow.prototype.putRawMessageContent = function (args, optionsOrCb, cb) {
        var command = new PutRawMessageContentCommand(args);
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
    return WorkMailMessageFlow;
}(WorkMailMessageFlowClient));
export { WorkMailMessageFlow };
//# sourceMappingURL=WorkMailMessageFlow.js.map