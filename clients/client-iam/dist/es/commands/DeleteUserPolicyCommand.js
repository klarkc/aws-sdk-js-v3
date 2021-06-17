import { __extends } from "tslib";
import { DeleteUserPolicyRequest } from "../models/models_0";
import { deserializeAws_queryDeleteUserPolicyCommand, serializeAws_queryDeleteUserPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             user.</p>
 *         <p>A user can also have managed policies attached to it. To detach a managed policy from
 *             a user, use <a>DetachUserPolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteUserPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserPolicyCommand(input) {
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
    DeleteUserPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteUserPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteUserPolicyCommand(input, context);
    };
    DeleteUserPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteUserPolicyCommand(output, context);
    };
    return DeleteUserPolicyCommand;
}($Command));
export { DeleteUserPolicyCommand };
//# sourceMappingURL=DeleteUserPolicyCommand.js.map