import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { PutRepositoryPermissionsPolicyRequest, PutRepositoryPermissionsPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRepositoryPermissionsPolicyCommandInput extends PutRepositoryPermissionsPolicyRequest {
}
export interface PutRepositoryPermissionsPolicyCommandOutput extends PutRepositoryPermissionsPolicyResult, __MetadataBearer {
}
/**
 * <p>
 *         Sets the resource policy on a repository that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
 *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRepositoryPermissionsPolicyCommand extends $Command<PutRepositoryPermissionsPolicyCommandInput, PutRepositoryPermissionsPolicyCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: PutRepositoryPermissionsPolicyCommandInput;
    constructor(input: PutRepositoryPermissionsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRepositoryPermissionsPolicyCommandInput, PutRepositoryPermissionsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
