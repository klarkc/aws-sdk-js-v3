import { __extends } from "tslib";
import { SetTimeBasedAutoScalingRequest } from "../models/models_0";
import { deserializeAws_json1_1SetTimeBasedAutoScalingCommand, serializeAws_json1_1SetTimeBasedAutoScalingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specify the time-based auto scaling configuration for a specified instance. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
 *         Load with Time-based and Load-based Instances</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetTimeBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetTimeBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new SetTimeBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTimeBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link SetTimeBasedAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetTimeBasedAutoScalingCommand = /** @class */ (function (_super) {
    __extends(SetTimeBasedAutoScalingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetTimeBasedAutoScalingCommand(input) {
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
    SetTimeBasedAutoScalingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "SetTimeBasedAutoScalingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetTimeBasedAutoScalingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetTimeBasedAutoScalingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetTimeBasedAutoScalingCommand(input, context);
    };
    SetTimeBasedAutoScalingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetTimeBasedAutoScalingCommand(output, context);
    };
    return SetTimeBasedAutoScalingCommand;
}($Command));
export { SetTimeBasedAutoScalingCommand };
//# sourceMappingURL=SetTimeBasedAutoScalingCommand.js.map