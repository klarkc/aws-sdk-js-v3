import { __extends } from "tslib";
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import { deserializeAws_queryBatchStopUpdateActionCommand, serializeAws_queryBatchStopUpdateActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchStopUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchStopUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new BatchStopUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchStopUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchStopUpdateActionCommand = /** @class */ (function (_super) {
    __extends(BatchStopUpdateActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchStopUpdateActionCommand(input) {
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
    BatchStopUpdateActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "BatchStopUpdateActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchStopUpdateActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateActionResultsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchStopUpdateActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBatchStopUpdateActionCommand(input, context);
    };
    BatchStopUpdateActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBatchStopUpdateActionCommand(output, context);
    };
    return BatchStopUpdateActionCommand;
}($Command));
export { BatchStopUpdateActionCommand };
//# sourceMappingURL=BatchStopUpdateActionCommand.js.map