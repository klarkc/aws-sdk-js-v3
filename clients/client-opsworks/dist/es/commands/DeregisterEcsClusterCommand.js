import { __extends } from "tslib";
import { DeregisterEcsClusterRequest } from "../models/models_0";
import { deserializeAws_json1_1DeregisterEcsClusterCommand, serializeAws_json1_1DeregisterEcsClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters a specified Amazon ECS cluster from a stack.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete">
 *         Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeregisterEcsClusterCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeregisterEcsClusterCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DeregisterEcsClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterEcsClusterCommandInput} for command's `input` shape.
 * @see {@link DeregisterEcsClusterCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterEcsClusterCommand = /** @class */ (function (_super) {
    __extends(DeregisterEcsClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterEcsClusterCommand(input) {
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
    DeregisterEcsClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DeregisterEcsClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterEcsClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterEcsClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterEcsClusterCommand(input, context);
    };
    DeregisterEcsClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterEcsClusterCommand(output, context);
    };
    return DeregisterEcsClusterCommand;
}($Command));
export { DeregisterEcsClusterCommand };
//# sourceMappingURL=DeregisterEcsClusterCommand.js.map