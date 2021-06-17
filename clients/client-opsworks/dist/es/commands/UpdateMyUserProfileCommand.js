import { __extends } from "tslib";
import { UpdateMyUserProfileRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateMyUserProfileCommand, serializeAws_json1_1UpdateMyUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a user's SSH public key.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new UpdateMyUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMyUserProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateMyUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMyUserProfileCommand(input) {
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
    UpdateMyUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "UpdateMyUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMyUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMyUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMyUserProfileCommand(input, context);
    };
    UpdateMyUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMyUserProfileCommand(output, context);
    };
    return UpdateMyUserProfileCommand;
}($Command));
export { UpdateMyUserProfileCommand };
//# sourceMappingURL=UpdateMyUserProfileCommand.js.map