import { __extends } from "tslib";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateClusterCommand, serializeAws_restJson1CreateClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateClusterCommand = /** @class */ (function (_super) {
    __extends(CreateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "CreateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateClusterCommand(input, context);
    };
    CreateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateClusterCommand(output, context);
    };
    return CreateClusterCommand;
}($Command));
export { CreateClusterCommand };
//# sourceMappingURL=CreateClusterCommand.js.map