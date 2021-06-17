import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetAccessTokenRequest, GetAccessTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccessTokenCommandInput extends GetAccessTokenRequest {
}
export interface GetAccessTokenCommandOutput extends GetAccessTokenResponse, __MetadataBearer {
}
/**
 * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 *           are valid for one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetAccessTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetAccessTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetAccessTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccessTokenCommand extends $Command<GetAccessTokenCommandInput, GetAccessTokenCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetAccessTokenCommandInput;
    constructor(input: GetAccessTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessTokenCommandInput, GetAccessTokenCommandOutput>;
    private serialize;
    private deserialize;
}
