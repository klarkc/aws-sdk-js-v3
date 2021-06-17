import { __extends } from "tslib";
import { ListFlowExecutionMessagesRequest, ListFlowExecutionMessagesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFlowExecutionMessagesCommand, serializeAws_json1_1ListFlowExecutionMessagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of objects that contain information about events in a flow execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, ListFlowExecutionMessagesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new ListFlowExecutionMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowExecutionMessagesCommandInput} for command's `input` shape.
 * @see {@link ListFlowExecutionMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFlowExecutionMessagesCommand = /** @class */ (function (_super) {
    __extends(ListFlowExecutionMessagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFlowExecutionMessagesCommand(input) {
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
    ListFlowExecutionMessagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "ListFlowExecutionMessagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFlowExecutionMessagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFlowExecutionMessagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFlowExecutionMessagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFlowExecutionMessagesCommand(input, context);
    };
    ListFlowExecutionMessagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFlowExecutionMessagesCommand(output, context);
    };
    return ListFlowExecutionMessagesCommand;
}($Command));
export { ListFlowExecutionMessagesCommand };
//# sourceMappingURL=ListFlowExecutionMessagesCommand.js.map