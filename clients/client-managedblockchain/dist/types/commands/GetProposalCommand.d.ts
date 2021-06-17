import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { GetProposalInput, GetProposalOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProposalCommandInput extends GetProposalInput {
}
export interface GetProposalCommandOutput extends GetProposalOutput, __MetadataBearer {
}
/**
 * <p>Returns detailed information about a proposal.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, GetProposalCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, GetProposalCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new GetProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProposalCommandInput} for command's `input` shape.
 * @see {@link GetProposalCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProposalCommand extends $Command<GetProposalCommandInput, GetProposalCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: GetProposalCommandInput;
    constructor(input: GetProposalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProposalCommandInput, GetProposalCommandOutput>;
    private serialize;
    private deserialize;
}
