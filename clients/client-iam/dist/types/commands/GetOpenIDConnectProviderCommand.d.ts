import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOpenIDConnectProviderRequest, GetOpenIDConnectProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOpenIDConnectProviderCommandInput extends GetOpenIDConnectProviderRequest {
}
export interface GetOpenIDConnectProviderCommandOutput extends GetOpenIDConnectProviderResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object
 *             in IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link GetOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOpenIDConnectProviderCommand extends $Command<GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetOpenIDConnectProviderCommandInput;
    constructor(input: GetOpenIDConnectProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
