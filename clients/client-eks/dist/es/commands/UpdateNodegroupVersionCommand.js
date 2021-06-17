import { __extends } from "tslib";
import { UpdateNodegroupVersionRequest, UpdateNodegroupVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateNodegroupVersionCommand, serializeAws_restJson1UpdateNodegroupVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p>
 *         <p>You can update a node group using a launch template only if the node group was
 *             originally deployed with a launch template. If you need to update a custom AMI in a node
 *             group that was deployed with a launch template, then update your custom AMI, specify the
 *             new ID in a new version of the launch template, and then update the node group to the
 *             new version of the launch template.</p>
 *         <p>If you update without a launch template, then you can update to the latest available
 *             AMI version of a node group's current Kubernetes version by not specifying a Kubernetes
 *             version in the request. You can update to the latest AMI version of your cluster's
 *             current Kubernetes version by specifying your cluster's Kubernetes version in the
 *             request. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS
 *                 optimized Amazon Linux 2 AMI versions</a> in the <i>Amazon EKS User Guide</i>.</p>
 *         <p>You cannot roll back a node group to an earlier Kubernetes version or AMI
 *             version.</p>
 *         <p>When a node in a managed node group is terminated due to a scaling action or update,
 *             the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully
 *             and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS
 *             is unable to drain the nodes as a result of a pod disruption budget issue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateNodegroupVersionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateNodegroupVersionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateNodegroupVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNodegroupVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateNodegroupVersionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNodegroupVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateNodegroupVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNodegroupVersionCommand(input) {
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
    UpdateNodegroupVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "UpdateNodegroupVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNodegroupVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNodegroupVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNodegroupVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateNodegroupVersionCommand(input, context);
    };
    UpdateNodegroupVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateNodegroupVersionCommand(output, context);
    };
    return UpdateNodegroupVersionCommand;
}($Command));
export { UpdateNodegroupVersionCommand };
//# sourceMappingURL=UpdateNodegroupVersionCommand.js.map