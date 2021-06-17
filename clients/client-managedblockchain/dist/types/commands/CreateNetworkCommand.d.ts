import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { CreateNetworkInput, CreateNetworkOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkCommandInput extends CreateNetworkInput {
}
export interface CreateNetworkCommandOutput extends CreateNetworkOutput, __MetadataBearer {
}
/**
 * <p>Creates a new blockchain network using Amazon Managed Blockchain.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateNetworkCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateNetworkCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkCommand extends $Command<CreateNetworkCommandInput, CreateNetworkCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: CreateNetworkCommandInput;
    constructor(input: CreateNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkCommandInput, CreateNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
