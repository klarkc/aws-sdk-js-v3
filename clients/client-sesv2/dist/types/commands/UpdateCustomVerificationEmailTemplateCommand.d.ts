import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { UpdateCustomVerificationEmailTemplateRequest, UpdateCustomVerificationEmailTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCustomVerificationEmailTemplateCommandInput extends UpdateCustomVerificationEmailTemplateRequest {
}
export interface UpdateCustomVerificationEmailTemplateCommandOutput extends UpdateCustomVerificationEmailTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCustomVerificationEmailTemplateCommand extends $Command<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: UpdateCustomVerificationEmailTemplateCommandInput;
    constructor(input: UpdateCustomVerificationEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
