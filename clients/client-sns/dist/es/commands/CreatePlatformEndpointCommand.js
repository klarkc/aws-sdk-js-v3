import { __extends } from "tslib";
import { CreateEndpointResponse, CreatePlatformEndpointInput } from "../models/models_0";
import { deserializeAws_queryCreatePlatformEndpointCommand, serializeAws_queryCreatePlatformEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an endpoint for a device and mobile app on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS.
 *                 <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code>
 *             that is returned from <code>CreatePlatformApplication</code>. You can use the returned
 *                 <code>EndpointArn</code> to send a message to a mobile app or by the
 *                 <code>Subscribe</code> action for subscription to a topic. The
 *                 <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester
 *             already owns an endpoint with the same device token and attributes, that endpoint's ARN
 *             is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *                 Notifications</a>. </p>
 *         <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be
 *             provided: ChannelId and UserId. The token field must also contain the ChannelId. For
 *             more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint
 *                 for Baidu</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformEndpointCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreatePlatformEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformEndpointCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePlatformEndpointCommand = /** @class */ (function (_super) {
    __extends(CreatePlatformEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlatformEndpointCommand(input) {
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
    CreatePlatformEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "CreatePlatformEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlatformEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlatformEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreatePlatformEndpointCommand(input, context);
    };
    CreatePlatformEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreatePlatformEndpointCommand(output, context);
    };
    return CreatePlatformEndpointCommand;
}($Command));
export { CreatePlatformEndpointCommand };
//# sourceMappingURL=CreatePlatformEndpointCommand.js.map