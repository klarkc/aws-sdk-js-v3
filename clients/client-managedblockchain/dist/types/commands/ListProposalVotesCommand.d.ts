import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { ListProposalVotesInput, ListProposalVotesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProposalVotesCommandInput extends ListProposalVotesInput {
}
export interface ListProposalVotesCommandOutput extends ListProposalVotesOutput, __MetadataBearer {
}
/**
 * <p>Returns the list of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListProposalVotesCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListProposalVotesCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListProposalVotesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProposalVotesCommandInput} for command's `input` shape.
 * @see {@link ListProposalVotesCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProposalVotesCommand extends $Command<ListProposalVotesCommandInput, ListProposalVotesCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: ListProposalVotesCommandInput;
    constructor(input: ListProposalVotesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProposalVotesCommandInput, ListProposalVotesCommandOutput>;
    private serialize;
    private deserialize;
}
