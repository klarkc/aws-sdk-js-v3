import { ManagedBlockchainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ManagedBlockchainClient";
import { UpdateMemberInput, UpdateMemberOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMemberCommandInput extends UpdateMemberInput {
}
export interface UpdateMemberCommandOutput extends UpdateMemberOutput, __MetadataBearer {
}
/**
 * <p>Updates a member configuration with new parameters.</p>
 *          <p>Applies only to Hyperledger Fabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, UpdateMemberCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, UpdateMemberCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new UpdateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMemberCommand extends $Command<UpdateMemberCommandInput, UpdateMemberCommandOutput, ManagedBlockchainClientResolvedConfig> {
    readonly input: UpdateMemberCommandInput;
    constructor(input: UpdateMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ManagedBlockchainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMemberCommandInput, UpdateMemberCommandOutput>;
    private serialize;
    private deserialize;
}
