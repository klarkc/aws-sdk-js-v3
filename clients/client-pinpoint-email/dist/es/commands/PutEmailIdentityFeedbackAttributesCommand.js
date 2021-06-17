import { __extends } from "tslib";
import { PutEmailIdentityFeedbackAttributesRequest, PutEmailIdentityFeedbackAttributesResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand, serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce
 *             or complaint events occur. Amazon Pinpoint sends this notification to the address that you
 *             specified in the Return-Path header of the original email.</p>
 *         <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other
 *             mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of
 *             tracking bounces and complaints. If you haven't set up another mechanism for receiving
 *             bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events
 *             occur (even if this setting is disabled).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityFeedbackAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutEmailIdentityFeedbackAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityFeedbackAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityFeedbackAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEmailIdentityFeedbackAttributesCommand = /** @class */ (function (_super) {
    __extends(PutEmailIdentityFeedbackAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEmailIdentityFeedbackAttributesCommand(input) {
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
    PutEmailIdentityFeedbackAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutEmailIdentityFeedbackAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEmailIdentityFeedbackAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(input, context);
    };
    PutEmailIdentityFeedbackAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand(output, context);
    };
    return PutEmailIdentityFeedbackAttributesCommand;
}($Command));
export { PutEmailIdentityFeedbackAttributesCommand };
//# sourceMappingURL=PutEmailIdentityFeedbackAttributesCommand.js.map