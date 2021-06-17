import { __extends } from "tslib";
import { EventSourceMappingConfiguration, UpdateEventSourceMappingRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateEventSourceMappingCommand, serializeAws_restJson1UpdateEventSourceMappingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.</p>
 *          <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEventSourceMappingCommand = /** @class */ (function (_super) {
    __extends(UpdateEventSourceMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEventSourceMappingCommand(input) {
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
    UpdateEventSourceMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateEventSourceMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEventSourceMappingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EventSourceMappingConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEventSourceMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEventSourceMappingCommand(input, context);
    };
    UpdateEventSourceMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEventSourceMappingCommand(output, context);
    };
    return UpdateEventSourceMappingCommand;
}($Command));
export { UpdateEventSourceMappingCommand };
//# sourceMappingURL=UpdateEventSourceMappingCommand.js.map