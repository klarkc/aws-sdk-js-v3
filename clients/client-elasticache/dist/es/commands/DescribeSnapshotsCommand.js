import { __extends } from "tslib";
import { DescribeSnapshotsListMessage, DescribeSnapshotsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeSnapshotsCommand, serializeAws_queryDescribeSnapshotsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about cluster or replication group snapshots.
 *             By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally
 *             describe a single snapshot, or just the snapshots associated with a particular cache
 *             cluster.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeSnapshotsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotsCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSnapshotsListMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSnapshotsCommand(input, context);
    };
    DescribeSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSnapshotsCommand(output, context);
    };
    return DescribeSnapshotsCommand;
}($Command));
export { DescribeSnapshotsCommand };
//# sourceMappingURL=DescribeSnapshotsCommand.js.map