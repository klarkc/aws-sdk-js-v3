import { __extends } from "tslib";
import { RegisterInstanceRequest, RegisterInstanceResult } from "../models/models_0";
import { deserializeAws_json1_1RegisterInstanceCommand, serializeAws_json1_1RegisterInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p>
 *          <note>
 *             <p>We do not recommend using this action to register instances. The complete registration
 *       operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering
 *       the instance with the stack. <code>RegisterInstance</code> handles only the second step. You
 *       should instead use the AWS CLI <code>register</code> command, which performs the entire
 *       registration operation. For more information,
 *       see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html">
 *       Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p>
 *          </note>
 *          <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API.
 *       For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance
 *       type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html">
 *           Preparing the Instance</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterInstanceCommand = /** @class */ (function (_super) {
    __extends(RegisterInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterInstanceCommand(input) {
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
    RegisterInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "RegisterInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterInstanceCommand(input, context);
    };
    RegisterInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterInstanceCommand(output, context);
    };
    return RegisterInstanceCommand;
}($Command));
export { RegisterInstanceCommand };
//# sourceMappingURL=RegisterInstanceCommand.js.map