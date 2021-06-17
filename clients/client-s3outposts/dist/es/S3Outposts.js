import { __extends } from "tslib";
import { S3OutpostsClient } from "./S3OutpostsClient";
import { CreateEndpointCommand, } from "./commands/CreateEndpointCommand";
import { DeleteEndpointCommand, } from "./commands/DeleteEndpointCommand";
import { ListEndpointsCommand, } from "./commands/ListEndpointsCommand";
/**
 * <p>Amazon S3 on Outposts provides access to S3 on Outposts operations.</p>
 */
var S3Outposts = /** @class */ (function (_super) {
    __extends(S3Outposts, _super);
    function S3Outposts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3Outposts.prototype.createEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateEndpointCommand(args);
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
    S3Outposts.prototype.deleteEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteEndpointCommand(args);
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
    S3Outposts.prototype.listEndpoints = function (args, optionsOrCb, cb) {
        var command = new ListEndpointsCommand(args);
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
    return S3Outposts;
}(S3OutpostsClient));
export { S3Outposts };
//# sourceMappingURL=S3Outposts.js.map