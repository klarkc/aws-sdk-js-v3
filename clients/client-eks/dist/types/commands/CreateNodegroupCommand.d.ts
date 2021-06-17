import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateNodegroupRequest, CreateNodegroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNodegroupCommandInput extends CreateNodegroupRequest {
}
export interface CreateNodegroupCommandOutput extends CreateNodegroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a node group
 *             for your cluster that is equal to the current Kubernetes version for the cluster. All
 *             node groups are created with the latest AMI release version for the respective minor
 *             Kubernetes version of the cluster, unless you deploy a custom AMI using a launch
 *             template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
 *                 template support</a>.</p>
 *         <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
 *             are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS
 *             optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed
 *                 Node Groups</a> in the <i>Amazon EKS User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNodegroupCommandInput} for command's `input` shape.
 * @see {@link CreateNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNodegroupCommand extends $Command<CreateNodegroupCommandInput, CreateNodegroupCommandOutput, EKSClientResolvedConfig> {
    readonly input: CreateNodegroupCommandInput;
    constructor(input: CreateNodegroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNodegroupCommandInput, CreateNodegroupCommandOutput>;
    private serialize;
    private deserialize;
}
