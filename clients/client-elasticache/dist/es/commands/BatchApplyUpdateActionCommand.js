import { __extends } from "tslib";
import { BatchApplyUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { deserializeAws_queryBatchApplyUpdateActionCommand, serializeAws_queryBatchApplyUpdateActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchApplyUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchApplyUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new BatchApplyUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchApplyUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchApplyUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchApplyUpdateActionCommand = /** @class */ (function (_super) {
    __extends(BatchApplyUpdateActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchApplyUpdateActionCommand(input) {
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
    BatchApplyUpdateActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "BatchApplyUpdateActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchApplyUpdateActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateActionResultsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchApplyUpdateActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBatchApplyUpdateActionCommand(input, context);
    };
    BatchApplyUpdateActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBatchApplyUpdateActionCommand(output, context);
    };
    return BatchApplyUpdateActionCommand;
}($Command));
export { BatchApplyUpdateActionCommand };
//# sourceMappingURL=BatchApplyUpdateActionCommand.js.map