import { __extends } from "tslib";
import { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/models_0";
import { deserializeAws_queryDescribeReservedCacheNodesCommand, serializeAws_queryDescribeReservedCacheNodesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about reserved cache
 *             nodes for this account, or about a specified reserved cache node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedCacheNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedCacheNodesCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedCacheNodesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedCacheNodesCommand(input) {
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
    DescribeReservedCacheNodesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeReservedCacheNodesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedCacheNodesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReservedCacheNodeMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedCacheNodesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReservedCacheNodesCommand(input, context);
    };
    DescribeReservedCacheNodesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReservedCacheNodesCommand(output, context);
    };
    return DescribeReservedCacheNodesCommand;
}($Command));
export { DescribeReservedCacheNodesCommand };
//# sourceMappingURL=DescribeReservedCacheNodesCommand.js.map