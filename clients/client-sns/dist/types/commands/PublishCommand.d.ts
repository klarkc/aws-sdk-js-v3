import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { PublishInput, PublishResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PublishCommandInput extends PublishInput {
}
export interface PublishCommandOutput extends PublishResponse, __MetadataBearer {
}
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
export declare class PublishCommand extends $Command<PublishCommandInput, PublishCommandOutput, SNSClientResolvedConfig> {
    readonly input: PublishCommandInput;
    constructor(input: PublishCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PublishCommandInput, PublishCommandOutput>;
    private serialize;
    private deserialize;
}
