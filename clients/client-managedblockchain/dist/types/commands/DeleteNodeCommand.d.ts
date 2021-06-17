import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { DeleteNodeInput, DeleteNodeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNodeCommandInput extends DeleteNodeInput {
}
export interface DeleteNodeCommandOutput extends DeleteNodeOutput, __MetadataBearer {
}
/**
 * <p>Deletes a node that your AWS account owns. All data on the node is lost and cannot be recovered.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, DeleteNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, DeleteNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new DeleteNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNodeCommandInput} for command's `input` shape.
 * @see {@link DeleteNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNodeCommand extends $Command<DeleteNodeCommandInput, DeleteNodeCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: DeleteNodeCommandInput;
    constructor(input: DeleteNodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNodeCommandInput, DeleteNodeCommandOutput>;
    private serialize;
    private deserialize;
}
