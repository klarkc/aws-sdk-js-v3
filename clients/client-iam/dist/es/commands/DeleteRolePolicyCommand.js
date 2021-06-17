import { __extends } from "tslib";
import { DeleteRolePolicyRequest } from "../models/models_0";
import { deserializeAws_queryDeleteRolePolicyCommand, serializeAws_queryDeleteRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified inline policy that is embedded in the specified IAM
 *             role.</p>
 *         <p>A role can also have managed policies attached to it. To detach a managed policy from
 *             a role, use <a>DetachRolePolicy</a>. For more information about policies,
 *             refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRolePolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRolePolicyCommand(input) {
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
    DeleteRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteRolePolicyCommand(input, context);
    };
    DeleteRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteRolePolicyCommand(output, context);
    };
    return DeleteRolePolicyCommand;
}($Command));
export { DeleteRolePolicyCommand };
//# sourceMappingURL=DeleteRolePolicyCommand.js.map