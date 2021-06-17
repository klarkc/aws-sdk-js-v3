import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { AssociateConnectionAliasRequest, AssociateConnectionAliasResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateConnectionAliasCommandInput extends AssociateConnectionAliasRequest {
}
export interface AssociateConnectionAliasCommandOutput extends AssociateConnectionAliasResult, __MetadataBearer {
}
/**
 * <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AssociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateConnectionAliasCommand extends $Command<AssociateConnectionAliasCommandInput, AssociateConnectionAliasCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: AssociateConnectionAliasCommandInput;
    constructor(input: AssociateConnectionAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateConnectionAliasCommandInput, AssociateConnectionAliasCommandOutput>;
    private serialize;
    private deserialize;
}
