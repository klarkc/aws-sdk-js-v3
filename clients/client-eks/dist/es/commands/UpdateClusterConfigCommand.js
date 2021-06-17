import { __extends } from "tslib";
import { UpdateClusterConfigRequest, UpdateClusterConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateClusterConfigCommand, serializeAws_restJson1UpdateClusterConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the
 *             update. The response output includes an update ID that you can use to track the status
 *             of your cluster update with the <a>DescribeUpdate</a> API operation.</p>
 *         <p>You can use this API operation to enable or disable exporting the Kubernetes control
 *             plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't
 *             exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS
 *                 Cluster Control Plane Logs</a> in the
 *             <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>.</p>
 *         <note>
 *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
 *                 control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *         </note>
 *         <p>You can also use this API operation to enable or disable public and private access to
 *             your cluster's Kubernetes API server endpoint. By default, public access is enabled, and
 *             private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
 *                 Endpoint Access Control</a> in the <i>
 *                <i>Amazon EKS User Guide</i>
 *             </i>. </p>
 *         <important>
 *             <p>You can't update the subnets or security group IDs for an existing cluster.</p>
 *         </important>
 *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateClusterConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterConfigCommand(input) {
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
    UpdateClusterConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "UpdateClusterConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateClusterConfigCommand(input, context);
    };
    UpdateClusterConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateClusterConfigCommand(output, context);
    };
    return UpdateClusterConfigCommand;
}($Command));
export { UpdateClusterConfigCommand };
//# sourceMappingURL=UpdateClusterConfigCommand.js.map