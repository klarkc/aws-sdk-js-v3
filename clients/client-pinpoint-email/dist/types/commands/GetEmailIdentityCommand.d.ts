import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEmailIdentityCommandInput extends GetEmailIdentityRequest {
}
export interface GetEmailIdentityCommandOutput extends GetEmailIdentityResponse, __MetadataBearer {
}
/**
 * <p>Provides information about a specific identity associated with your Amazon Pinpoint account,
 *             including the identity's verification status, its DKIM authentication status, and its
 *             custom Mail-From settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetEmailIdentityCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetEmailIdentityCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEmailIdentityCommand extends $Command<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: GetEmailIdentityCommandInput;
    constructor(input: GetEmailIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
