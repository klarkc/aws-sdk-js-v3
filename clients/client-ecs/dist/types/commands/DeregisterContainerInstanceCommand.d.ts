import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterContainerInstanceCommandInput extends DeregisterContainerInstanceRequest {
}
export interface DeregisterContainerInstanceCommandOutput extends DeregisterContainerInstanceResponse, __MetadataBearer {
}
/**
 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
 * 			no longer available to run tasks.</p>
 * 		       <p>If you intend to use the container instance for some other purpose after
 * 			deregistration, you should stop all of the tasks running on the container instance
 * 			before deregistration. That prevents any orphaned tasks from consuming resources.</p>
 * 		       <p>Deregistering a container instance removes the instance from a cluster, but it does
 * 			not terminate the EC2 instance. If you are finished using the instance, be sure to
 * 			terminate it in the Amazon EC2 console to stop billing.</p>
 * 		       <note>
 * 			         <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
 * 				instance from your cluster (stopped container instances or instances with
 * 				disconnected agents are not automatically deregistered when terminated).</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterContainerInstanceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterContainerInstanceCommand extends $Command<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeregisterContainerInstanceCommandInput;
    constructor(input: DeregisterContainerInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
