import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DeleteConnectionAliasRequest, DeleteConnectionAliasResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConnectionAliasCommandInput extends DeleteConnectionAliasRequest {
}
export interface DeleteConnectionAliasCommandOutput extends DeleteConnectionAliasResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <important>
 *             <p>
 *                <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code
 *             for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b>
 *             For more information, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations">
 *                Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
 *          </important>
 *
 *          <note>
 *             <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias
 *             from any directories it has been associated with. Then you must unshare the connection alias from the account it has
 *             been shared with. You can delete a connection alias only after it is no longer shared with any accounts or
 *             associated with any directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConnectionAliasCommand extends $Command<DeleteConnectionAliasCommandInput, DeleteConnectionAliasCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DeleteConnectionAliasCommandInput;
    constructor(input: DeleteConnectionAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConnectionAliasCommandInput, DeleteConnectionAliasCommandOutput>;
    private serialize;
    private deserialize;
}
