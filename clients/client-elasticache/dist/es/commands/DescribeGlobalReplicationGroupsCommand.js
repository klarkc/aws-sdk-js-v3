import { __extends } from "tslib";
import { DescribeGlobalReplicationGroupsMessage, DescribeGlobalReplicationGroupsResult } from "../models/models_0";
import { deserializeAws_queryDescribeGlobalReplicationGroupsCommand, serializeAws_queryDescribeGlobalReplicationGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeGlobalReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalReplicationGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeGlobalReplicationGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGlobalReplicationGroupsCommand(input) {
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
    DescribeGlobalReplicationGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeGlobalReplicationGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGlobalReplicationGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGlobalReplicationGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGlobalReplicationGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeGlobalReplicationGroupsCommand(input, context);
    };
    DescribeGlobalReplicationGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeGlobalReplicationGroupsCommand(output, context);
    };
    return DescribeGlobalReplicationGroupsCommand;
}($Command));
export { DescribeGlobalReplicationGroupsCommand };
//# sourceMappingURL=DescribeGlobalReplicationGroupsCommand.js.map