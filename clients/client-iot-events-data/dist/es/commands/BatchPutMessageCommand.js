import { __extends } from "tslib";
import { BatchPutMessageRequest, BatchPutMessageResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchPutMessageCommand, serializeAws_restJson1BatchPutMessageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into
 *       the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor
 *       that input. If multiple messages are sent, the order in which the messages are processed isn't
 *       guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
 *       successful response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchPutMessageCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchPutMessageCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchPutMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutMessageCommandInput} for command's `input` shape.
 * @see {@link BatchPutMessageCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchPutMessageCommand = /** @class */ (function (_super) {
    __extends(BatchPutMessageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchPutMessageCommand(input) {
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
    BatchPutMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsDataClient";
        var commandName = "BatchPutMessageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchPutMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchPutMessageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchPutMessageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchPutMessageCommand(input, context);
    };
    BatchPutMessageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchPutMessageCommand(output, context);
    };
    return BatchPutMessageCommand;
}($Command));
export { BatchPutMessageCommand };
//# sourceMappingURL=BatchPutMessageCommand.js.map