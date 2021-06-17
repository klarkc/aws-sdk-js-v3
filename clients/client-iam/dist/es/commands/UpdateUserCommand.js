import { __extends } from "tslib";
import { UpdateUserRequest } from "../models/models_1";
import { deserializeAws_queryUpdateUserCommand, serializeAws_queryUpdateUserCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name and/or the path of the specified IAM user.</p>
 *         <important>
 *             <p> You should understand the implications of changing an IAM user's path or name.
 *                 For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM
 *                     user</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM
 *                     group</a> in the <i>IAM User Guide</i>.</p>
 *         </important>
 *         <note>
 *             <p> To change a user name, the requester must have appropriate permissions on both
 *                 the source object and the target object. For example, to change Bob to Robert, the
 *                 entity making the request must have permission on Bob and Robert, or must have
 *                 permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and policies</a>. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserCommand = /** @class */ (function (_super) {
    __extends(UpdateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserCommand(input) {
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
    UpdateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateUserCommand(input, context);
    };
    UpdateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateUserCommand(output, context);
    };
    return UpdateUserCommand;
}($Command));
export { UpdateUserCommand };
//# sourceMappingURL=UpdateUserCommand.js.map