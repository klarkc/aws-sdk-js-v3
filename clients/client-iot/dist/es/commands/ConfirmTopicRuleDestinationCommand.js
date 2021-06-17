import { __extends } from "tslib";
import { ConfirmTopicRuleDestinationRequest, ConfirmTopicRuleDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1ConfirmTopicRuleDestinationCommand, serializeAws_restJson1ConfirmTopicRuleDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms a topic rule destination. When you create a rule requiring a destination, AWS
 *          IoT sends a confirmation message to the endpoint or base address you specify. The message
 *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
 *          to confirm that you own or have access to the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ConfirmTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ConfirmTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ConfirmTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link ConfirmTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmTopicRuleDestinationCommand = /** @class */ (function (_super) {
    __extends(ConfirmTopicRuleDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmTopicRuleDestinationCommand(input) {
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
    ConfirmTopicRuleDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ConfirmTopicRuleDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmTopicRuleDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmTopicRuleDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmTopicRuleDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ConfirmTopicRuleDestinationCommand(input, context);
    };
    ConfirmTopicRuleDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ConfirmTopicRuleDestinationCommand(output, context);
    };
    return ConfirmTopicRuleDestinationCommand;
}($Command));
export { ConfirmTopicRuleDestinationCommand };
//# sourceMappingURL=ConfirmTopicRuleDestinationCommand.js.map