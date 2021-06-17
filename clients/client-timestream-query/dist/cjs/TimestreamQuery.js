"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestreamQuery = void 0;
const TimestreamQueryClient_1 = require("./TimestreamQueryClient");
const CancelQueryCommand_1 = require("./commands/CancelQueryCommand");
const DescribeEndpointsCommand_1 = require("./commands/DescribeEndpointsCommand");
const QueryCommand_1 = require("./commands/QueryCommand");
/**
 * <p>
 *
 *         </p>
 */
class TimestreamQuery extends TimestreamQueryClient_1.TimestreamQueryClient {
    cancelQuery(args, optionsOrCb, cb) {
        const command = new CancelQueryCommand_1.CancelQueryCommand(args);
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
    describeEndpoints(args, optionsOrCb, cb) {
        const command = new DescribeEndpointsCommand_1.DescribeEndpointsCommand(args);
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
    query(args, optionsOrCb, cb) {
        const command = new QueryCommand_1.QueryCommand(args);
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
exports.TimestreamQuery = TimestreamQuery;
//# sourceMappingURL=TimestreamQuery.js.map