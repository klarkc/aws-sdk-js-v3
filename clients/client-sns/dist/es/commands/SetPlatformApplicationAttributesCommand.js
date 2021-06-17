import { __extends } from "tslib";
import { SetPlatformApplicationAttributesInput } from "../models/models_0";
import { deserializeAws_querySetPlatformApplicationAttributesCommand, serializeAws_querySetPlatformApplicationAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring
 *             attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for
 *                 Message Delivery Status</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link SetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetPlatformApplicationAttributesCommand = /** @class */ (function (_super) {
    __extends(SetPlatformApplicationAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetPlatformApplicationAttributesCommand(input) {
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
    SetPlatformApplicationAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "SetPlatformApplicationAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetPlatformApplicationAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetPlatformApplicationAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetPlatformApplicationAttributesCommand(input, context);
    };
    SetPlatformApplicationAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetPlatformApplicationAttributesCommand(output, context);
    };
    return SetPlatformApplicationAttributesCommand;
}($Command));
export { SetPlatformApplicationAttributesCommand };
//# sourceMappingURL=SetPlatformApplicationAttributesCommand.js.map