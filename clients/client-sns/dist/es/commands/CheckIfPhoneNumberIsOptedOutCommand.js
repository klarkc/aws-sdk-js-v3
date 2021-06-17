import { __extends } from "tslib";
import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/models_0";
import { deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand, serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a phone number and indicates whether the phone holder has opted out of
 *             receiving SMS messages from your account. You cannot send SMS messages to a number that
 *             is opted out.</p>
 *         <p>To resume sending messages, you can opt in the number by using the
 *                 <code>OptInPhoneNumber</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandInput} for command's `input` shape.
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckIfPhoneNumberIsOptedOutCommand = /** @class */ (function (_super) {
    __extends(CheckIfPhoneNumberIsOptedOutCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckIfPhoneNumberIsOptedOutCommand(input) {
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
    CheckIfPhoneNumberIsOptedOutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "CheckIfPhoneNumberIsOptedOutCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckIfPhoneNumberIsOptedOutInput.filterSensitiveLog,
            outputFilterSensitiveLog: CheckIfPhoneNumberIsOptedOutResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckIfPhoneNumberIsOptedOutCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(input, context);
    };
    CheckIfPhoneNumberIsOptedOutCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(output, context);
    };
    return CheckIfPhoneNumberIsOptedOutCommand;
}($Command));
export { CheckIfPhoneNumberIsOptedOutCommand };
//# sourceMappingURL=CheckIfPhoneNumberIsOptedOutCommand.js.map