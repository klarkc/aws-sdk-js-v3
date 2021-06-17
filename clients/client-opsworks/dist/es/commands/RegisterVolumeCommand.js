import { __extends } from "tslib";
import { RegisterVolumeRequest, RegisterVolumeResult } from "../models/models_0";
import { deserializeAws_json1_1RegisterVolumeCommand, serializeAws_json1_1RegisterVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one
 *       stack at a time. If the volume is already registered, you must first deregister it by calling
 *         <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, RegisterVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, RegisterVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new RegisterVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterVolumeCommandInput} for command's `input` shape.
 * @see {@link RegisterVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterVolumeCommand = /** @class */ (function (_super) {
    __extends(RegisterVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterVolumeCommand(input) {
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
    RegisterVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "RegisterVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterVolumeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterVolumeCommand(input, context);
    };
    RegisterVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterVolumeCommand(output, context);
    };
    return RegisterVolumeCommand;
}($Command));
export { RegisterVolumeCommand };
//# sourceMappingURL=RegisterVolumeCommand.js.map