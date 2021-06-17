import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { DeleteCustomVerificationEmailTemplateRequest, DeleteCustomVerificationEmailTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomVerificationEmailTemplateCommandInput extends DeleteCustomVerificationEmailTemplateRequest {
}
export interface DeleteCustomVerificationEmailTemplateCommandOutput extends DeleteCustomVerificationEmailTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/es/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomVerificationEmailTemplateCommand extends $Command<DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: DeleteCustomVerificationEmailTemplateCommandInput;
    constructor(input: DeleteCustomVerificationEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
