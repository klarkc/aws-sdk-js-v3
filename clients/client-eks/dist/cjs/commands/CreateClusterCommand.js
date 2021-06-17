"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateClusterCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EKSClient";
        const commandName = "CreateClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateClusterResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateClusterCommand(output, context);
    }
}
exports.CreateClusterCommand = CreateClusterCommand;
//# sourceMappingURL=CreateClusterCommand.js.map