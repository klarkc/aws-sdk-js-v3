import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { CreateEmailIdentityRequest, CreateEmailIdentityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEmailIdentityCommandInput extends CreateEmailIdentityRequest {
}
export interface CreateEmailIdentityCommandOutput extends CreateEmailIdentityResponse, __MetadataBearer {
}
/**
 * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email
 *             address or domain that you use when you send email. Before you can use an identity to
 *             send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you
 *             demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission
 *             to send email from the address.</p>
 *         <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email
 *             address is verified as soon as you follow the link in the verification email.
 *
 *         </p>
 *         <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can
 *             convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your
 *             domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS
 *             configuration for your domain. It usually takes around 72 hours to complete the domain
 *             verification process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateEmailIdentityCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateEmailIdentityCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEmailIdentityCommand extends $Command<CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: CreateEmailIdentityCommandInput;
    constructor(input: CreateEmailIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEmailIdentityCommandInput, CreateEmailIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
