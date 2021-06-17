import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteAutomaticTapeCreationPolicyInput, DeleteAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAutomaticTapeCreationPolicyCommandInput extends DeleteAutomaticTapeCreationPolicyInput {
}
export interface DeleteAutomaticTapeCreationPolicyCommandOutput extends DeleteAutomaticTapeCreationPolicyOutput, __MetadataBearer {
}
/**
 * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 *          in your request to remove the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAutomaticTapeCreationPolicyCommand extends $Command<DeleteAutomaticTapeCreationPolicyCommandInput, DeleteAutomaticTapeCreationPolicyCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteAutomaticTapeCreationPolicyCommandInput;
    constructor(input: DeleteAutomaticTapeCreationPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAutomaticTapeCreationPolicyCommandInput, DeleteAutomaticTapeCreationPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
