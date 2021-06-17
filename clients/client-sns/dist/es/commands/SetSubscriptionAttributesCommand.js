import { __extends } from "tslib";
import { SetSubscriptionAttributesInput } from "../models/models_0";
import { deserializeAws_querySetSubscriptionAttributesCommand, serializeAws_querySetSubscriptionAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows a subscription owner to set an attribute of the subscription to a new
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetSubscriptionAttributesCommand = /** @class */ (function (_super) {
    __extends(SetSubscriptionAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetSubscriptionAttributesCommand(input) {
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
    SetSubscriptionAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "SetSubscriptionAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetSubscriptionAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetSubscriptionAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetSubscriptionAttributesCommand(input, context);
    };
    SetSubscriptionAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetSubscriptionAttributesCommand(output, context);
    };
    return SetSubscriptionAttributesCommand;
}($Command));
export { SetSubscriptionAttributesCommand };
//# sourceMappingURL=SetSubscriptionAttributesCommand.js.map