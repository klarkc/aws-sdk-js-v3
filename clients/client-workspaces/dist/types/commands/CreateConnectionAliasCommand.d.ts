import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CreateConnectionAliasRequest, CreateConnectionAliasResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConnectionAliasCommandInput extends CreateConnectionAliasRequest {
}
export interface CreateConnectionAliasCommandOutput extends CreateConnectionAliasResult, __MetadataBearer {
}
/**
 * <p>Creates the specified connection alias for use with cross-Region redirection. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConnectionAliasCommand extends $Command<CreateConnectionAliasCommandInput, CreateConnectionAliasCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: CreateConnectionAliasCommandInput;
    constructor(input: CreateConnectionAliasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionAliasCommandInput, CreateConnectionAliasCommandOutput>;
    private serialize;
    private deserialize;
}
