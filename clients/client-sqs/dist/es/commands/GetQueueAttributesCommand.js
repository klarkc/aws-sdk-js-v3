import { __extends } from "tslib";
import { GetQueueAttributesRequest, GetQueueAttributesResult } from "../models/models_0";
import { deserializeAws_queryGetQueueAttributesCommand, serializeAws_queryGetQueueAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets attributes for the specified queue.</p>
 *          <note>
 *             <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueAttributesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueAttributesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new GetQueueAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueueAttributesCommandInput} for command's `input` shape.
 * @see {@link GetQueueAttributesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQueueAttributesCommand = /** @class */ (function (_super) {
    __extends(GetQueueAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQueueAttributesCommand(input) {
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
    GetQueueAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SQSClient";
        var commandName = "GetQueueAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQueueAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQueueAttributesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQueueAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetQueueAttributesCommand(input, context);
    };
    GetQueueAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetQueueAttributesCommand(output, context);
    };
    return GetQueueAttributesCommand;
}($Command));
export { GetQueueAttributesCommand };
//# sourceMappingURL=GetQueueAttributesCommand.js.map