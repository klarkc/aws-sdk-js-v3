import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { VoteOnProposalInput, VoteOnProposalOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface VoteOnProposalCommandInput extends VoteOnProposalInput {
}
export interface VoteOnProposalCommandOutput extends VoteOnProposalOutput, __MetadataBearer {
}
/**
 * <p>Casts a vote for a specified <code>ProposalId</code> on behalf of a member. The member to vote as, specified by <code>VoterMemberId</code>, must be in the same AWS account as the principal that calls the action.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, VoteOnProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, VoteOnProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new VoteOnProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VoteOnProposalCommandInput} for command's `input` shape.
 * @see {@link VoteOnProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class VoteOnProposalCommand extends $Command<VoteOnProposalCommandInput, VoteOnProposalCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: VoteOnProposalCommandInput;
    constructor(input: VoteOnProposalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VoteOnProposalCommandInput, VoteOnProposalCommandOutput>;
    private serialize;
    private deserialize;
}
