import { __extends } from "tslib";
import { UpdateAppRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateAppCommand, serializeAws_json1_1UpdateAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a specified app.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
 *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
 *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateAppCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateAppCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAppCommand = /** @class */ (function (_super) {
    __extends(UpdateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAppCommand(input) {
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
    UpdateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "UpdateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAppCommand(input, context);
    };
    UpdateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAppCommand(output, context);
    };
    return UpdateAppCommand;
}($Command));
export { UpdateAppCommand };
//# sourceMappingURL=UpdateAppCommand.js.map