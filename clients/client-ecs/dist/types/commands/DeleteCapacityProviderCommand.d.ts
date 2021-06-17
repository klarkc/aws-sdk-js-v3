import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCapacityProviderCommandInput extends DeleteCapacityProviderRequest {
}
export interface DeleteCapacityProviderCommandOutput extends DeleteCapacityProviderResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified capacity provider.</p>
 * 		       <note>
 * 			         <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
 * 				reserved and cannot be deleted. You can disassociate them from a cluster using
 * 				either the <a>PutClusterCapacityProviders</a> API or by deleting the
 * 				cluster.</p>
 * 		       </note>
 * 		       <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
 * 			the capacity provider strategy from all services. The <a>UpdateService</a>
 * 			API can be used to remove a capacity provider from a service's capacity provider
 * 			strategy. When updating a service, the <code>forceNewDeployment</code> option can be
 * 			used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
 * 			provider are transitioned to use the capacity from the remaining capacity providers.
 * 			Only capacity providers that are not associated with a cluster can be deleted. To remove
 * 			a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCapacityProviderCommand extends $Command<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteCapacityProviderCommandInput;
    constructor(input: DeleteCapacityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
