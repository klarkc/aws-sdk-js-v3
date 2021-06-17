import { __extends } from "tslib";
import { AttachRolePolicyRequest } from "../models/models_0";
import { deserializeAws_queryAttachRolePolicyCommand, serializeAws_queryAttachRolePolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
 *             managed policy to a role, the managed policy becomes part of the role's permission
 *             (access) policy.</p>
 *         <note>
 *             <p>You cannot use a managed policy as the role's trust policy. The role's trust
 *                 policy is created at the same time as the role, using <a>CreateRole</a>.
 *                 You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
 *         </note>
 *         <p>Use this operation to attach a <i>managed</i> policy to a role. To embed
 *             an inline policy in a role, use <a>PutRolePolicy</a>. For more information
 *             about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link AttachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachRolePolicyCommand = /** @class */ (function (_super) {
    __extends(AttachRolePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachRolePolicyCommand(input) {
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
    AttachRolePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "AttachRolePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachRolePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachRolePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAttachRolePolicyCommand(input, context);
    };
    AttachRolePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAttachRolePolicyCommand(output, context);
    };
    return AttachRolePolicyCommand;
}($Command));
export { AttachRolePolicyCommand };
//# sourceMappingURL=AttachRolePolicyCommand.js.map