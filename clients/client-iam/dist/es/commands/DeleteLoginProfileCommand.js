import { __extends } from "tslib";
import { DeleteLoginProfileRequest } from "../models/models_0";
import { deserializeAws_queryDeleteLoginProfileCommand, serializeAws_queryDeleteLoginProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the password for the specified IAM user, which terminates the user's ability
 *             to access AWS services through the AWS Management Console.</p>
 *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user.
 *             You can use <a>ChangePassword</a> to update, but not delete, your own
 *             password in the <b>My Security Credentials</b> page in the
 *             AWS Management Console.</p>
 *         <important>
 *             <p> Deleting a user's password does not prevent a user from accessing AWS through
 *                 the command line interface or the API. To prevent all user access, you must also
 *                 either make any access keys inactive or delete them. For more information about
 *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
 *                     <a>DeleteAccessKey</a>. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoginProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLoginProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteLoginProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLoginProfileCommand(input) {
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
    DeleteLoginProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteLoginProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLoginProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLoginProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteLoginProfileCommand(input, context);
    };
    DeleteLoginProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteLoginProfileCommand(output, context);
    };
    return DeleteLoginProfileCommand;
}($Command));
export { DeleteLoginProfileCommand };
//# sourceMappingURL=DeleteLoginProfileCommand.js.map