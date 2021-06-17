import { __extends } from "tslib";
import { UpdateClusterVersionRequest, UpdateClusterVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateClusterVersionCommand, serializeAws_restJson1UpdateClusterVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues
 *             to function during the update. The response output includes an update ID that you can
 *             use to track the status of your cluster update with the <a>DescribeUpdate</a>
 *             API operation.</p>
 *         <p>Cluster updates are asynchronous, and they should finish within a few minutes. During
 *             an update, the cluster status moves to <code>UPDATING</code> (this status transition is
 *             eventually consistent). When the update is complete (either <code>Failed</code> or
 *                 <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
 *         <p>If your cluster has managed node groups attached to it, all of your node groups’
 *             Kubernetes versions must match the cluster’s Kubernetes version in order to update the
 *             cluster to a new Kubernetes version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdateClusterVersionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdateClusterVersionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new UpdateClusterVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterVersionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterVersionCommand(input) {
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
    UpdateClusterVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "UpdateClusterVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateClusterVersionCommand(input, context);
    };
    UpdateClusterVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateClusterVersionCommand(output, context);
    };
    return UpdateClusterVersionCommand;
}($Command));
export { UpdateClusterVersionCommand };
//# sourceMappingURL=UpdateClusterVersionCommand.js.map