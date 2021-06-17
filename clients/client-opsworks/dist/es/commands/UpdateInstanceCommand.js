import { __extends } from "tslib";
import { UpdateInstanceRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateInstanceCommand, serializeAws_json1_1UpdateInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a specified instance.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceCommand(input) {
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
    UpdateInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "UpdateInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateInstanceCommand(input, context);
    };
    UpdateInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateInstanceCommand(output, context);
    };
    return UpdateInstanceCommand;
}($Command));
export { UpdateInstanceCommand };
//# sourceMappingURL=UpdateInstanceCommand.js.map