import { __extends } from "tslib";
import { FinspaceDataClient } from "./FinspaceDataClient";
import { CreateChangesetCommand, } from "./commands/CreateChangesetCommand";
import { GetProgrammaticAccessCredentialsCommand, } from "./commands/GetProgrammaticAccessCredentialsCommand";
import { GetWorkingLocationCommand, } from "./commands/GetWorkingLocationCommand";
/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace environment.  </p>
 */
var FinspaceData = /** @class */ (function (_super) {
    __extends(FinspaceData, _super);
    function FinspaceData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinspaceData.prototype.createChangeset = function (args, optionsOrCb, cb) {
        var command = new CreateChangesetCommand(args);
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
    FinspaceData.prototype.getProgrammaticAccessCredentials = function (args, optionsOrCb, cb) {
        var command = new GetProgrammaticAccessCredentialsCommand(args);
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
    FinspaceData.prototype.getWorkingLocation = function (args, optionsOrCb, cb) {
        var command = new GetWorkingLocationCommand(args);
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
    return FinspaceData;
}(FinspaceDataClient));
export { FinspaceData };
//# sourceMappingURL=FinspaceData.js.map