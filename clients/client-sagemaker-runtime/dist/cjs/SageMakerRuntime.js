"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SageMakerRuntime = void 0;
const SageMakerRuntimeClient_1 = require("./SageMakerRuntimeClient");
const InvokeEndpointCommand_1 = require("./commands/InvokeEndpointCommand");
/**
 * <p> The Amazon SageMaker runtime API. </p>
 */
class SageMakerRuntime extends SageMakerRuntimeClient_1.SageMakerRuntimeClient {
    invokeEndpoint(args, optionsOrCb, cb) {
        const command = new InvokeEndpointCommand_1.InvokeEndpointCommand(args);
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
exports.SageMakerRuntime = SageMakerRuntime;
//# sourceMappingURL=SageMakerRuntime.js.map