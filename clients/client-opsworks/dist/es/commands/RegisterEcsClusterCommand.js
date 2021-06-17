import { __extends } from "tslib";
import { RegisterEcsClusterRequest, RegisterEcsClusterResult } from "../models/models_0";
import { deserializeAws_json1_1RegisterEcsClusterCommand, serializeAws_json1_1RegisterEcsClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one
 *       cluster with a stack. A cluster can be registered with only one stack.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html">
 *       Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see
 *       <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">
 *       Managing User Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterEcsClusterCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterEcsClusterCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterEcsClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterEcsClusterCommandInput} for command's `input` shape.
 * @see {@link RegisterEcsClusterCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterEcsClusterCommand = /** @class */ (function (_super) {
    __extends(RegisterEcsClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterEcsClusterCommand(input) {
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
    RegisterEcsClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "RegisterEcsClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterEcsClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterEcsClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterEcsClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterEcsClusterCommand(input, context);
    };
    RegisterEcsClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterEcsClusterCommand(output, context);
    };
    return RegisterEcsClusterCommand;
}($Command));
export { RegisterEcsClusterCommand };
//# sourceMappingURL=RegisterEcsClusterCommand.js.map