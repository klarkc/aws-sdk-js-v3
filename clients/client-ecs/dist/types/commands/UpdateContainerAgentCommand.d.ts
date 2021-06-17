import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateContainerAgentRequest, UpdateContainerAgentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateContainerAgentCommandInput extends UpdateContainerAgentRequest {
}
export interface UpdateContainerAgentCommandOutput extends UpdateContainerAgentResponse, __MetadataBearer {
}
/**
 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
 * 			Amazon ECS container agent does not interrupt running tasks or services on the container
 * 			instance. The process for updating the agent differs depending on whether your container
 * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
 * 		       <note>
 * 			         <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances
 * 				using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent,
 * 				you can update the <code>ecs-init</code> package which will update the agent. For
 * 				more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the
 * 					Amazon ECS container agent</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * 		       <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon
 * 			Linux AMI with the <code>ecs-init</code> service installed and running. For help
 * 			updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerAgentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerAgentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateContainerAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerAgentCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateContainerAgentCommand extends $Command<UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateContainerAgentCommandInput;
    constructor(input: UpdateContainerAgentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput>;
    private serialize;
    private deserialize;
}
