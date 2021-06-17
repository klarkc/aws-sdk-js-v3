import { __extends } from "tslib";
import { OptInPhoneNumberInput, OptInPhoneNumberResponse } from "../models/models_0";
import { deserializeAws_queryOptInPhoneNumberCommand, serializeAws_queryOptInPhoneNumberCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this request to opt in a phone number that is opted out, which enables you to
 *             resume sending SMS messages to the number.</p>
 *         <p>You can opt in a phone number only once every 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, OptInPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, OptInPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new OptInPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OptInPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link OptInPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var OptInPhoneNumberCommand = /** @class */ (function (_super) {
    __extends(OptInPhoneNumberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function OptInPhoneNumberCommand(input) {
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
    OptInPhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "OptInPhoneNumberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: OptInPhoneNumberInput.filterSensitiveLog,
            outputFilterSensitiveLog: OptInPhoneNumberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    OptInPhoneNumberCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryOptInPhoneNumberCommand(input, context);
    };
    OptInPhoneNumberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryOptInPhoneNumberCommand(output, context);
    };
    return OptInPhoneNumberCommand;
}($Command));
export { OptInPhoneNumberCommand };
//# sourceMappingURL=OptInPhoneNumberCommand.js.map