"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlatformEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreatePlatformEndpointCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SNSClient";
        const commandName = "CreatePlatformEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePlatformEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEndpointResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreatePlatformEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreatePlatformEndpointCommand(output, context);
    }
}
exports.CreatePlatformEndpointCommand = CreatePlatformEndpointCommand;
//# sourceMappingURL=CreatePlatformEndpointCommand.js.map