import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteSAMLProviderRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSAMLProviderCommandInput extends DeleteSAMLProviderRequest {
}
export interface DeleteSAMLProviderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a SAML provider resource in IAM.</p>
 *         <p>Deleting the provider resource from IAM does not update any roles that reference the
 *             SAML provider resource's ARN as a principal in their trust policies. Any attempt to
 *             assume a role that references a non-existent provider resource ARN fails.</p>
 *         <note>
 *             <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSAMLProviderCommand extends $Command<DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteSAMLProviderCommandInput;
    constructor(input: DeleteSAMLProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
