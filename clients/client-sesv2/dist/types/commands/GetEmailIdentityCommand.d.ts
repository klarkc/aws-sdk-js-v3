import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEmailIdentityCommandInput extends GetEmailIdentityRequest {
}
export interface GetEmailIdentityCommandOutput extends GetEmailIdentityResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a specific identity, including the identity's verification
 *             status, sending authorization policies, its DKIM authentication status, and its custom
 *             Mail-From settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEmailIdentityCommand extends $Command<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetEmailIdentityCommandInput;
    constructor(input: GetEmailIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
