import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateEmailIdentityPolicyRequest, CreateEmailIdentityPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEmailIdentityPolicyCommandInput extends CreateEmailIdentityPolicyRequest {
}
export interface CreateEmailIdentityPolicyCommandOutput extends CreateEmailIdentityPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates the specified sending authorization policy for the given identity (an email
 *         address or a domain).</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateEmailIdentityPolicyCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateEmailIdentityPolicyCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateEmailIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEmailIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEmailIdentityPolicyCommand extends $Command<CreateEmailIdentityPolicyCommandInput, CreateEmailIdentityPolicyCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: CreateEmailIdentityPolicyCommandInput;
    constructor(input: CreateEmailIdentityPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEmailIdentityPolicyCommandInput, CreateEmailIdentityPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
