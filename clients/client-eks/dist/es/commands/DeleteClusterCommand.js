import { __extends } from "tslib";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteClusterCommand, serializeAws_restJson1DeleteClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterCommand(input) {
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
    DeleteClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DeleteClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteClusterCommand(input, context);
    };
    DeleteClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteClusterCommand(output, context);
    };
    return DeleteClusterCommand;
}($Command));
export { DeleteClusterCommand };
//# sourceMappingURL=DeleteClusterCommand.js.map