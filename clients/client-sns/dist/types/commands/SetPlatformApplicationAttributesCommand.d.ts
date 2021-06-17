import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetPlatformApplicationAttributesInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetPlatformApplicationAttributesCommandInput extends SetPlatformApplicationAttributesInput {
}
export interface SetPlatformApplicationAttributesCommandOutput extends __MetadataBearer {
}
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
export declare class SetPlatformApplicationAttributesCommand extends $Command<SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetPlatformApplicationAttributesCommandInput;
    constructor(input: SetPlatformApplicationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
