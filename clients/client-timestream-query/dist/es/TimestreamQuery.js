import { __extends } from "tslib";
import { TimestreamQueryClient } from "./TimestreamQueryClient";
import { CancelQueryCommand } from "./commands/CancelQueryCommand";
import { DescribeEndpointsCommand, } from "./commands/DescribeEndpointsCommand";
import { QueryCommand } from "./commands/QueryCommand";
/**
 * <p>
 *
 *         </p>
 */
var TimestreamQuery = /** @class */ (function (_super) {
    __extends(TimestreamQuery, _super);
    function TimestreamQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimestreamQuery.prototype.cancelQuery = function (args, optionsOrCb, cb) {
        var command = new CancelQueryCommand(args);
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
    TimestreamQuery.prototype.describeEndpoints = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointsCommand(args);
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
    TimestreamQuery.prototype.query = function (args, optionsOrCb, cb) {
        var command = new QueryCommand(args);
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
    return TimestreamQuery;
}(TimestreamQueryClient));
export { TimestreamQuery };
//# sourceMappingURL=TimestreamQuery.js.map