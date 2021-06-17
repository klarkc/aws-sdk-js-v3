import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteGatewayInput, DeleteGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGatewayCommandInput extends DeleteGatewayInput {
}
export interface DeleteGatewayCommandOutput extends DeleteGatewayOutput, __MetadataBearer {
}
/**
 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
 *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
 *          not delete the gateway virtual machine (VM) from your host computer.</p>
 *
 *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
 *          volumes are not deleted upon deleting the gateway, however, pending snapshots will not
 *          complete. After you delete a gateway, your next step is to remove it from your
 *          environment.</p>
 *
 *          <important>
 *             <p>You no longer pay software charges after the gateway is deleted; however, your
 *             existing Amazon EBS snapshots persist and you will continue to be billed for these
 *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
 *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
 *             can delete your snapshots using the Amazon EC2 console. For more information, see the
 *                <a href="http://aws.amazon.com/storagegateway">AWS Storage Gateway detail
 *             page</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGatewayCommand extends $Command<DeleteGatewayCommandInput, DeleteGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteGatewayCommandInput;
    constructor(input: DeleteGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGatewayCommandInput, DeleteGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
