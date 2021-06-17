import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClusterCommandInput extends CreateClusterRequest {
}
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
 * 			cluster when you launch your first container instance. However, you can create your own
 * 			cluster with a unique name with the <code>CreateCluster</code> action.</p>
 * 		       <note>
 * 			         <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
 * 				create the Amazon ECS service-linked role for your account so that required resources in
 * 				other AWS services can be managed on your behalf. However, if the IAM user that
 * 				makes the call does not have permissions to create the service-linked role, it is
 * 				not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 					Service-Linked Roles for Amazon ECS</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClusterCommand extends $Command<CreateClusterCommandInput, CreateClusterCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateClusterCommandInput;
    constructor(input: CreateClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterCommandInput, CreateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
