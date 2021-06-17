import { __extends } from "tslib";
import { DeletePolicyRequest } from "../models/models_0";
import { deserializeAws_queryDeletePolicyCommand, serializeAws_queryDeletePolicyCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified managed policy.</p>
 *         <p>Before you can delete a managed policy, you must first detach the policy from all
 *             users, groups, and roles that it is attached to. In addition, you must delete all the
 *             policy's versions. The following steps describe the process for deleting a managed
 *             policy:</p>
 *         <ul>
 *             <li>
 *                 <p>Detach the policy from all users, groups, and roles that the policy is
 *                     attached to, using <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a>. To
 *                     list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>.
 *                     To list the policy's versions, use <a>ListPolicyVersions</a>. You
 *                     cannot use <a>DeletePolicyVersion</a> to delete the version that is
 *                     marked as the default version. You delete the policy's default version in the
 *                     next step of the process.</p>
 *             </li>
 *             <li>
 *                 <p>Delete the policy (this automatically deletes the policy's default version)
 *                     using this operation.</p>
 *             </li>
 *          </ul>
 *         <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeletePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeletePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePolicyCommand = /** @class */ (function (_super) {
    __extends(DeletePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePolicyCommand(input) {
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
    DeletePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeletePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeletePolicyCommand(input, context);
    };
    DeletePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeletePolicyCommand(output, context);
    };
    return DeletePolicyCommand;
}($Command));
export { DeletePolicyCommand };
//# sourceMappingURL=DeletePolicyCommand.js.map