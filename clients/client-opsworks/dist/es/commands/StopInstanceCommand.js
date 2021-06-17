import { __extends } from "tslib";
import { StopInstanceRequest } from "../models/models_0";
import { deserializeAws_json1_1StopInstanceCommand, serializeAws_json1_1StopInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a specified instance. When you stop a standard instance, the data disappears and must
 *       be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without
 *       losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting,
 *         Stopping, and Rebooting Instances</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, StopInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, StopInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new StopInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopInstanceCommandInput} for command's `input` shape.
 * @see {@link StopInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopInstanceCommand = /** @class */ (function (_super) {
    __extends(StopInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopInstanceCommand(input) {
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
    StopInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "StopInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopInstanceCommand(input, context);
    };
    StopInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopInstanceCommand(output, context);
    };
    return StopInstanceCommand;
}($Command));
export { StopInstanceCommand };
//# sourceMappingURL=StopInstanceCommand.js.map