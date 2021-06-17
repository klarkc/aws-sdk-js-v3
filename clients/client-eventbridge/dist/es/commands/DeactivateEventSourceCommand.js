import { __extends } from "tslib";
import { DeactivateEventSourceRequest } from "../models/models_0";
import { deserializeAws_json1_1DeactivateEventSourceCommand, serializeAws_json1_1DeactivateEventSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>You can use this operation to temporarily stop receiving events from the specified partner
 *       event source. The matching event bus is not deleted. </p>
 *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *       remains in PENDING state for more than two weeks, it is deleted.</p>
 *          <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeactivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeactivateEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeactivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivateEventSourceCommand = /** @class */ (function (_super) {
    __extends(DeactivateEventSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivateEventSourceCommand(input) {
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
    DeactivateEventSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DeactivateEventSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivateEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivateEventSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeactivateEventSourceCommand(input, context);
    };
    DeactivateEventSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeactivateEventSourceCommand(output, context);
    };
    return DeactivateEventSourceCommand;
}($Command));
export { DeactivateEventSourceCommand };
//# sourceMappingURL=DeactivateEventSourceCommand.js.map