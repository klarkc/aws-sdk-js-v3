"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClusterCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the Amazon EKS cluster control plane.</p>
 *         <p>If you have active services in your cluster that are associated with a load balancer,
 *             you must delete those services before deleting the cluster so that the load balancers
 *             are deleted properly. Otherwise, you can have orphaned resources in your VPC that
 *             prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a
 *                 Cluster</a> in the <i>Amazon EKS User Guide</i>.</p>
 *         <p>If you have managed node groups or Fargate profiles attached to the cluster, you must
 *             delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteClusterCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteClusterCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteClusterCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteClusterResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteClusterCommand(output, context);
    }
}
exports.DeleteClusterCommand = DeleteClusterCommand;
//# sourceMappingURL=DeleteClusterCommand.js.map