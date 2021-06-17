import { __extends } from "tslib";
import { SubscribeToEventRequest } from "../models/models_0";
import { deserializeAws_json1_1SubscribeToEventCommand, serializeAws_json1_1SubscribeToEventCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications
 *          about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SubscribeToEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, SubscribeToEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new SubscribeToEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeToEventCommandInput} for command's `input` shape.
 * @see {@link SubscribeToEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SubscribeToEventCommand = /** @class */ (function (_super) {
    __extends(SubscribeToEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SubscribeToEventCommand(input) {
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
    SubscribeToEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "SubscribeToEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SubscribeToEventRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SubscribeToEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SubscribeToEventCommand(input, context);
    };
    SubscribeToEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SubscribeToEventCommand(output, context);
    };
    return SubscribeToEventCommand;
}($Command));
export { SubscribeToEventCommand };
//# sourceMappingURL=SubscribeToEventCommand.js.map