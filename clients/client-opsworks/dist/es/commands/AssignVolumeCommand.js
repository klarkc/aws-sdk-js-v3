import { __extends } from "tslib";
import { AssignVolumeRequest } from "../models/models_0";
import { deserializeAws_json1_1AssignVolumeCommand, serializeAws_json1_1AssignVolumeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must
 *       first be registered with the stack by calling <a>RegisterVolume</a>. After you register the
 *       volume, you must call <a>UpdateVolume</a> to specify a mount point before calling
 *         <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssignVolumeCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssignVolumeCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssignVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignVolumeCommandInput} for command's `input` shape.
 * @see {@link AssignVolumeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssignVolumeCommand = /** @class */ (function (_super) {
    __extends(AssignVolumeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssignVolumeCommand(input) {
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
    AssignVolumeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "AssignVolumeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssignVolumeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssignVolumeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssignVolumeCommand(input, context);
    };
    AssignVolumeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssignVolumeCommand(output, context);
    };
    return AssignVolumeCommand;
}($Command));
export { AssignVolumeCommand };
//# sourceMappingURL=AssignVolumeCommand.js.map