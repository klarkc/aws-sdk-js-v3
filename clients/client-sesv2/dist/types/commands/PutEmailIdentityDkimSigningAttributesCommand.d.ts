import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutEmailIdentityDkimSigningAttributesRequest, PutEmailIdentityDkimSigningAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEmailIdentityDkimSigningAttributesCommandInput extends PutEmailIdentityDkimSigningAttributesRequest {
}
export interface PutEmailIdentityDkimSigningAttributesCommandOutput extends PutEmailIdentityDkimSigningAttributesResponse, __MetadataBearer {
}
/**
 * <p>Used to configure or change the DKIM authentication settings for an email domain
 *             identity. You can use this operation to do any of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Update the signing attributes for an identity that uses Bring Your Own DKIM
 *                     (BYODKIM).</p>
 *             </li>
 *             <li>
 *                 <p>Change from using no DKIM authentication to using Easy DKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using no DKIM authentication to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using Easy DKIM to using BYODKIM.</p>
 *             </li>
 *             <li>
 *                 <p>Change from using BYODKIM to using Easy DKIM.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimSigningAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityDkimSigningAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimSigningAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEmailIdentityDkimSigningAttributesCommand extends $Command<PutEmailIdentityDkimSigningAttributesCommandInput, PutEmailIdentityDkimSigningAttributesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutEmailIdentityDkimSigningAttributesCommandInput;
    constructor(input: PutEmailIdentityDkimSigningAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEmailIdentityDkimSigningAttributesCommandInput, PutEmailIdentityDkimSigningAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
