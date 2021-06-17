import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { GetNodeInput, GetNodeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNodeCommandInput extends GetNodeInput {
}
export interface GetNodeCommandOutput extends GetNodeOutput, __MetadataBearer {
}
/**
 * <p>Returns detailed information about a node.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetNodeCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetNodeCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNodeCommandInput} for command's `input` shape.
 * @see {@link GetNodeCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNodeCommand extends $Command<GetNodeCommandInput, GetNodeCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: GetNodeCommandInput;
    constructor(input: GetNodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNodeCommandInput, GetNodeCommandOutput>;
    private serialize;
    private deserialize;
}
