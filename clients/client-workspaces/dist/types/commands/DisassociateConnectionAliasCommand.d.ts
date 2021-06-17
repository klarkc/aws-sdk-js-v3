import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateConnectionAliasCommandInput extends DisassociateConnectionAliasRequest {
}
export interface DisassociateConnectionAliasCommandOutput extends DisassociateConnectionAliasResult, __MetadataBearer {
}
/**
 * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region
 *          redirection between two directories in different AWS Regions. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DisassociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateConnectionAliasCommand extends $Command<DisassociateConnectionAliasCommandInput, DisassociateConnectionAliasCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DisassociateConnectionAliasCommandInput;
    constructor(input: DisassociateConnectionAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateConnectionAliasCommandInput, DisassociateConnectionAliasCommandOutput>;
    private serialize;
    private deserialize;
}
