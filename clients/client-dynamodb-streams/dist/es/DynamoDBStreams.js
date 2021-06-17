import { __extends } from "tslib";
import { DynamoDBStreamsClient } from "./DynamoDBStreamsClient";
import { DescribeStreamCommand, } from "./commands/DescribeStreamCommand";
import { GetRecordsCommand } from "./commands/GetRecordsCommand";
import { GetShardIteratorCommand, } from "./commands/GetShardIteratorCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";
/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *          <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing
 *          stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing
 *             Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer
 *          Guide.</p>
 */
var DynamoDBStreams = /** @class */ (function (_super) {
    __extends(DynamoDBStreams, _super);
    function DynamoDBStreams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynamoDBStreams.prototype.describeStream = function (args, optionsOrCb, cb) {
        var command = new DescribeStreamCommand(args);
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
    DynamoDBStreams.prototype.getRecords = function (args, optionsOrCb, cb) {
        var command = new GetRecordsCommand(args);
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
    DynamoDBStreams.prototype.getShardIterator = function (args, optionsOrCb, cb) {
        var command = new GetShardIteratorCommand(args);
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
    DynamoDBStreams.prototype.listStreams = function (args, optionsOrCb, cb) {
        var command = new ListStreamsCommand(args);
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
    return DynamoDBStreams;
}(DynamoDBStreamsClient));
export { DynamoDBStreams };
//# sourceMappingURL=DynamoDBStreams.js.map