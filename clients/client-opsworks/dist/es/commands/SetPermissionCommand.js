import { __extends } from "tslib";
import { SetPermissionRequest } from "../models/models_0";
import { deserializeAws_json1_1SetPermissionCommand, serializeAws_json1_1SetPermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and
 *         Permissions</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetPermissionCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetPermissionCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new SetPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetPermissionCommandInput} for command's `input` shape.
 * @see {@link SetPermissionCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetPermissionCommand = /** @class */ (function (_super) {
    __extends(SetPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetPermissionCommand(input) {
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
    SetPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "SetPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetPermissionCommand(input, context);
    };
    SetPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetPermissionCommand(output, context);
    };
    return SetPermissionCommand;
}($Command));
export { SetPermissionCommand };
//# sourceMappingURL=SetPermissionCommand.js.map