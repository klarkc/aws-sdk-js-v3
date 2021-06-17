import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UntagSAMLProviderRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagSAMLProviderCommandInput extends UntagSAMLProviderRequest {
}
export interface UntagSAMLProviderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the specified tags from the specified Security Assertion Markup Language (SAML)
 *       identity provider in IAM. For more information about these providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity
 *         federation</a>. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UntagSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagSAMLProviderCommand extends $Command<UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: UntagSAMLProviderCommandInput;
    constructor(input: UntagSAMLProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
