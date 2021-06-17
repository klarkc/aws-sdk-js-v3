import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateCustomVerificationEmailTemplateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomVerificationEmailTemplateCommandInput extends CreateCustomVerificationEmailTemplateRequest {
}
export interface CreateCustomVerificationEmailTemplateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates a new custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomVerificationEmailTemplateCommand extends $Command<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateCustomVerificationEmailTemplateCommandInput;
    constructor(input: CreateCustomVerificationEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
