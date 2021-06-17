import { __extends } from "tslib";
import { DescribeReplicationGroupsMessage, ReplicationGroupMessage } from "../models/models_0";
import { deserializeAws_queryDescribeReplicationGroupsCommand, serializeAws_queryDescribeReplicationGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a particular
 *             replication group. If no identifier is specified, <code>DescribeReplicationGroups</code>
 *             returns information about all replication groups.</p>
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationGroupsCommand(input) {
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
    DescribeReplicationGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeReplicationGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReplicationGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReplicationGroupsCommand(input, context);
    };
    DescribeReplicationGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReplicationGroupsCommand(output, context);
    };
    return DescribeReplicationGroupsCommand;
}($Command));
export { DescribeReplicationGroupsCommand };
//# sourceMappingURL=DescribeReplicationGroupsCommand.js.map