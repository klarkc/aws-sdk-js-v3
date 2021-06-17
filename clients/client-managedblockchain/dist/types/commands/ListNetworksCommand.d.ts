import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { ListNetworksInput, ListNetworksOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNetworksCommandInput extends ListNetworksInput {
}
export interface ListNetworksCommandOutput extends ListNetworksOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the networks in which the current AWS account participates.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNetworksCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNetworksCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNetworksCommandInput} for command's `input` shape.
 * @see {@link ListNetworksCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNetworksCommand extends $Command<ListNetworksCommandInput, ListNetworksCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: ListNetworksCommandInput;
    constructor(input: ListNetworksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNetworksCommandInput, ListNetworksCommandOutput>;
    private serialize;
    private deserialize;
}
