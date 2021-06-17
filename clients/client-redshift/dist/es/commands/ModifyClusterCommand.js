import { __extends } from "tslib";
import { ModifyClusterMessage, ModifyClusterResult } from "../models/models_1";
import { deserializeAws_queryModifyClusterCommand, serializeAws_queryModifyClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings for a cluster.</p>
 *         <p>You can also change node type and the number of nodes to scale up or down the
 *             cluster. When resizing a cluster, you must specify both the number of nodes and the node
 *             type even if one of the parameters does not change.</p>
 * 		       <p>You can add another security or
 *             parameter group, or change the master user password. Resetting a cluster password or modifying the security groups associated with a cluster do not need a reboot. However, modifying a parameter group requires a reboot for parameters to take effect.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterCommand(input) {
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
    ModifyClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterCommand(input, context);
    };
    ModifyClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterCommand(output, context);
    };
    return ModifyClusterCommand;
}($Command));
export { ModifyClusterCommand };
//# sourceMappingURL=ModifyClusterCommand.js.map