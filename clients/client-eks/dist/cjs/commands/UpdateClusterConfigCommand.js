"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClusterConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateClusterConfigCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateClusterConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateClusterConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateClusterConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateClusterConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateClusterConfigCommand(output, context);
    }
}
exports.UpdateClusterConfigCommand = UpdateClusterConfigCommand;
//# sourceMappingURL=UpdateClusterConfigCommand.js.map