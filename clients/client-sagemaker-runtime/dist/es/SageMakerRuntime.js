import { __extends } from "tslib";
import { SageMakerRuntimeClient } from "./SageMakerRuntimeClient";
import { InvokeEndpointCommand, } from "./commands/InvokeEndpointCommand";
/**
 * <p> The Amazon SageMaker runtime API. </p>
 */
var SageMakerRuntime = /** @class */ (function (_super) {
    __extends(SageMakerRuntime, _super);
    function SageMakerRuntime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SageMakerRuntime.prototype.invokeEndpoint = function (args, optionsOrCb, cb) {
        var command = new InvokeEndpointCommand(args);
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
    return SageMakerRuntime;
}(SageMakerRuntimeClient));
export { SageMakerRuntime };
//# sourceMappingURL=SageMakerRuntime.js.map