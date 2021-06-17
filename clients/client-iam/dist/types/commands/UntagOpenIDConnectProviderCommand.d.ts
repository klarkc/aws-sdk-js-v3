import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagOpenIDConnectProviderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagOpenIDConnectProviderCommandInput extends UntagOpenIDConnectProviderRequest {
}
export interface UntagOpenIDConnectProviderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity
 *       provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link UntagOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagOpenIDConnectProviderCommand extends $Command<UntagOpenIDConnectProviderCommandInput, UntagOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagOpenIDConnectProviderCommandInput;
    constructor(input: UntagOpenIDConnectProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagOpenIDConnectProviderCommandInput, UntagOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
