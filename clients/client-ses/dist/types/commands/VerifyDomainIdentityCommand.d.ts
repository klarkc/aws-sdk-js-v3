import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface VerifyDomainIdentityCommandInput extends VerifyDomainIdentityRequest {
}
export interface VerifyDomainIdentityCommandOutput extends VerifyDomainIdentityResponse, __MetadataBearer {
}
/**
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS
 *             Region and attempts to verify it. For more information about verifying domains, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email
 *                 Addresses and Domains</a> in the <i>Amazon SES Developer
 *             Guide.</i>
 *          </p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyDomainIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class VerifyDomainIdentityCommand extends $Command<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyDomainIdentityCommandInput;
    constructor(input: VerifyDomainIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
