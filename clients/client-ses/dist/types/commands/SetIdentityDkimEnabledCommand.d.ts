import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityDkimEnabledRequest, SetIdentityDkimEnabledResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetIdentityDkimEnabledCommandInput extends SetIdentityDkimEnabledRequest {
}
export interface SetIdentityDkimEnabledCommandOutput extends SetIdentityDkimEnabledResponse, __MetadataBearer {
}
/**
 * <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM
 *             signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends
 *             from addresses on that domain. If Easy DKIM signing is enabled for an email address,
 *             then Amazon SES uses DKIM to sign all email it sends from that address.</p>
 *         <note>
 *             <p>For email addresses (for example, <code>user@example.com</code>), you can only
 *                 enable DKIM signing if the corresponding domain (in this case,
 *                     <code>example.com</code>) has been set up to use Easy DKIM.</p>
 *         </note>
 *         <p>You can enable DKIM signing for an identity at any time after you start the
 *             verification process for the identity, even if the verification process isn't complete. </p>
 *         <p>You can execute this operation no more than once per second.</p>
 *         <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityDkimEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityDkimEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SetIdentityDkimEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityDkimEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityDkimEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetIdentityDkimEnabledCommand extends $Command<SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityDkimEnabledCommandInput;
    constructor(input: SetIdentityDkimEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput>;
    private serialize;
    private deserialize;
}
