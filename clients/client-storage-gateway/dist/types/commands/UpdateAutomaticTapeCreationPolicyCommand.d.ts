import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateAutomaticTapeCreationPolicyInput, UpdateAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAutomaticTapeCreationPolicyCommandInput extends UpdateAutomaticTapeCreationPolicyInput {
}
export interface UpdateAutomaticTapeCreationPolicyCommandOutput extends UpdateAutomaticTapeCreationPolicyOutput, __MetadataBearer {
}
/**
 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
 *          with a new set of automatic tape creation rules. This is only supported for tape
 *          gateways.</p>
 *
 *          <p>By default, there is no automatic tape creation policy.</p>
 *
 *          <note>
 *             <p>A gateway can have only one automatic tape creation policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAutomaticTapeCreationPolicyCommand extends $Command<UpdateAutomaticTapeCreationPolicyCommandInput, UpdateAutomaticTapeCreationPolicyCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateAutomaticTapeCreationPolicyCommandInput;
    constructor(input: UpdateAutomaticTapeCreationPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAutomaticTapeCreationPolicyCommandInput, UpdateAutomaticTapeCreationPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
