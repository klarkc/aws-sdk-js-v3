"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkMailMessageFlow = void 0;
const WorkMailMessageFlowClient_1 = require("./WorkMailMessageFlowClient");
const GetRawMessageContentCommand_1 = require("./commands/GetRawMessageContentCommand");
const PutRawMessageContentCommand_1 = require("./commands/PutRawMessageContentCommand");
/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
class WorkMailMessageFlow extends WorkMailMessageFlowClient_1.WorkMailMessageFlowClient {
    getRawMessageContent(args, optionsOrCb, cb) {
        const command = new GetRawMessageContentCommand_1.GetRawMessageContentCommand(args);
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
    putRawMessageContent(args, optionsOrCb, cb) {
        const command = new PutRawMessageContentCommand_1.PutRawMessageContentCommand(args);
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
exports.WorkMailMessageFlow = WorkMailMessageFlow;
//# sourceMappingURL=WorkMailMessageFlow.js.map