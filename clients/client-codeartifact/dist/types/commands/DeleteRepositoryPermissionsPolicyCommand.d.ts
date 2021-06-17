import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteRepositoryPermissionsPolicyRequest, DeleteRepositoryPermissionsPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRepositoryPermissionsPolicyCommandInput extends DeleteRepositoryPermissionsPolicyRequest {
}
export interface DeleteRepositoryPermissionsPolicyCommandOutput extends DeleteRepositoryPermissionsPolicyResult, __MetadataBearer {
}
/**
 * <p>
 *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
 *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
 *       </p>
 *          <important>
 *             <p>
 *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, AWS users, roles, and accounts lose permissions to perform
 *          the repository actions granted by the deleted policy.
 *        </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRepositoryPermissionsPolicyCommand extends $Command<DeleteRepositoryPermissionsPolicyCommandInput, DeleteRepositoryPermissionsPolicyCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DeleteRepositoryPermissionsPolicyCommandInput;
    constructor(input: DeleteRepositoryPermissionsPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryPermissionsPolicyCommandInput, DeleteRepositoryPermissionsPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
