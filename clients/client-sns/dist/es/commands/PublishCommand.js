import { __extends } from "tslib";
import { PublishInput, PublishResponse } from "../models/models_0";
import { deserializeAws_queryPublishCommand, serializeAws_queryPublishCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone
 *             number, or a message to a mobile platform endpoint (when you specify the
 *                 <code>TargetArn</code>).</p>
 *         <p>If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is
 *             subscribed to the topic. The format of the message depends on the notification protocol
 *             for each subscribed endpoint.</p>
 *         <p>When a <code>messageId</code> is returned, the message has been saved and Amazon SNS
 *             will attempt to deliver it shortly.</p>
 *         <p>To use the <code>Publish</code> action for sending a message to a mobile endpoint,
 *             such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for
 *             the TargetArn parameter. The EndpointArn is returned when making a call with the
 *                 <code>CreatePlatformEndpoint</code> action.
 *       </p>
 *         <p>For more information about formatting messages, see <a href="https://docs.aws.amazon.com/sns/latest/dg/mobile-push-send-custommessage.html">Send Custom
 *                 Platform-Specific Payloads in Messages to Mobile Devices</a>. </p>
 *         <important>
 *             <p>You can publish messages only to topics and endpoints in the same AWS
 *                 Region.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new PublishCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishCommandInput} for command's `input` shape.
 * @see {@link PublishCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishCommand = /** @class */ (function (_super) {
    __extends(PublishCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PublishCommand(input) {
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
    PublishCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "PublishCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PublishInput.filterSensitiveLog,
            outputFilterSensitiveLog: PublishResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PublishCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPublishCommand(input, context);
    };
    PublishCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPublishCommand(output, context);
    };
    return PublishCommand;
}($Command));
export { PublishCommand };
//# sourceMappingURL=PublishCommand.js.map