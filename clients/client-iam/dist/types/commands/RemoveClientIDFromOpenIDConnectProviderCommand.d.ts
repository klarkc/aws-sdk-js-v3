import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveClientIDFromOpenIDConnectProviderCommandInput extends RemoveClientIDFromOpenIDConnectProviderRequest {
}
export interface RemoveClientIDFromOpenIDConnectProviderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified client ID (also known as audience) from the list of client IDs
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource
 *             object.</p>
 *         <p>This operation is idempotent; it does not fail or return an error if you try to remove
 *             a client ID that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveClientIDFromOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveClientIDFromOpenIDConnectProviderCommand extends $Command<RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: RemoveClientIDFromOpenIDConnectProviderCommandInput;
    constructor(input: RemoveClientIDFromOpenIDConnectProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
