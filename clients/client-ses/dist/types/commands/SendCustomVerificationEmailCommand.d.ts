import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendCustomVerificationEmailCommandInput extends SendCustomVerificationEmailRequest {
}
export interface SendCustomVerificationEmailCommandOutput extends SendCustomVerificationEmailResponse, __MetadataBearer {
}
/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             AWS Region and attempts to verify it. As a result of executing this operation, a
 *             customized verification email is sent to the specified address.</p>
 *         <p>To use this operation, you must first create a custom verification email template. For
 *             more information about creating and using custom verification email templates, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom
 *                 Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendCustomVerificationEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SendCustomVerificationEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCustomVerificationEmailCommandInput} for command's `input` shape.
 * @see {@link SendCustomVerificationEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendCustomVerificationEmailCommand extends $Command<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput, SESClientResolvedConfig> {
    readonly input: SendCustomVerificationEmailCommandInput;
    constructor(input: SendCustomVerificationEmailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput>;
    private serialize;
    private deserialize;
}
