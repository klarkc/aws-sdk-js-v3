import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetSMSAttributesInput, SetSMSAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetSMSAttributesCommandInput extends SetSMSAttributesInput {
}
export interface SetSMSAttributesCommandOutput extends SetSMSAttributesResponse, __MetadataBearer {
}
/**
 * <p>Use this request to set the default settings for sending SMS messages and receiving
 *             daily SMS usage reports.</p>
 *         <p>You can override some of these settings for a single message when you use the
 *                 <code>Publish</code> action with the <code>MessageAttributes.entry.N</code>
 *             parameter. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html">Publishing to a mobile phone</a>
 *             in the <i>Amazon SNS Developer Guide</i>.</p>
 *         <note>
 *             <p>To use this operation, you must grant the Amazon SNS service principal
 *                     (<code>sns.amazonaws.com</code>) permission to perform the
 *                     <code>s3:ListBucket</code> action. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSMSAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSMSAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSMSAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMSAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSMSAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetSMSAttributesCommand extends $Command<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetSMSAttributesCommandInput;
    constructor(input: SetSMSAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
