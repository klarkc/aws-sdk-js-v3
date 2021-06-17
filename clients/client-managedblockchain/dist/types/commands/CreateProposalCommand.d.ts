import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { CreateProposalInput, CreateProposalOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProposalCommandInput extends CreateProposalInput {
}
export interface CreateProposalCommandOutput extends CreateProposalOutput, __MetadataBearer {
}
/**
 * <p>Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProposalCommandInput} for command's `input` shape.
 * @see {@link CreateProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProposalCommand extends $Command<CreateProposalCommandInput, CreateProposalCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: CreateProposalCommandInput;
    constructor(input: CreateProposalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProposalCommandInput, CreateProposalCommandOutput>;
    private serialize;
    private deserialize;
}
