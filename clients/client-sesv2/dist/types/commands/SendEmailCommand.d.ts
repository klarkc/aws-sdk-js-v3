import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { SendEmailRequest, SendEmailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendEmailCommandInput extends SendEmailRequest {
}
export interface SendEmailCommandOutput extends SendEmailResponse, __MetadataBearer {
}
/**
 * <p>Sends an email message. You can use the Amazon SES API v2 to send two types of
 *             messages:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Simple</b> – A standard email message. When
 *                     you create this type of message, you specify the sender, the recipient, and the
 *                     message body, and Amazon SES assembles the message for you.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Raw</b> – A raw, MIME-formatted email
 *                     message. When you send this type of email, you have to specify all of the
 *                     message headers, as well as the message body. You can use this message type to
 *                     send messages that contain attachments. The message that you specify has to be a
 *                     valid MIME message.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Templated</b> – A message that contains
 *                     personalization tags. When you send this type of email, Amazon SES API v2 automatically
 *                     replaces the tags with values that you specify.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new SendEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendEmailCommandInput} for command's `input` shape.
 * @see {@link SendEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendEmailCommand extends $Command<SendEmailCommandInput, SendEmailCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: SendEmailCommandInput;
    constructor(input: SendEmailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendEmailCommandInput, SendEmailCommandOutput>;
    private serialize;
    private deserialize;
}
