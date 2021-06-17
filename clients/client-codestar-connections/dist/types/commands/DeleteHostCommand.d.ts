import { CodeStarConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarConnectionsClient";
import { DeleteHostInput, DeleteHostOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHostCommandInput extends DeleteHostInput {
}
export interface DeleteHostCommandOutput extends DeleteHostOutput, __MetadataBearer {
}
/**
 * <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p>
 *          <note>
 *             <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, DeleteHostCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, DeleteHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new DeleteHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostCommandInput} for command's `input` shape.
 * @see {@link DeleteHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHostCommand extends $Command<DeleteHostCommandInput, DeleteHostCommandOutput, CodeStarConnectionsClientResolvedConfig> {
    readonly input: DeleteHostCommandInput;
    constructor(input: DeleteHostCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarConnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHostCommandInput, DeleteHostCommandOutput>;
    private serialize;
    private deserialize;
}
