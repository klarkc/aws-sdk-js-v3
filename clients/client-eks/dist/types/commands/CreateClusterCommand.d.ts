import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateClusterCommandInput extends CreateClusterRequest {
}
export interface CreateClusterCommandOutput extends CreateClusterResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon EKS control plane. </p>
 *         <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes
 *             software, such as <code>etcd</code> and the API server. The control plane runs in an
 *             account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server
 *             endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its
 *             own set of Amazon EC2 instances.</p>
 *         <p>The cluster control plane is provisioned across multiple Availability Zones and
 *             fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC
 *             subnets to provide connectivity from the control plane instances to the nodes (for
 *             example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code>
 *             data flows).</p>
 *         <p>Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via
 *             the Kubernetes API server endpoint and a certificate file that is created for your
 *             cluster.</p>
 *
 *         <p>Cluster creation typically takes several minutes. After you create an Amazon EKS cluster,
 *             you must configure your Kubernetes tooling to communicate with the API server and launch
 *             nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster
 *                 Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateClusterCommand extends $Command<CreateClusterCommandInput, CreateClusterCommandOutput, EKSClientResolvedConfig> {
    readonly input: CreateClusterCommandInput;
    constructor(input: CreateClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterCommandInput, CreateClusterCommandOutput>;
    private serialize;
    private deserialize;
}
