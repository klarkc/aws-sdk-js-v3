"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinspaceData = void 0;
const FinspaceDataClient_1 = require("./FinspaceDataClient");
const CreateChangesetCommand_1 = require("./commands/CreateChangesetCommand");
const GetProgrammaticAccessCredentialsCommand_1 = require("./commands/GetProgrammaticAccessCredentialsCommand");
const GetWorkingLocationCommand_1 = require("./commands/GetWorkingLocationCommand");
/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace environment.  </p>
 */
class FinspaceData extends FinspaceDataClient_1.FinspaceDataClient {
    createChangeset(args, optionsOrCb, cb) {
        const command = new CreateChangesetCommand_1.CreateChangesetCommand(args);
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
    getProgrammaticAccessCredentials(args, optionsOrCb, cb) {
        const command = new GetProgrammaticAccessCredentialsCommand_1.GetProgrammaticAccessCredentialsCommand(args);
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
    getWorkingLocation(args, optionsOrCb, cb) {
        const command = new GetWorkingLocationCommand_1.GetWorkingLocationCommand(args);
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
exports.FinspaceData = FinspaceData;
//# sourceMappingURL=FinspaceData.js.map