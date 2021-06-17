import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterCommandInput extends DescribeClusterRequest {
}
export interface DescribeClusterCommandOutput extends DescribeClusterResponse, __MetadataBearer {
}
/**
 * <p>Returns descriptive information about an Amazon EKS cluster.</p>
 *         <p>The API server endpoint and certificate authority data returned by this operation are
 *             required for <code>kubelet</code> and <code>kubectl</code> to communicate with your
 *             Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a
 *                 kubeconfig for Amazon EKS</a>.</p>
 *         <note>
 *             <p>The API server endpoint and certificate authority data aren't available until the
 *                 cluster reaches the <code>ACTIVE</code> state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterCommand extends $Command<DescribeClusterCommandInput, DescribeClusterCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeClusterCommandInput;
    constructor(input: DescribeClusterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput>;
    private serialize;
    private deserialize;
}
