import { __extends } from "tslib";
import { ActivateEventSourceRequest } from "../models/models_0";
import { deserializeAws_json1_1ActivateEventSourceCommand, serializeAws_json1_1ActivateEventSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates a partner event source that has been deactivated. Once activated, your matching
 *       event bus will start receiving events from the event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ActivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ActivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ActivateEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link ActivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ActivateEventSourceCommand = /** @class */ (function (_super) {
    __extends(ActivateEventSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ActivateEventSourceCommand(input) {
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
    ActivateEventSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "ActivateEventSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ActivateEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ActivateEventSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ActivateEventSourceCommand(input, context);
    };
    ActivateEventSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ActivateEventSourceCommand(output, context);
    };
    return ActivateEventSourceCommand;
}($Command));
export { ActivateEventSourceCommand };
//# sourceMappingURL=ActivateEventSourceCommand.js.map