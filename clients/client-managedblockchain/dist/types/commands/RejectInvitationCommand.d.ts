import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { RejectInvitationInput, RejectInvitationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectInvitationCommandInput extends RejectInvitationInput {
}
export interface RejectInvitationCommandOutput extends RejectInvitationOutput, __MetadataBearer {
}
/**
 * <p>Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, RejectInvitationCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, RejectInvitationCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new RejectInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectInvitationCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectInvitationCommand extends $Command<RejectInvitationCommandInput, RejectInvitationCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: RejectInvitationCommandInput;
    constructor(input: RejectInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectInvitationCommandInput, RejectInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
